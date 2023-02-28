import { Badge, Drawer, Space, Typography } from 'antd';
import React, { useState } from 'react';

import dbLogo from '../../assets/img/VIER-Logo.png';
import { BellOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Header = () => {
    const [openComments, setOpenComments] = useState(false);
    const [openNotif, setOpenNotif] = useState(false);

    const handleOpenComments = () => {
        setOpenComments(true);
    };
    const handleCloseComments = () => {
        setOpenComments(false);
    };
    const handleOpenNotif = () => {
        setOpenNotif(true);
    };
    const handleCloseNotif = () => {
        setOpenNotif(false);
    };
    return (
        <div className='header'>
            <Link to={'/'}>
                {/**
                 *  Image is a img-tag with other properties(zoom in and stuff)
                 * -> decided to use normal img tag */}
                <img src={dbLogo} width={150} />
            </Link>
            {/* h1 headline */}
            <Typography.Title>Test Dashboard</Typography.Title>
            <Space>
                {/* notification number on top right corner of wrapped icon -> can also just display a "dot" instead of number */}
                <Badge count={10}>
                    <MailOutlined
                        style={{ fontSize: 24 }}
                        onClick={handleOpenComments}
                    />
                </Badge>
                <Badge count={20}>
                    <BellOutlined
                        style={{ fontSize: 24 }}
                        onClick={handleOpenNotif}
                    />
                </Badge>
                <Drawer
                    title='Comments'
                    open={openComments}
                    onClose={handleCloseComments}
                >
                    This is the Comments Drawer
                </Drawer>
                <Drawer
                    title='Notifications'
                    open={openNotif}
                    onClose={handleCloseNotif}
                >
                    This is the Notifications Drawer
                </Drawer>
            </Space>
        </div>
    );
};

export default Header;
