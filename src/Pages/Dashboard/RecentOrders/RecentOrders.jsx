import { Card, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const RecentOrders = () => {
    const [dataSource, setDataSource] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchOrder = async () => {
        setIsLoading(true);
        const result = await axios.get(process.env.REACT_APP_ORDERS_URL);
        setIsLoading(false);
        setDataSource(result.data.products);
    };

    useEffect(() => {
        fetchOrder();
    }, []);
    return (
        <div>
            <Card style={{ width: 500, height: 450 }}>
                <Typography.Text>Recent Orders</Typography.Text>
                <Table
                    columns={[
                        {
                            title: 'Title',
                            dataIndex: 'title',
                        },
                        {
                            title: 'Quantity',
                            dataIndex: 'quantity',
                        },
                        {
                            title: 'Discounted Price',
                            dataIndex: 'discountedPrice',
                            render: (price) => {
                                return <span>${price}</span>;
                            },
                        },
                    ]}
                    loading={isLoading}
                    dataSource={dataSource}
                    key={dataSource.id}
                    pagination={false}
                ></Table>
            </Card>
        </div>
    );
};

export default RecentOrders;
