import { Avatar, Rate, Space, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Inventory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    const fetchInventory = async () => {
        setIsLoading(true);
        const result = await axios.get(process.env.REACT_APP_INVENTORY_URL);
        setIsLoading(false);
        setDataSource(result.data);
    };
    useEffect(() => {
        fetchInventory();
    }, []);
    return (
        <div>
            <Space size={20} direction={'vertical'}>
                <Typography.Title level={4}>Inventory</Typography.Title>
                <Table
                    columns={[
                        {
                            title: 'Thumbnail',
                            dataIndex: 'thumbnail',
                            render: (link) => {
                                return <Avatar src={link}></Avatar>;
                            },
                        },
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
                            title: 'Rating',
                            dataIndex: 'rating',
                            render: (rating) => {
                                return (
                                    <Rate
                                        value={rating}
                                        allowHalf={true}
                                        disabled
                                    ></Rate>
                                );
                            },
                        },
                        {
                            title: 'Stock',
                            dataIndex: 'stock',
                        },
                        {
                            title: 'Brand',
                            dataIndex: 'brand',
                        },
                        {
                            title: 'Category',
                            dataIndex: 'category',
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

export default Inventory;
