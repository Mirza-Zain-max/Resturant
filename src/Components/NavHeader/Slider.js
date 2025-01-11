import React from 'react';
import { AppstoreOutlined, FileAddFilled, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;
const Slider = () => {
    return (
        <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={true}>
                    <div className="demo-logo-vertical" />
                    <Menu theme="dark"
                        mode="inline" defaultSelectedKeys={['2']}
                        items={[{
                            key: '1',
                            icon: <UserOutlined />,
                            label: <Link to='/' className='nav-link'  >Profile</Link>,
                            // onClick: () => navigate('/reg'),
                        },
                        {
                            key: '2',
                            icon: <AppstoreOutlined />,
                            label: <Link to='/todos/add' className='nav-link '  >Add Todos</Link>,

                        },
                        {
                            key: '3',
                            icon: <FileAddFilled />,
                            label: <Link to='/todos' className='nav-link ' >My Todos</Link>,
                        },
                        ]} />
                </Sider>
            </Layout>
        </>
    );
};
export default Slider;