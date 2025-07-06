// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  examSidebar: [
    // Если у вас есть intro.md в корне docs/
    {
      type: 'doc',
      id: 'intro', // Должен соответствовать имени файла без .md
      label: 'Главная',
    },
    {
      type: 'category',
      label: 'Теория',
      items: [
        'theory/basic-concepts', // Соответствует theory/basic-concepts.md
        'theory/database',      // Соответствует theory/database.md
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Практика',
      items: [
        'practice/interface',  // Соответствует practice/interface.md
        'practice/module4',    // Соответствует practice/module4.md
      ],
    }
  ],
};

export default sidebars;