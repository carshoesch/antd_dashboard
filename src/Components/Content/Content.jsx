import React from 'react';
import AppRoutes from '../AppRoutes/AppRoutes';

const Content = () => {
    return (
        <div className='content'>
            {/* render the route wrapper component within the component so that only the midpart changes */}
            <AppRoutes />
        </div>
    );
};

export default Content;
