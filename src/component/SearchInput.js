import React from "react";
import {Select, Spin} from 'antd';
import debounce from 'lodash/debounce';
import {searchAction} from "../store/action/search";
import {connect} from "react-redux";

const {Option} = Select;


let state = {data: [], value: [], fetching: false};


let lastFetchId = 0;

const searchData = value => {
    console.log(value);
    lastFetchId += 1;
    const fetchId = lastFetchId;
    state = {data: [], fetching: true};
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(body => {
            if (fetchId !== this.lastFetchId) {
                // for fetch callback order
                return;
            }
            const data = body.results.map(user => ({
                text: `${user.name.first} ${user.name.last}`,
                value: user.login.username,
            }));
            this.setState({data, fetching: false});
        });
};

const debouncedSearchData = debounce(searchData, 800);


function SearchInput(props) {
    const {search, searchData, searchAction} = props;
    const {pending, data, error} = search;
    let value = [];
    const debouncedSearchAction = debounce(searchAction, 1000);

    return <Select
        mode="multiple"
        labelInValue
        value={value}
        placeholder="Select ticker"
        notFoundContent={pending ? <Spin size="small"/> : null}
        filterOption={false}
        onSearch={searchData}
        onChange={debouncedSearchAction}
        style={{width: '100%'}}
    >
        {data.map(d => (
            <Option key={d.value}>{d.text}</Option>
        ))}
    </Select>;
}

const mapDispatchToProps = (dispatch) => ({
    searchAction: (ticker) => dispatch(searchAction(ticker)),
});

const mapStateToProps = (state) => ({
    search: state.search
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);