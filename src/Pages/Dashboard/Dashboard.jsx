import {
    DollarCircleOutlined,
    ShopOutlined,
    ShoppingOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import DashboardCard from './Card/DashboardCard';
import RecentOrders from './RecentOrders/RecentOrders';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import BarChart from './BarChart/BarChart';
import axios from 'axios';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const [orders, setOrders] = useState(0);
    const [inventory, setInventory] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [revenue, setRevenue] = useState(0);

    useEffect(() => {
        const fetchOrders = async () => {
            const result = await axios.get(process.env.REACT_APP_ORDERS_URL);
            setOrders(result.data.total);
            setRevenue(result.data.discountedTotal);
        };
        const fetchInventory = async () => {
            const result = await axios.get('https://dummyjson.com/products');
            setInventory(result.data.total);
        };
        const fetchCustomers = async () => {
            const result = await axios.get('https://dummyjson.com/users');
            setCustomers(result.data.total);
        };

        fetchOrders();
        fetchInventory();
        fetchCustomers();
    }, []);
    return (
        <div className='dashboard-card'>
            <Space size={20} direction='vertical'>
                <Typography.Title level={4} className='dashboard_header' >Dashboard</Typography.Title>
                <Space size={20} direction='horizontal'>
                    <DashboardCard
                        title={'Orders'}
                        value={orders}
                        direction={'horizontal'}
                        icon={
                            <ShoppingOutlined
                                style={{
                                    color: 'blue',
                                    backgroundColor: 'rgb(173, 216, 230)',
                                    borderRadius: 20,
                                    fontSize: 24,
                                    padding: 8,
                                }}
                            />
                        }
                        diff={-5}
                    />
                    <DashboardCard
                        title={'Inventory'}
                        value={inventory}
                        direction={'horizontal'}
                        icon={
                            <ShopOutlined
                                style={{
                                    color: 'black',
                                    backgroundColor: 'rgba(0,255,255,.25',
                                    borderRadius: 20,
                                    fontSize: 24,
                                    padding: 8,
                                }}
                            />
                        }
                        diff={12}
                    />
                    <DashboardCard
                        title={'Customers'}
                        value={customers}
                        direction={'horizontal'}
                        icon={
                            <UserOutlined
                                style={{
                                    color: 'rgb(204,204,0)',
                                    backgroundColor: 'rgb(255, 255, 224)',
                                    borderRadius: 20,
                                    fontSize: 24,
                                    padding: 8,
                                }}
                            />
                        }
                        diff={5}
                    />
                    <DashboardCard
                        title={'Revenue'}
                        value={revenue}
                        direction={'horizontal'}
                        icon={
                            <DollarCircleOutlined
                                style={{
                                    color: 'green',
                                    backgroundColor: 'rgba(0,255,0,.25',
                                    borderRadius: 20,
                                    fontSize: 24,
                                    padding: 8,
                                }}
                            />
                        }
                        diff={123}
                    />
                </Space>
                <Space>
                    <RecentOrders />
                    <BarChart />
                </Space>
            </Space>
        </div>
    );
};

export default Dashboard;
