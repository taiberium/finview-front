import React from "react";
import {Table} from "antd";

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
        dataIndex: 'price',
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: 'Price To Book value',
        dataIndex: 'pb',
        sorter: (a, b) => a.pb - b.pb,
    },
    {
        title: 'DividendPercent',
        dataIndex: 'dividendPercent',
        sorter: (a, b) => a.dividendPercent - b.dividendPercent,
    },
];

const data = [
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
    {
        "pe": 5.667742,
        "peg": -0.35,
        "pb": 0.89624566,
        "bookValue": 19.604,
        "companyName": "Macy's, Inc.",
        "ticker": "M",
        "type": "EQUITY",
        "currency": "USD",
        "price": 17.57,
        "low52Week": 14.11,
        "high52Week": 26.48,
        "highDay": 17.68,
        "lowDay": 17.4445,
        "dividend": 1.51,
        "dividendPercent": 0.0859
    }
];

export default function DataTable(props) {
    //const { data } = props;
    return <Table columns={columns} dataSource={data} />;
}
