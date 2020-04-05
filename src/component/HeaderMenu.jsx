import {Menu} from 'antd';
import React from "react";
import {withRouter} from "react-router-dom";

import {
    DollarOutlined,
    ContainerOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';

const HeaderMenu2 = (props) => {
    const history = props.history;
    const handleClick = e => history.push(e.key);
    const location = history.location.pathname;
    return (
        <Menu
            onClick={handleClick}
            selectedKeys={[location]}
            mode="horizontal">
            <Menu.Item key="/">
                <DollarOutlined/>
                FinView
            </Menu.Item>
            <Menu.Item key="/portfolio">
                <ContainerOutlined />
                PortfolioView
            </Menu.Item>
            <Menu.Item key="/about">
                <InfoCircleOutlined />
                Info
            </Menu.Item>
        </Menu>
    );
};

export default withRouter(HeaderMenu2);