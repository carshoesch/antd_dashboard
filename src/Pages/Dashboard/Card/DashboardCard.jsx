import React from 'react';
import { Card, Space, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const DashboardCard = ({ title, value, direction, icon }) => {
    return (
        <div>
            {/* card is used to have a border around items */}
            <Link to={`/${title}`}>
                <Card hoverable style={{ width: 300 }}>
                    <Space direction={direction}>
                        {icon}
                        <Statistic title={title} value={value} />
                    </Space>
                </Card>
            </Link>
        </div>
    );
};

export default DashboardCard;
