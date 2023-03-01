import { Badge, Card, Drawer, Space, Tag, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

import dbLogo from '../../assets/img/VIER-Logo.png';
import { BellOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
    /**
     * Notifsications = comments
     * Messages = posts
     */
    const [openMessages, setOpenMessages] = useState(false);
    const [openNotifs, setOpenNotifs] = useState(false);
    const [messages, setMessages] = useState([]);
    const [notifs, setNotifs] = useState([]);

    const fetchMessages = async () => {
        const result = await axios.get(process.env.REACT_APP_MESSAGES_URL);
        console.log('result', result.data);
        setMessages(result.data.comments);
    };
    const fetchNotifs = async () => {
        const result = await axios.get(process.env.REACT_APP_NOTIF_URL);
        console.log('result', result.data);
        setNotifs(result.data.posts);
        console.log('notifs', notifs);
    };
    const handleOpenMessages = () => {
        setOpenMessages(true);
    };
    const handleCloseMessages = () => {
        setOpenMessages(false);
    };
    const handleOpenNotifs = () => {
        setOpenNotifs(true);
    };
    const handleCloseNotifs = () => {
        setOpenNotifs(false);
    };

    useEffect(() => {
        openMessages && fetchMessages();
        openNotifs && fetchNotifs();
    }, [openMessages, openNotifs]);
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
                {/* Notifsication number on top right corner of wrapped icon -> can also just display a "dot" instead of number */}
                <Badge count={10}>
                    <MailOutlined
                        style={{ fontSize: 24 }}
                        onClick={handleOpenMessages}
                    />
                </Badge>
                <Badge count={20}>
                    <BellOutlined
                        style={{ fontSize: 24 }}
                        onClick={handleOpenNotifs}
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
                            key={message.id}
                            size={'small'}
                            direction='vertical'
                            style={{
                                display: 'flex',
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
                    open={openNotifs}
                    onClose={handleCloseNotifs}
                >
                    {notifs.map((notif) => (
                        <Space
                            key={notif.id}
                            size={'small'}
                            direction='vertical'
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Card
                                title={notif.title}
                                hoverable
                                style={{ marginBottom: '24px' }}
                            >
                                <Space direction='vertical' size={20}>
                                    <span>{notif.body}</span>
                                    <Space direction='horizontal'>
                                        {notif.tags.map((tag) => (
                                            <Tag color='processing' key={tag}>{tag}</Tag>
                                        ))}
                                    </Space>
                                </Space>
                            </Card>
                        </Space>
                    ))}
                </Drawer>
            </Space>
        </div>
    );
};

export default Header;
