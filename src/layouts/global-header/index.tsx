import React from 'react'
import { history } from 'umi';
import './index.less'

const GlobalHeader = () => {
  return (
    <div className="global_header">
      <div className="header_lt" onClick={() => history.push('/')}>
        <img src={require('@/assets/home.png')} />
        <span>TOOL</span>
      </div>
      <div className="header_rt">
        顶部菜单栏
      </div>
    </div>
  )
}
export default GlobalHeader
