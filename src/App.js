import React from 'react';
//import './App.css';
import 'antd/dist/antd.css';
import MainPage from "./component/MainPage";
import {Provider} from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <MainPage/>
            </div>
        </Provider>
    );
}

export default App;
