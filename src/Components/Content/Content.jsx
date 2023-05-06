import React from 'react';
import AppRoutes from '../AppRoutes/AppRoutes';
import Clock from '../Clock/Clock';

const Content = () => {
    return (
        <div className='content'>
            {/* render the route wrapper component within the component so that only the midpart changes */}
            <AppRoutes />
            <div className='widgetWrapper'>
                <Clock timezone='America/New_York' />
                <Clock timezone='Europe/London' />
                <Clock timezone='Europe/Berlin' />
            </div>
        </div>
    );
};

export default Content;
