import React from 'react';
import { Menu, Layout } from  'antd'
export default function menu(){
    return(
        <Layout>
        <Menu 
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        </Layout>
    )
}
