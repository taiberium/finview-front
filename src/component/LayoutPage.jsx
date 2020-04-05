import React from 'react';
import {Layout} from 'antd';
import HeaderMenu from "./HeaderMenu";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SecuritiesPage from "./securities/SecuritiesPage";
import BlankPage from "./BlankPage";
import "./Layout.scss";
import Info from "./info/Info";

const {Header, Footer, Content} = Layout;


const MyRoutes = () => (
    <div>
        <Route exact path="/" component={SecuritiesPage}/>
        <Route path="/portfolio" component={BlankPage}/>
        <Route path="/about" component={Info}/>
    </div>
);

const MyLayout = (props) =>
    (
        <Layout className="site">
            <HeaderMenu/>
            <Content className="site-content">
                {props.children}
            </Content>
            <Footer className="footer">Made by Taiberium</Footer>
        </Layout>
    );

export default function LayoutPage(props) {
    return (
        <Router>
            <Switch>
                <MyLayout>
                    <MyRoutes/>
                </MyLayout>
            </Switch>
        </Router>
    );
}


