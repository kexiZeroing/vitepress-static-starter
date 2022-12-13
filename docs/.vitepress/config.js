// VitePress-specific configuration
// provide a default title and description for the site
export default {
  title: 'VitePress',
  description: 'hello vitepress',
  themeConfig: {
    nav: [
      { text: 'Roadmap', link: '/roadmap' },
      { text: 'Feedback', link: '/feedback' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      }
    ]
  }
}