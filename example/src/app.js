import "font-awesome/css/font-awesome.min.css";
import 'react-rayr-component/src/RayrComponent.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrModal, RayrComponent, RayrBtn} from 'react-rayr-component';

function App() {
    return (
        <div>
            <h1>组件初始化</h1>
            <RayrBtn onClick={() => {
                RayrModal.Confirm().then((res) => {
                    console.log(res);
                }, (res) => {
                    console.log(res);
                })
            }}>确认框
            </RayrBtn>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
