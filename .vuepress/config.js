module.exports = {
  base: '/guia-taller-nuxt/',
  dest: 'docs',
  title: 'Taller Nuxt',
  description: 'Aprende Nuxt con este taller',
  themeConfig: {
    nav: [
      { text: 'Empieza aquí', link: '/empieza-aqui/' },
      { text: 'Desafíos', link: '/desafios/primer-desafio/' },
      {
        text: 'GitHub',
        link: 'https://github.com/vuejs-colombia/guia-taller-nuxt'
      }
    ],
    sidebar: {
      '/empieza-aqui/': ['/empieza-aqui/'],
      '/desafios/': [
        {
          title: 'Primer desafío',
          collapsable: false,
          children: [
            '/desafios/primer-desafio/',
            '/desafios/primer-desafio/layout/',
            '/desafios/primer-desafio/componentes/',
            '/desafios/primer-desafio/routing/',
            '/desafios/primer-desafio/routing-dinamico/',
            '/desafios/primer-desafio/routing-anidado/'
          ]
        },
        {
          title: 'Segundo desafío',
          collapsable: false,
          children: ['/desafios/segundo-desafio/']
        }
      ]
    }
  }
};
