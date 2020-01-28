import React from "react";
import {Select, Spin} from 'antd';
import debounce from 'lodash/debounce';
import {connect} from "react-redux";
import searchAction from "../store/action/search";
const { Option } = Select;

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.fetchUser = debounce(this.fetchUser, 800);
    }

    state = {
        data: [],
    };

    handleChange = value => {
        this.setState({value});
    };

    render() {
        const { value } = this.state;
        const { searchData, searchAction } = this.props;
        const {pending, data, error} = searchData;
        return (
            <Select
                mode="multiple"
                labelInValue
                value={value}
                placeholder="Select users"
                notFoundContent={pending ? <Spin size="small" /> : null}
                filterOption={false}
                onSearch={searchAction}
                onChange={this.handleChange}
                style={{ width: '100%' }}
            >
                {data.map(d => (
                    <Option key={d.ticker}>{d.ticker}</Option>
                ))}
            </Select>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchAction: (ticker) => dispatch(searchAction(ticker)),
});

const mapStateToProps = (state) => ({
    searchData: state.search
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);