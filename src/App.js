import React from 'react';
//import './App.css';
import 'antd/dist/antd.css';
import MainPage from "./component/MainPage";
import {Provider} from 'react-redux';
import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <MainPage/>
        </Provider>
    );
}

export default App;
