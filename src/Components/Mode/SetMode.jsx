import { Space, Switch } from 'antd';
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs';

const SetMode = () => {
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        setDarkMode()
    }, [])

    const setDarkMode = () => {
        setIsLightMode(false)
        document.querySelector('body').setAttribute('data-theme', 'dark')
    }
    const setLightMode = () => {
        setIsLightMode(true)
        document.querySelector('body').setAttribute('data-theme', 'light')
    }
    const toggleTheme = (e) => {
        if (e) setDarkMode()
        else setLightMode()
    }
    return (
        <div className="darkmode">
            <Space direction="vertical" style={{ marginLeft: 20 }}>
                <Switch
                    checkedChildren={<BsMoon />}
                    unCheckedChildren={<BsSun />}
                    defaultChecked
                    onChange={toggleTheme}
                />
            </Space>
        </div>
    )
}

export default SetMode