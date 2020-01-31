import React from 'react';
//import './App.css';
import 'antd/dist/antd.css';
import MainPage from "./component/MainPage";
import {Provider} from 'react-redux';
import store from './store/store';
import {Col, Row} from "antd";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Row>
                    <Col offset={4} span={16}>
                        <MainPage/>
                    </Col>
                </Row>
            </div>
        </Provider>
    );
}

export default App;
