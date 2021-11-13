export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: '/',
        title: '主页',
        component: '../pages/main'
      },
      {
        path: '/home',
        title: 'home',
        component: '../pages/home'
      },
      {
        component: '../pages/error/404'
      }
    ]
  }
]
