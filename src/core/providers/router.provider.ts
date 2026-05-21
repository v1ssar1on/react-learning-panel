import { routerConfig } from '@/shared/configs/router.config'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: routerConfig.HOME.path,
    element: routerConfig.HOME.element,
    children: routerConfig.HOME.children,
  },
])
