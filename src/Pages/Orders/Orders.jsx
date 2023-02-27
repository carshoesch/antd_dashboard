import { Space, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    const fetchOrders = async () => {
        const result = await axios.get('https://dummyjson.com/carts/1');
        setDataSource(result.data);
    };
    useEffect(() => {
        setIsLoading(true);
        fetchOrders();
        setIsLoading(false);
    }, []);
    return (
        /* title, price, quantity */
        <div>
            <Space size={20} direction={'vertical'}>
                <Typography.Title level={4}>Orders</Typography.Title>
                <Table
                    columns={[
                        {
                            title: 'Title',
                            dataIndex: 'title',
                        },
                        {
                            title: 'Price',
                            dataIndex: 'price',
                            render: (value) => {
                                return <span>${value}</span>;
                            },
                        },
                        {
                            title: 'Discounted Price',
                            dataIndex: 'discountedPrice',
                            render: (value) => {
                                return <span>${value}</span>;
                            },
                        },
                        {
                            title: 'Quantity',
                            dataIndex: 'quantity',
                        },
                        {
                            title: 'Total',
                            dataIndex: 'total',
                        },
                    ]}
                    dataSource={dataSource.products}
                    pagination={{ pageSize: 5 }}
                    loading={isLoading}
                ></Table>
            </Space>
        </div>
    );
};

export default Orders;
