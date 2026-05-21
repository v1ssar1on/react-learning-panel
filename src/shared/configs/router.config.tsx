import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const DefaultLayout = lazy(() => import('@/core/layout/default-layout'))
const HomePage = lazy(() => import('@/app/(root)/index'))

const InstallationPage = lazy(
  () => import('@/app/getting-started/installation/page'),
)
const ProjectStructurePage = lazy(
  () => import('@/app/getting-started/project-structure/page'),
)

const RoutingPage = lazy(() => import('@/app/build/routing/page'))
const DataFetchingPage = lazy(() => import('@/app/build/data-fetching/page'))
const RenderingPage = lazy(() => import('@/app/build/rendering/page'))
const CachingPage = lazy(() => import('@/app/build/caching/page'))
const StylingPage = lazy(() => import('@/app/build/styling/page'))
const OptimizingPage = lazy(() => import('@/app/build/optimizing/page'))
const ConfiguringPage = lazy(() => import('@/app/build/configuring/page'))
const TestingPage = lazy(() => import('@/app/build/testing/page'))
const AuthenticationPage = lazy(() => import('@/app/build/authentication/page'))
const DeployingPage = lazy(() => import('@/app/build/deploying/page'))
const UpgradingPage = lazy(() => import('@/app/build/upgrading/page'))
const ExamplesPage = lazy(() => import('@/app/build/examples/page'))

const ComponentsPage = lazy(() => import('@/app/api-reference/components/page'))
const FileConventionsPage = lazy(
  () => import('@/app/api-reference/file-conventions/page'),
)
const FunctionsPage = lazy(() => import('@/app/api-reference/functions/page'))
const ConfigOptionsPage = lazy(
  () => import('@/app/api-reference/config-options/page'),
)
const CliPage = lazy(() => import('@/app/api-reference/cli/page'))
const EdgeRuntimePage = lazy(
  () => import('@/app/api-reference/edge-runtime/page'),
)

const AccessibilityPage = lazy(
  () => import('@/app/architecture/accessibility/page'),
)
const FastRefreshPage = lazy(
  () => import('@/app/architecture/fast-refresh/page'),
)
const CompilerPage = lazy(() => import('@/app/architecture/compiler/page'))
const BrowsersPage = lazy(() => import('@/app/architecture/browsers/page'))
const TurbopackPage = lazy(() => import('@/app/architecture/turbopack/page'))

export const routerConfig: Record<string, RouteObject> = {
  HOME: {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { index: true, element: <HomePage /> },

      { path: 'getting-started/installation', element: <InstallationPage /> },
      {
        path: 'getting-started/project-structure',
        element: <ProjectStructurePage />,
      },

      { path: 'build/routing', element: <RoutingPage /> },
      { path: 'build/data-fetching', element: <DataFetchingPage /> },
      { path: 'build/rendering', element: <RenderingPage /> },
      { path: 'build/caching', element: <CachingPage /> },
      { path: 'build/styling', element: <StylingPage /> },
      { path: 'build/optimizing', element: <OptimizingPage /> },
      { path: 'build/configuring', element: <ConfiguringPage /> },
      { path: 'build/testing', element: <TestingPage /> },
      { path: 'build/authentication', element: <AuthenticationPage /> },
      { path: 'build/deploying', element: <DeployingPage /> },
      { path: 'build/upgrading', element: <UpgradingPage /> },
      { path: 'build/examples', element: <ExamplesPage /> },

      { path: 'api-reference/components', element: <ComponentsPage /> },
      {
        path: 'api-reference/file-conventions',
        element: <FileConventionsPage />,
      },
      { path: 'api-reference/functions', element: <FunctionsPage /> },
      { path: 'api-reference/config-options', element: <ConfigOptionsPage /> },
      { path: 'api-reference/cli', element: <CliPage /> },
      { path: 'api-reference/edge-runtime', element: <EdgeRuntimePage /> },

      { path: 'architecture/accessibility', element: <AccessibilityPage /> },
      { path: 'architecture/fast-refresh', element: <FastRefreshPage /> },
      { path: 'architecture/compiler', element: <CompilerPage /> },
      { path: 'architecture/browsers', element: <BrowsersPage /> },
      { path: 'architecture/turbopack', element: <TurbopackPage /> },
    ],
  },
} as const
