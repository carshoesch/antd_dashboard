import React from 'react';
import { Card, Space, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const DashboardCard = ({ title, value, direction, icon, diff }) => {
return (
        <div>
            {/* card is used to have a border around items */}
            <Link to={`/${title}`}>
                <Card hoverable style={{ width: 300, position: 'relative' }}>
                    <Space direction={direction}>
                        {icon}
                        <Space direction='horizontal'>
                            <Statistic title={title} value={value} />
                        </Space>
                        {diff && (
                            <div
                                className='difference'
                                style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '50px',
                                    color: diff > 0 ? 'green' : 'red',
                                }}
                            >
                                <span>{diff}%</span>
                            </div>
                        )}
                    </Space>
                </Card>
            </Link>
        </div>
    );
};

export default DashboardCard;
