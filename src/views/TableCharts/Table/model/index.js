import React from 'react'
import Basic from './modules/base'
import EditTableData from './modules/editTableData'
import { Modal, Tabs, Spin } from "antd";

export default class ModalData extends React.Component{
  constructor(){
    super()
    this.state = {
      isModalVisible:true,
      currentTab:'basicColumns',
      tableData:[]
    }
  }
  componentWillMount(){
    this.setState({
      isModalVisible:this.props.isModalVisible
    })
    this.basicColumns = [
      {title:'操作类型',editable:true,dataIndex:'name'},
      {title:'名称',editable:true,dataIndex:'age'},
      {title:'描述',editable:true,dataIndex:'address'}
    ]
    this.associationColumns = [
      {title:'前置操作',editable:true,dataIndex:'name'},
      {title:'关联权限',editable:true,dataIndex:'age'},
      {title:'关联操作',editable:true,dataIndex:'address'}
    ]
    this.dataViewColumns = [
      {title:'字段',editable:true,dataIndex:'name'},
      {title:'描述',editable:true,dataIndex:'address'}
    ]
  }
  componentWillUpdate(){
    console.log(22)
  }
  componentDidMount(){
    console.log(11)
  }
  handleOk = () => {
    // console.log(this.tabData,'this.formRefThree.props')
    const form = this.formRef.props.form;
    form.validateFields((err, fieldsValue) => {
      if (!err) {
        console.log(this.tabData,'pp---00---');
        this.props.saveOk(fieldsValue,this.tabData)
      }
    });
  }
  saveTable(data){
    console.log(data,this.state.currentTab,'data---')
    this.tabData = {
      [this.state.currentTab]:data
    }

  }
  changeTab(key){
    console.log(key,'key---')
    this.setState({
      currentTab:key
    })
  }
  render(){
    
    return (
      <Modal
        title="编辑" 
        width={650}
        destroyOnClose
        visible
        onOk={ () => this.handleOk() } 
        onCancel={ () => this.props.close()}
      >
        <Tabs onChange={(key)=>this.changeTab(key)} >
          <Tabs.TabPane tab="基本信息" key="basicColumns">
            <span>
              <Basic wrappedComponentRef={(form) => this.formRef = form}/>
              <EditTableData basicColumns={this.basicColumns} saveTable={(data)=>this.saveTable(data)}/>
            </span>
          </Tabs.TabPane>
  
          <Tabs.TabPane tab="关联权限" key="associationColumns">
            <EditTableData associationColumns={this.associationColumns} saveTable={(data)=>this.saveTable(data)}/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="数据视图" key="dataViewColumns">
            <EditTableData dataViewColumns={this.dataViewColumns} saveTable={(data)=>this.saveTable(data)}/>
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    )
  }
}