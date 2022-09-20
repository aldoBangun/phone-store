import React from 'react'
import {
  Layout,
  Menu,
  Affix,
  Divider
} from 'antd'
import { HomeOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons'
import { Outlet, Link } from 'react-router-dom'
import Logo from '../icons/Logo'

const menus = [
  {
    id: 1,
    label: 'Home',
    icon: HomeOutlined,
    href: '/'
  },
  {
    id: 2,
    label: 'About',
    icon: UserOutlined,
    href: '/about'
  },
  {
    id: 3,
    label: 'Contact',
    icon: PhoneOutlined,
    href: '/contact'
  }
]

const sidebarMenu = menus.map((menu) => ({
  key: menu.id,
  icon: React.createElement(menu.icon),
  label: (
    <Link to={menu.href}>
      {menu.label}
    </Link>
  )
}))

class AppLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Layout.Header>
          <Link to="/">
            <Logo />
          </Link>
        </Layout.Header>
        <Layout>
          <Layout.Sider style={{ backgroundColor: 'white' }}>
            <Affix>
              <Menu
                className="app-menu"
                items={sidebarMenu}
              />
            </Affix>
          </Layout.Sider>

          <Layout>
            <Layout.Content
              className="site-layout-background"
            >
              <Outlet />
            </Layout.Content>
            <Divider />
            <Layout.Footer>Phone Store - 2022</Layout.Footer>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default AppLayout
