export default {
  title: 'Binariotheca Challenges',
  description: 'Коллекция заданий и гайдов для разработчиков',
  base: '/binariotheca-challenges/', // для GitHub Pages обязательно
  sidebar: [
    { text: '📖 Введение', link: '/intro' },
    { text: '⚡ Установка', link: '/install' },
    {
      text: '🚀 Челленджи',
      items: [
        { text: 'Основы JavaScript', link: '/challenges/js-basics' },
        { text: 'HTML & CSS', link: '/challenges/html-css' },
        { text: 'Алгоритмы', link: '/challenges/algorithms' }
      ]
    },
    {
      text: '🛠 Дополнительно',
      items: [
        { text: 'FAQ', link: '/faq' },
        { text: 'Контакты', link: '/contacts' }
      ]
    }
  ]
};
