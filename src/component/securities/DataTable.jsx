import React from "react";
import {Table, Tooltip} from "antd";
import {connect} from "react-redux";
import {precisionPercentRenderer, ratioFormatter} from "../../util/formatter";
import './DataTable.scss';


const columns = [
    {
        title: <Tooltip title="Short code of the security">Ticker</Tooltip>,
        dataIndex: 'ticker'
    },
    {
        title: 'Type',
        dataIndex: 'type'
    },
    {
        title: 'Name',
        dataIndex: 'companyName',
    },
    {
        title: 'Price',
        className: 'price',
        dataIndex: 'price',
        sorter: (a, b) => a.price - b.price,
        showSorterTooltip: false,
        render: (price, record) => record.currencySymbol + price,
    },
    {
        title: <Tooltip title={<div><div>Price to Book value</div><div>The ratio of the security price to its real value</div></div>}>P/B</Tooltip>,
        dataIndex: 'pb',
        sorter: (a, b) => a.pb - b.pb,
        showSorterTooltip: false,
        render: pbRatio => ratioFormatter(pbRatio),
    },
    {
        title: <Tooltip title={<div><div>The book value of a company security</div><div>It's the total value of the company's assets, minus the company's outstanding liabilities</div></div>}>Book price</Tooltip>,
        className: 'price',
        dataIndex: 'bookValue',
        sorter: (a, b) => a.bookValue - b.bookValue,
        showSorterTooltip: false,
        render: (bookValue, record) => record.currencySymbol + bookValue,
    },
    {
        title: 'P/E',
        dataIndex: 'pe',
        sorter: (a, b) => a.pe - b.pe,
        showSorterTooltip: false,
        render: peRatio => ratioFormatter(peRatio),
    },
    {
        title: 'PEG',
        dataIndex: 'peg',
        sorter: (a, b) => a.peg - b.peg,
        showSorterTooltip: false,
        render: pegRatio => ratioFormatter(pegRatio),
    },
    {
        title: 'Dividend',
        dataIndex: 'dividendPercent',
        sorter: (a, b) => a.dividendPercent - b.dividendPercent,
        showSorterTooltip: false,
        render: (divPercent, record) => {
            console.log("Percent: ", record.dividendPercent);
            console.log("Percent: ", precisionPercentRenderer(record.dividendPercent));

            return precisionPercentRenderer(record.dividendPercent) + "-" + record.currencySymbol + record.dividend
        }
    },
    {
        title: '52WeekPrice',
        dataIndex: 'high52Week',
        render: (row, record) => record.currencySymbol + record.low52Week + "-" + record.high52Week
    },
    {
        title: 'DayPrice',
        dataIndex: 'highDay',
        render: (row, record) => record.currencySymbol + record.lowDay + "-" + record.highDay
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