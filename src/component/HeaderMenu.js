import {Icon, Menu} from 'antd';
import React from "react";
import {withRouter} from "react-router-dom";

const {SubMenu} = Menu;

class HeaderMenu extends React.Component {
    state = {
        current: 'view',
    };

    handleClick = e => {

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
                    <Icon type="dollar"/>
                    FinView
                </Menu.Item>
                <Menu.Item key="portfolio">
                    <Icon type="container"/>
                    PortfolioView
                </Menu.Item>
                <Menu.Item key="info">
                    <Icon type="info-circle"/>
                    About Us
                </Menu.Item>
            </Menu>
        );
    }
}

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
                <Icon type="dollar"/>
                FinView
            </Menu.Item>
            <Menu.Item key="/portfolio">
                <Icon type="container"/>
                PortfolioView
            </Menu.Item>
            <Menu.Item key="/about">
                <Icon type="info-circle"/>
                About Us
            </Menu.Item>
        </Menu>
    );
};

export default withRouter(HeaderMenu2);