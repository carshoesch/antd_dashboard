import React, { useEffect, useState } from 'react';
import styles from './Clock.module.scss';
import Divider from '../Divider/Divider';
import { EditOutlined } from '@ant-design/icons';
import { Input, Modal, Radio } from 'antd';

const Clock = ({ timezone }) => {
    const [time, setTime] = useState(new Date());
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState(timezone);
    const [color, setColor] = useState('#000000');

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleString('de-DE', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: timezone,
    });

    const showModal = () => {
        setModalVisible(true);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value ? e.target.value : timezone);
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleOk = () => {
        setModalVisible(false);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    return (
        <div className={styles.clockWrapper}>
            <div className={styles.clock__title}>{title}</div>
            <Divider />
            <div className={styles.clock__time}>{formattedTime}</div>
            <div className={styles.clock__edit}>
                <EditOutlined onClick={showModal} />
            </div>
            <Modal
                title='Edit Clock'
                visible={modalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Input
                    placeholder='Title'
                    value={title}
                    onChange={handleTitleChange}
                />
                <Radio.Group onChange={handleColorChange} value={color}>
                    <Radio.Button value='#000000'>Black</Radio.Button>
                    <Radio.Button value='#ff0000'>Red</Radio.Button>
                    <Radio.Button value='#00ff00'>Green</Radio.Button>
                    <Radio.Button value='#0000ff'>Blue</Radio.Button>
                </Radio.Group>
            </Modal>
        </div>
    );
};

export default Clock;
