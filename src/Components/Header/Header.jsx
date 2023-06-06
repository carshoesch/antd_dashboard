import { Checkbox, Dropdown, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import dbLogo from '../../assets/img/VIER-Logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SetMode from '../Mode/SetMode';
import ThemeDetector from '../ThemeDetector/ThemeDetector';

const Header = () => {
    /**
     * Notifications = comments
     * Messages = posts
     */
    const [openMessages, setOpenMessages] = useState(false);
    const [openNotif, setOpenNotif] = useState(false);
    const [messages, setMessages] = useState([]);
    const [notif, setNotif] = useState([]);
    const isDarkTheme = ThemeDetector();
    const [useSystemTheme, setUseSystemTheme] = useState(false);

    useEffect(() => {
        openMessages && fetchMessages();
        openNotif && fetchNotif();
    }, [openMessages, openNotif]);

    useEffect(() => {
        console.log('isDarkTheme', isDarkTheme);
    }, [isDarkTheme]);

    useEffect(() => {
        console.log('useSystemTheme', useSystemTheme);
    }, [useSystemTheme]);

    const fetchMessages = async () => {
        const result = await axios.get(process.env.REACT_APP_MESSAGES_URL);
        console.log('result.data', result.data);
        setMessages(result.data.posts);
    };
    const fetchNotif = async () => {
        const result = await axios.get(process.env.REACT_APP_POSTS_URL);
        setNotif(result.data);
    };

    const onChange = () => {
        setUseSystemTheme((prevUseSystemTheme) => !prevUseSystemTheme);
    };

    const items = [
        {
            label: (
                <Checkbox defaultChecked={false} onChange={onChange}>
                    Systemfarben nutzen
                </Checkbox>
            ),
            key: '0',
        },
        {
            label: (
                <SetMode automatic={useSystemTheme} isDarkTheme={isDarkTheme} />
            ),
            key: '1',
        },
    ];

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
                {/* checkbox for system theme */}
                <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>Click me</Space>
                    </a>
                </Dropdown>
            </Space>
        </div>
    );
};

export default Header;
