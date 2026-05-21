export const sidebarConstants = {
  versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
  navMain: [
    {
      title: 'Getting Started',
      url: '/getting-started/installation',
      items: [
        { title: 'Installation', url: '/getting-started/installation' },
        {
          title: 'Project Structure',
          url: '/getting-started/project-structure',
        },
      ],
    },
    {
      title: 'Build Your Application',
      url: '/build/routing',
      items: [
        { title: 'Routing', url: '/build/routing' },
        { title: 'Data Fetching', url: '/build/data-fetching', isActive: true },
        { title: 'Rendering', url: '/build/rendering' },
        { title: 'Caching', url: '/build/caching' },
        { title: 'Styling', url: '/build/styling' },
        { title: 'Optimizing', url: '/build/optimizing' },
        { title: 'Configuring', url: '/build/configuring' },
        { title: 'Testing', url: '/build/testing' },
        { title: 'Authentication', url: '/build/authentication' },
        { title: 'Deploying', url: '/build/deploying' },
        { title: 'Upgrading', url: '/build/upgrading' },
        { title: 'Examples', url: '/build/examples' },
      ],
    },
    {
      title: 'API Reference',
      url: '/api-reference/components',
      items: [
        { title: 'Components', url: '/api-reference/components' },
        { title: 'File Conventions', url: '/api-reference/file-conventions' },
        { title: 'Functions', url: '/api-reference/functions' },
        {
          title: 'next.config.js Options',
          url: '/api-reference/config-options',
        },
        { title: 'CLI', url: '/api-reference/cli' },
        { title: 'Edge Runtime', url: '/api-reference/edge-runtime' },
      ],
    },
    {
      title: 'Architecture',
      url: '/architecture/accessibility',
      items: [
        { title: 'Accessibility', url: '/architecture/accessibility' },
        { title: 'Fast Refresh', url: '/architecture/fast-refresh' },
        { title: 'Next.js Compiler', url: '/architecture/compiler' },
        { title: 'Supported Browsers', url: '/architecture/browsers' },
        { title: 'Turbopack', url: '/architecture/turbopack' },
      ],
    },
  ],
}
