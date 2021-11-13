import React from 'react';
import { Layout } from 'antd'
import SiderMenu from './sider-menu'
import GlobalHeader from './global-header'

const BasicLayout = (props: any) => {
  return (
    <Layout>
      <GlobalHeader />
      <SiderMenu>
        {props.children}
      </SiderMenu>
    </Layout>
  );
};

export default BasicLayout;