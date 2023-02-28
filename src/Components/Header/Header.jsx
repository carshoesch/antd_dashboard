import { Badge, Card, Drawer, Space, Statistic, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

import dbLogo from '../../assets/img/VIER-Logo.png';
import { BellOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
    /**
     * Notifications = comments
     * Messages = posts
     */
    const [openMessages, setOpenMessages] = useState(false);
    const [openNotif, setOpenNotif] = useState(false);
    const [messages, setMessages] = useState([]);
    const [notif, setNotif] = useState([]);

    const fetchMessages = async () => {
        const result = await axios.get(process.env.REACT_APP_MESSAGES_URL);
        console.log('result', result);
        setMessages(result.data.posts);
    };
    const fetchNotif = async () => {
        const result = await axios.get(process.env.REACT_APP_POSTS_URL);
        console.log('result', result.data);
        setNotif(result.data);
    };
    const handleOpenMessages = () => {
        setOpenMessages(true);
    };
    const handleCloseMessages = () => {
        setOpenMessages(false);
    };
    const handleOpenNotif = () => {
        setOpenNotif(true);
    };
    const handleCloseNotif = () => {
        setOpenNotif(false);
    };

    useEffect(() => {
        openMessages && fetchMessages();
        openNotif && fetchNotif();
    }, [openMessages, openNotif]);
    return (
        <div className='header'>
            <Link to={'/'}>
                {/**
                 *  Image is a img-tag with other properties(zoom in and stuff)
                 * -> decided to use normal img tag */}
                {/* TODO: use wrapper component to avoid redundant multiplication of components */}
                <img src={dbLogo} width={150} alt='Website logo' />
            </Link>
            {/* h1 headline */}
            <Typography.Title>Test Dashboard</Typography.Title>
            <Space>
                {/* notification number on top right corner of wrapped icon -> can also just display a "dot" instead of number */}
                <Badge count={10}>
                    <MailOutlined
                        style={{ fontSize: 24 }}
                        onClick={handleOpenMessages}
                    />
                </Badge>
                <Badge count={20}>
                    <BellOutlined
                        style={{ fontSize: 24 }}
                        onClick={handleOpenNotif}
                    />
                </Badge>
                {/* drawers */}
                <Drawer
                    title='Messages'
                    open={openMessages}
                    onClose={handleCloseMessages}
                >
                    {/* loop over messages and give title and body. Maybe align tags */}
                    {messages.map((message) => (
                        <Space
                            size={'smal'}
                            direction='vertical'
                            style={{
                                display: 'flex',
                                gap: '16px',
                                flexDirection: 'column',
                            }}
                        >
                            <Card
                                title={message.title}
                                hoverable
                                style={{ marginBottom: '24px' }}
                            >
                                <span>{message.body}</span>
                            </Card>
                        </Space>
                    ))}
                </Drawer>
                <Drawer
                    title='Notifications'
                    open={openNotif}
                    onClose={handleCloseNotif}
                >
                    jkl
                </Drawer>
            </Space>
        </div>
    );
};

export default Header;
