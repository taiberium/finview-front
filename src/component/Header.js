import { Menu, Icon } from 'antd';
import React from "react";

const { SubMenu } = Menu;

class App extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="mail">
                    <Icon type="mail" />
                    Navigation One
                </Menu.Item>
                <Menu.Item key="mail">
                    <Icon type="mail" />
                    Info
                </Menu.Item>
            </Menu>
        );
    }
}