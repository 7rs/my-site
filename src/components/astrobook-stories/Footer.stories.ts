import Footer from '@components/Footer.astro';

export default {
  component: Footer,
};

export const Empty = {
  args: {},
};

export const Full = {
  args: {
    socials: [
      { icon: 'simple-icons:telegram', url: 'https://t.me/cbrnex', label: 'Telegram', hoveredColor: '#26A5E4' },
      { icon: 'simple-icons:discord', url: 'https://7rs.dev/discord', label: 'Discord', hoveredColor: '#5865F2' },
      { icon: 'simple-icons:github', url: 'https://github.com/7rs', label: 'GitHub' },
      { icon: 'simple-icons:youtube', url: 'https://youtube.com/@qrze', label: 'YouTube', hoveredColor: '#FF0000' },
      { icon: 'simple-icons:patreon', url: 'https://www.patreon.com/7rs', label: 'Patreon' },
    ],
    navigations: [
      { url: '/', label: 'Main' },
      { url: '/blog', label: 'Blog' },
      { url: '/policy', label: 'Policy' },
      { url: '/contact', label: 'Contact' },
    ],
    copyrightInformation: {
      description: 'No right reserved',
      icon: 'simple-icons:creativecommons',
      url: 'https://github.com/7rs/pages/blob/main/LICENSE',
    },
    buildInformations: {
      astroVersion: '5.1.1',
      hosting: 'Cloudflare',
    },
  },
};
