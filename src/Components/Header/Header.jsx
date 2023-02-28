import { Badge, Image, Space, Typography } from 'antd';
import React from 'react';

import dbLogo from '../../assets/img/VIER-Logo.png';
import { BellOutlined, MailOutlined } from '@ant-design/icons';

const Header = () => {
    return (
        <div className='header'>
            {/* image is a img-tag with other properties */}
            <Image src={dbLogo} width={150} />
            {/* h1 headline */}
            <Typography.Title>Test Dashboard</Typography.Title>
            <Space>
                {/* notification number on top right corner of wrapped icon -> can also just display a "dot" instead of number */}
                <Badge count={10}>
                    <MailOutlined style={{ fontSize: 24 }} />
                </Badge>
                <Badge count={20}>
                    <BellOutlined style={{ fontSize: 24 }} />
                </Badge>
            </Space>
        </div>
    );
};

export default Header;
