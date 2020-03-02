import React from 'react';
//import './App.css';
import 'antd/dist/antd.css';
import LayoutPage from "./component/LayoutPage";
import {Provider} from 'react-redux';
import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <LayoutPage/>
        </Provider>
    );
}

export default App;
