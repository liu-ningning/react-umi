import React from 'react'
import { history, useLocation } from 'umi';
import GlobalFooter from '../global-footer'
import './index.less';
import menu from './menu'

const SiderMenu = (props: any) => {
  const { pathname } = useLocation()
  console.warn(pathname)

  return (
    <div className="sider_wrap">
      <div className="sider_menu">
        {menu.map((item, index) => (
          <p
            key={index}
            onClick={() => history.push(`${item.path}`)}
            className={`${pathname === item.path ? 'active' : ''}`}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </p>
        ))}
      </div>
      <div className="sider_cont">
        <div className="page_wrap">
          {props.children}
        </div>
        <div className="page_footer">
          <GlobalFooter />
        </div>
      </div>
    </div>
  )
}
export default SiderMenu

