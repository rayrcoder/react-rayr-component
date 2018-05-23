import "font-awesome/css/font-awesome.min.css";
import 'react-rayr-component/src/RayrComponent.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrModal, RayrComponent, RayrBtn, RayrSelector, RayrMulSelector, RayrTab, RayrTabPane} from 'react-rayr-component';

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
            <RayrTab classPrefix={"tabs"} defaultActiveIndex={0}>
                <RayrTabPane order={"0"} tab={"选项1"}>
                    <RayrBtn onClick={() => {
                        RayrModal.Confirm().then((res) => {
                            console.log(res);
                        }, (res) => {
                            console.log(res);
                        })
                    }}>确认框
                    </RayrBtn>
                </RayrTabPane>
                <RayrTabPane order={"1"} tab={"选项2"}>
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
                </RayrTabPane>
                <RayrTabPane order={"2"} tab={"选项3"}>
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
                </RayrTabPane>
            </RayrTab>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
