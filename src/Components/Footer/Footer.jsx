import { Typography } from 'antd';
import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            {/* typography.link is a anchor/navlink */}
            <Typography.Link href='tel:+123456789'>+123456789</Typography.Link>
            <Typography.Link href='https://www.google.de' target={'_blank'}>
                Privacy Policy
            </Typography.Link>
            <Typography.Link href='https://www.google.de' target={'_blank'}>
                Terms of Use
            </Typography.Link>
        </div>
    );
};

export default Footer;
