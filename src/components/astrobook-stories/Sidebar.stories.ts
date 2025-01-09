import Sidebar from '@components/Sidebar.astro';

export default {
  component: Sidebar,
};

export const Empty = {
  args: {},
};

export const Full = {
  args: {
    title: 'Title',
    headings: [
      { text: 'Prerequisites', slug: 'prerequisites', depth: 2 },
      { text: 'Browser compatibility', slug: 'browser-compatibility', depth: 2 },
      { text: 'Install from the CLI wizard', slug: 'install-from-the-cli-wizard', depth: 2 },
      { text: 'CLI installation flags', slug: 'cli-installation-flags', depth: 2 },
      { text: 'Add integrations', slug: 'add-integrations', depth: 3 },
      { text: 'Use a theme or starter template', slug: 'use-a-theme-or-starter-template', depth: 3 },
      { text: 'Manual Setup', slug: 'manual-setup', depth: 2 },
      { text: 'Testing depth', slug: 'manual-setup', depth: 2 },
      { text: 'Testing depth', slug: 'manual-setup', depth: 3 },
      { text: 'Testing depth', slug: 'manual-setup', depth: 4 },
      { text: 'Testing depth', slug: 'manual-setup', depth: 5 },
      { text: 'Testing depth', slug: 'manual-setup', depth: 6 },
      {
        text: 'Testing length: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        slug: 'manual-setup',
        depth: 2,
      },
    ],
    navigations: [
      { url: '/', label: 'Main' },
      { url: '/blog', label: 'Blog' },
      { url: '/policy', label: 'Policy' },
      { url: '/contact', label: 'Contact' },
    ],
  },
};
