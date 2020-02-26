import { Menu, Icon } from 'antd';
import React from "react";

const { SubMenu } = Menu;

class MenuComponent extends React.Component {
    state = {
        current: 'view',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal">
                <Menu.Item key="view">
                    <Icon type="dollar" />
                    FinView
                </Menu.Item>
                <Menu.Item key="portfolio">
                    <Icon type="container" />
                    PortfolioView
                </Menu.Item>
                <Menu.Item key="info">
                    <Icon type="info-circle" />
                    About Us
                </Menu.Item>
            </Menu>
        );
    }
}

export default MenuComponent;