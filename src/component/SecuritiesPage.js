import React from 'react';
import DataTable from "./DataTable";
import SearchInput from "./SearchInput";
import './MainPage.css';


const SecuritiesPage = (props) =>
    <div style={{padding: "10vw", height: "calc(100vh - 110px)"}}>
        <SearchInput/>
        <DataTable/>
    </div>;

export default SecuritiesPage;


