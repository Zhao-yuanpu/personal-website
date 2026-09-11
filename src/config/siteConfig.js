export const siteConfig = {
  navigation: [
    { label: '首页', target: 'home' },
    { label: '经历', target: 'growth' },
    { label: '兴趣', target: 'interests' },
    { label: '联系', target: 'contact' },
  ],
  interests: [
    {
      id: 'music',
      label: 'CLASSICAL MUSIC',
      title: '古典乐',
      href: './专辑/index.html',
      image: './assets/images/interest-music.webp',
    },
    {
      id: 'sports',
      label: 'RUNNING',
      title: '运动',
      href: '#/interests/sports',
      image: './assets/images/interest-running.webp',
    },
    {
      id: 'movies',
      label: 'CINEMA',
      title: '电影',
      href: '#/interests/movies',
      image: './assets/images/interest-movies.webp',
    },
  ],
  contact: {
    phone: '+86 1XX XXXX XXXX',
    email: 'name@example.com',
    wechatQrSrc: './assets/images/wechat-qr.webp',
  },
};
