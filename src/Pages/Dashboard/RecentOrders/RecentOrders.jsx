import { Card, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const RecentOrders = () => {
    const [dataSource, setDataSource] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchOrder();
        setIsLoading(false);
    });
    const fetchOrder = async () => {
        const result = await axios.get('https://dummyjson.com/carts/1');
        setDataSource(result.data);
    };
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
                            title: 'Pitle',
                            dataIndex: 'discountedPrice',
                        },
                    ]}
                    loading={isLoading}
                    dataSource={dataSource.products}
                    key={dataSource.id}
                    pagination={false}
                ></Table>
            </Card>
        </div>
    );
};

export default RecentOrders;
