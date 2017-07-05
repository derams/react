import React from 'react'
import ReactDOM from 'react-dom'
import { DatePicker } from 'antd'
import "antd/dist/antd.css"
import { Rate } from 'antd'
import { Row, Col } from 'antd'
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane
function callback(key) {
  console.log(key);
}


ReactDOM.render(
            <div>

            <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
    <TabPane tab="Tab 4" key="4">Content of Tab Pane 3</TabPane>
    <TabPane tab="Tab 5" key="5">Content of Tab Pane 3</TabPane>
    <TabPane tab="Tab 6" key="6">Content of Tab Pane 3</TabPane>
    <TabPane tab="Tab 7" key="7">Content of Tab Pane 3</TabPane>
    <TabPane tab="Tab 8" key="8">Content of Tab Pane 3</TabPane>
    <TabPane tab="Tab 9" key="9">Content of Tab Pane 3</TabPane>
    <TabPane tab="Tab 10" key="10">Content of Tab Pane 3</TabPane>
    <TabPane tab="Tab 11" key="11">Content of Tab Pane 3</TabPane>
    <TabPane tab="Tab 12" key="12">Content of Tab Pane 3</TabPane>
  </Tabs>
                 <div>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </div>
                <DatePicker />
                <Rate allowHalf defaultValue={2.5} character='嘿嘿'/>
                <Rate allowHalf defaultValue={2.5} character='哈哈'/>
            </div>



    ,document.getElementById('root'))