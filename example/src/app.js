import "font-awesome/css/font-awesome.min.css";
import 'react-rayr-component/src/RayrComponent.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrModal, RayrComponent, RayrBtn, RayrSelector, RayrMulSelector} from 'react-rayr-component';

function App() {
    selectOpts: [
        {
            value: null,
            label: '拼车'
        },{
            value: 1,
            label: '快车'
        },{
            value: 2,
            label: '优享'
        }
    ];

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

            <RayrSelector
                options={[{
                    value: null,
                    label: '拼车'
                },{
                    value: 1,
                    label: '快车'
                },{
                    value: 2,
                    label: '优享'
                }]}
                placeholder=""
                onChange={(res)=>{console.log(res)}}
            />

            <RayrMulSelector
                options={[{
                    value: null,
                    label: '拼车'
                },{
                    value: 1,
                    label: '快车'
                },{
                    value: 2,
                    label: '优享'
                }]}
                placeholder="请选择(多选)"
                onChange={(res)=>{console.log(res)}}
            />
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
