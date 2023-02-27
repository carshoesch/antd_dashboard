import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Customers from '../../Pages/Customers/Customers';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Inventory from '../../Pages/Inventory/Inventory';
import Orders from '../../Pages/Orders/Orders';

const AppRoutes = () => {
    return (
        /* rendering each route with corresponding component */
        <div className='routes'>
            <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='/inventory' element={<Inventory />}></Route>
                <Route path='/orders' element={<Orders />}></Route>
                <Route path='/customers' element={<Customers />}></Route>
            </Routes>
        </div>
    );
};

export default AppRoutes;
