import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SideMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState('/');

    useEffect(() => {
        const path = location.pathname;
        setSelectedKeys(path);
    }, [location.pathname]);
    return (
        <div className='sideMenu'>
            {/* TODO: implement theme change */}
            {/* menu from antd */}
            {/* using antd menu component to render a list of objects to the dedicated place */}
            {/* menu entries need a specific key -> can use the link param as key 
            which makes it easier to use it for the onclick function of each item */}
            <Menu
                className='sideMenu-vertical'
                mode='vertical'
                onClick={(item) => {
                    /* item.key */
                    /* navigate from usenavigate to the selected page */
                    navigate(item.key);
                }}
                /* based on this the menu will get it's highlights for current location */
                selectedKeys={[selectedKeys]}
                items={[
                    {
                        label: 'Dashboard',
                        key: '/',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: 'Inventory',
                        key: '/inventory',
                        icon: <ShopOutlined />,
                    },
                    {
                        label: 'Orders',
                        key: '/orders',
                        icon: <ShoppingOutlined />,
                    },
                    {
                        label: 'Customers',
                        key: '/customers',
                        icon: <UserOutlined />,
                    },
                ]}
            ></Menu>
        </div>
    );
};

export default SideMenu;
