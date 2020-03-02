import React from 'react';
import {Layout} from 'antd';
import './MainPage.css';
import HeaderMenu from "./HeaderMenu";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SecuritiesPage from "./SecuritiesPage";
import BlankPage from "./BlankPage";

const {Header, Footer, Content} = Layout;

export default function LayoutPage(props) {
    return (
        <Router>
            <Switch>
                <Layout>

                    <HeaderMenu style={{backgroundColor: "#FAFAFA", marginLeft: "50px"}}/>
                    <Content style={{padding: "10vw", height: "calc(100vh - 110px)"}}>


                        <Route exact path="/" component={SecuritiesPage}/>
                        <Route path="/portfolio" component={BlankPage}/>
                        <Route path="/about" component={BlankPage}/>


                    </Content>

                    <Footer style={{textAlign: 'center'}}>Made by Taiberium</Footer>
                </Layout>
            </Switch>
        </Router>

    );
}


