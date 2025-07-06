// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Государственный Итоговый Демонстрационный Экзамен',
  tagline: 'C#, WPF, MSSQL',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://demo-guide.vercel.app',
  baseUrl: '/',
	trailingSlash: false,
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false, // Отключаем блог, так как он не нужен
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Методичка по Демо-Экзамену',
      logo: {
        alt: 'Логотип Демо-Экзамена',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'examSidebar',
          position: 'left',
          label: 'Учебное пособие',
        },
        {
          href: 'https://github.com/Vorashi/CSharpGuid', 
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            {
              label: 'Учебное пособие',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Контакты',
          items: [
            {
              label: 'Email',
              href: 'mailto:matvejsarov673@gmail.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Государственный Итоговый Демонстрационный Экзамен.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp'], // Добавлена поддержка C#
    },
  },
};

export default config;