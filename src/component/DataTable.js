import React from "react";
import {Table} from "antd";
import {connect} from "react-redux";
import {precisionPercentRenderer, ratioFormatter} from "../util/formatter";
import './DataTable.css';


const columns = [
    {
        title: 'Ticker',
        dataIndex: 'ticker',
        sorter: (a, b) => a.ticker.length - b.ticker.length,
    },
    {
        title: 'Company Name',
        dataIndex: 'companyName',
        sorter: (a, b) => a.companyName.length - b.companyName.length,
    },
    {
        title: 'Price',
        className: 'price',
        dataIndex: 'price',
        sorter: (a, b) => a.price - b.price,
        render: (price, record) => record.currencySymbol + price
    },
    {
        title: 'Price To Book value',
        className: 'price',
        dataIndex: 'pb',
        sorter: (a, b) => a.pb - b.pb,
        render: pbRatio => ratioFormatter(pbRatio)
    },
    {
        title: 'DividendPercent',
        className: 'price',
        dataIndex: 'dividendPercent',
        sorter: (a, b) => a.dividendPercent - b.dividendPercent,
        render: percent => precisionPercentRenderer(percent)
    },
];

/*const data = [
    {
        "pe": 17.203049,
        "peg": 2.64,
        "pb": 1.53128,
        "bookValue": 25.064,
        "companyName": "AT&T Inc.",
        "ticker": "T",
        "type": "EQUITY",
        "currency": "USD",
        "price": 38.38,
        "low52Week": 28.92,
        "high52Week": 39.7,
        "highDay": 38.44,
        "lowDay": 37.98,
        "dividend": 2.08,
        "dividendPercent": 0.0542
    },
];*/

function DataTable(props) {
    const {quotesData} = props;
    const {data} = quotesData;
    const dataArray = data ? data : [];
    return <Table rowKey={record => record.ticker} columns={columns} dataSource={dataArray}/>;
}

const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = (state) => ({
    quotesData: state.quotes
});

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);