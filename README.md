# Архитектура проекта

Архитектура рассчитана на **React SPA**, но спроектирована так, чтобы легко мигрировать на **Next.js App Router** — folder-based routing и `metadata.ts` уже совместимы.

---

## Структура

```
src/
├── app/          # Страницы, layout, metadata
├── core/         # Ядро приложения
├── domains/      # Сущности: API, типы, хуки, стейт
├── modules/      # Фичи, привязанные к странице
└── shared/       # Общие утилиты, UI, компоненты, конфиги
```

---

## Слои

### `app/`
Страницы и layout. Разбивка строится через **folder-based routing** — каждый маршрут это папка с `page.tsx` и своим `metadata.ts` внутри. Полностью совместимо с Next.js App Router.

```
app/
├── blog/
│   ├── page.tsx
│   └── metadata.ts
├── profile/
│   ├── page.tsx
│   └── metadata.ts
└── __root.tsx        # Корневой маршрут — подключает RouterProvider с router из core/providers
```

---

### `core/`
Глобальное ядро приложения.

```
core/
├── providers/
│   ├── router.ts     # Инстанс роутера (TanStack Router), импортируется в __root.tsx
│   └── ...           # query client, store provider, theme и т.д.
├── styles/           # Глобальные стили
└── metrics/          # Метрики, аналитика
```

---

### `domains/`
API-слой и глобальный стейт, привязанный к сущностям бэкенда. Сущности названы так же, как на бэке.

**Структура на сущность:**
```
domains/
└── {entity}/
    ├── api.{entity}.ts     # fetch/axios вызовы
    ├── hooks.{entity}.ts   # useQuery-хуки (GET only) + экспорт queryKeys
    ├── store.{entity}.ts   # глобальный стейт (zustand/redux slice), если нужен
    └── types.{entity}.ts   # TypeScript-типы ответов
```

> **Мутации живут в modules** — не переиспользуются, поэтому находятся рядом с компонентами которые их вызывают.
>
> **Query keys экспортируются явно** из `hooks.{entity}.ts`, чтобы мутации в modules могли делать `invalidateQueries` без магических строк.
>
> **`store.{entity}.ts` — только глобальный/серверный стейт.** UI-стейт (пагинация, выбранный элемент, открыта ли модалка) живёт в `modules/{page}/common/`.

---

### `modules/`
Модуль — это всё, что относится к конкретной странице. Называется по имени страницы.

```
modules/
└── {page-name}/
    ├── ui/           # Без бизнес-логики: иконки, badge, ячейки, плашки
    ├── components/   # С логикой: формы, секции, таблицы — импортируются напрямую в page.tsx
    └── common/       # Константы, хелперы, UI-стейт модуля
```

**Граница между `ui/` и `components/`:**
| | `ui/` | `components/` |
|---|---|---|
| Хуки | нет | да |
| Мутации | нет | да |
| Локальный стейт | нет | да |
| Пример | `StatusBadge`, `AvatarCell` | `CreatePostForm`, `PostsTable` |

**Компонент нужен двум модулям?** → поднять в `shared/components/`.

---

### `shared/`
Всё общее, не привязанное к конкретной странице.

```
shared/
├── ui/             # UI-примитивы без бизнес-контекста (свои + дизайн-система)
├── components/     # Переиспользуемые компоненты с доменным контекстом (UserCard, PostPreview)
├── configs/
│   ├── queryConfig.ts   # query keys, react-query настройки
│   └── envConfig.ts     # env-переменные
├── utils/          # Общие утилиты
├── hooks/          # Общие хуки (useMobile и т.п.)
└── assets/         # Статика
```

**Разница между `shared/ui/` и `shared/components/`:**
- `shared/ui/` — знает только про верстку: Button, Input, Modal
- `shared/components/` — знает про домен: UserCard (знает что такое "пользователь")

---

## Принципы

- **GET + глобальный стейт → domains.** Переиспользуются в разных частях приложения.
- **Мутации → modules.** Не переиспользуются, живут рядом с компонентами.
- **UI-стейт → modules/common.** Не смешивать с серверным стейтом в domains.
- **Нужен двум модулям → shared/components.** Не дублировать, не загрязнять ui/.
- **Query keys экспортировать явно** — никаких магических строк при invalidateQueries.
- **Next.js-совместимость.** `app/` + `metadata.ts` на роут + folder routing уже совместимы с App Router. При миграции удаляются только `router.ts` и `__root.tsx`.
