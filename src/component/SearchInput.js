import React from "react";
import {Button, Col, Row, Select, Spin} from 'antd';
import debounce from 'lodash/debounce';
import {connect} from "react-redux";
import {searchAction} from "../store/action/search";
import {getQuoteAction} from "../store/action/quote";

const {Option} = Select;

class SearchInput extends React.Component {

    state = {
        value: [],
    };

    handleChange = value => {
        this.setState({value});
    };

    render() {
        const {value} = this.state;
        const {searchData, searchAction, getQuoteAction, quotesData} = this.props;
        const {pending, data, error} = searchData;
        const {pending: quotesPending} = quotesData;
        const searchActionDebounced = debounce(searchAction, 400);
        console.log("VALUE: " + JSON.stringify(value));
        const getQuotes = () => getQuoteAction(value.map(val => val.key));
        if (error) return error;
        return (
            <div>
                <Select
                    size="large"
                    mode="multiple"
                    labelInValue
                    value={value}
                    placeholder="Select users"
                    notFoundContent={pending ? <Spin size="small"/> : null}
                    filterOption={false}
                    onSearch={searchActionDebounced}
                    onChange={this.handleChange}
                    optionLabelProp="label"
                    style={{
                        width: "600px",
                        margin: "0 8px 8px 0"
                    }}
                >
                    {data ? data.map(d => (
                        <Option key={d.ticker} label={d.ticker}>
                            <Row>
                                <Col span={4}>{d.ticker}</Col>
                                <Col span={16}>{d.companyName}</Col>
                                <Col style={{textAlign: "right"}} span={4}>{d.quoteType} - {d.exchange}</Col>
                            </Row>
                        </Option>
                    )) : []}
                </Select>
                <Button type="primary" shape="circle" icon="plus"
                        loading={quotesPending}
                        onClick={getQuotes}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchAction: (ticker) => dispatch(searchAction(ticker)),
    getQuoteAction: (tickerArray) => dispatch(getQuoteAction(tickerArray)),
});

const mapStateToProps = (state) => ({
    searchData: state.search,
    quotesData: state.quotes
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);