export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'ダッシュボード',
        to: '/',
        icon: 'cil-speedometer',
        badge: {
          color: 'primary',
          text: 'NEW'
        }
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['管理メニュー']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'ユーザ管理',
        route: '/users',
        icon: 'cil-user',
        items: [
          {
            name: 'ユーザ一覧',
            to: '/users/list'
          },
          {
            name: 'ユーザ新規登録',
            to: '/users/new'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: '設定',
        to: '/configs',
        icon: 'cil-puzzle'
      }
    ]
  }
]