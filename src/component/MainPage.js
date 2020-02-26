import React from 'react';
import DataTable from "./DataTable";
import SearchInput from "./SearchInput";
import {Layout} from 'antd';
import './MainPage.css';
import MenuComponent from "./MenuComponent";

const {Header, Footer, Content} = Layout;

export default function MainPage(props) {
    return <Layout>
        {/*
        <Header style={{backgroundColor: "#FAFAFA", border: "1px solid #D9D9D9"}}>


        </Header>*/}

        <MenuComponent style={{backgroundColor: "#FAFAFA", marginLeft: "50px"}}/>
        <Content style={{padding: "10vw", height: "calc(100vh - 110px)"}}>
            <SearchInput/>
            <DataTable/>
        </Content>


        <Footer style={{textAlign: 'center'}}>Made by Taiberium</Footer>
    </Layout>;
}


