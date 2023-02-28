import { Card } from 'antd';
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { getRevenue } from '../../../API/API';

const BarChart = () => {
    const [reveneuData, setReveneuData] = useState({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        /* used the fetch function because it was to much rewriting with axios */
        getRevenue().then((res) => {
            const labels = res.carts.map((cart) => {
                return `User-${cart.userId}`;
            });
            const data = res.carts.map((cart) => {
                return cart.discountedTotal;
            });

            const dataSource = {
                labels,
                datasets: [
                    /* add a second object for multiple bars in comparison */
                    {
                        label: 'Revenue',
                        data: data,
                        backgroundColor: 'rgba(255, 0, 0, 1)',
                        borderRadius: 5,
                    },
                    {
                        label: 'Revenue 2',
                        data: data,
                        backgroundColor: 'green',
                        borderRadius: 5,
                    },
                ],
            };

            /* needs the legend label, data and color of blocks */
            setReveneuData(dataSource);
        });
    }, []);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Order Revenue',
            },
        },
    };
    return (
        <Card style={{ width: 900, height: 450 }}>
            <Bar options={options} data={reveneuData} />
        </Card>
    );
};

export default BarChart;
