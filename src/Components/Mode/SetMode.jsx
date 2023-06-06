import { Space, Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const SetMode = ({ automatic, isDarkTheme }) => {
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        if (isDarkTheme) {
            setDarkMode();
        } else {
            setLightMode();
        }
    }, [isDarkTheme]);

    const setDarkMode = () => {
        setIsLightMode(false);
        document.querySelector('body').setAttribute('data-theme', 'dark');
    };

    const setLightMode = () => {
        setIsLightMode(true);
        document.querySelector('body').setAttribute('data-theme', 'light');
    };

    const toggleTheme = (e) => {
        e ? setDarkMode() : setLightMode();
    };

    return (
        <div className='darkmode'>
            <Space direction='vertical' style={{ marginLeft: 20 }}>
                <Switch
                    checkedChildren={<BsMoon />}
                    unCheckedChildren={<BsSun />}
                    defaultChecked={isDarkTheme}
                    onChange={toggleTheme}
                    disabled={automatic}
                />
            </Space>
        </div>
    );
};

export default SetMode;
