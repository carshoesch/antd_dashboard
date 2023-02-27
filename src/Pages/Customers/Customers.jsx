import { Avatar, Space, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Customers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    const fetchCustomers = async () => {
        const result = await axios.get('https://dummyjson.com/users');
        setDataSource(result.data);
    };
    useEffect(() => {
        setIsLoading(true);
        fetchCustomers();
        setIsLoading(false);
    }, []);
    return (
        <div>
            <Space size={20} direction={'vertical'}>
                <Typography.Title level={4}>Customers</Typography.Title>
                <Table
                    columns={[
                        {
                            /* name of the title i want to render */
                            title: 'Photo',
                            /* dataIndex is the name of the key within the object */
                            dataIndex: 'image',
                            /* render specific html for this column */
                            render: (link) => {
                                return <Avatar src={link}></Avatar>;
                            },
                        },
                        {
                            title: 'First name',
                            dataIndex: 'firstName',
                        },
                        {
                            title: 'Last name',
                            dataIndex: 'lastName',
                        },
                        {
                            title: 'Email',
                            dataIndex: 'email',
                        },
                        {
                            title: 'Phone',
                            dataIndex: 'phone',
                        },
                        {
                            title: 'Address',
                            dataIndex: 'address',
                            render: (address) => {
                                return (
                                    <span>
                                        {address.address}, {address.city}
                                    </span>
                                );
                            },
                        },
                    ]}
                    dataSource={dataSource.users}
                    pagination={{ pageSize: 5 }}
                    loading={isLoading}
                ></Table>
            </Space>
        </div>
    );
};

export default Customers;
