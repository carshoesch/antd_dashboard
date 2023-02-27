import React from 'react';
import { Card, Space, Statistic } from 'antd';

const DashboardCard = ({ title, value, direction, icon }) => {
    return (
        <div>
            {/* card is used to have a border around items */}
            <Card>
                <Space direction={direction}>
                    {icon}
                    <Statistic title={title} value={value} />
                </Space>
            </Card>
        </div>
    );
};

export default DashboardCard;
