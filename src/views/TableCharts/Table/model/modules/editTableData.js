import React, { useState } from 'react';
import { Table, Input, InputNumber,Divider, Popconfirm, Form, Typography } from 'antd';
import {PlusSquareOutlined} from '@ant-design/icons';
const { Provider, Consumer } = React.createContext()//组件之间传值
const originData = [];

for (let i = 0; i < 5; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
class EditableCell extends React.Component{
  renderCell = ({getFieldDecorator}) => {
    const {
      editing, dataIndex, title, Inputs, record, index, children, ...restProps
    } = this.props
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{  margin: 0, }} >
           {getFieldDecorator(dataIndex,{
             rules: [{
              required: true,
              message: '请输入'
            }],
            initialValue: record[dataIndex] 
           })(
            <Inputs />
           )}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  }
  render(){
    return <Consumer>{this.renderCell}</Consumer>
  }
}
// const EditableCell = ({
//   editing,
//   dataIndex,
//   title,
//   inputType,
//   record,
//   index,
//   children,
//   ...restProps
// }) => {
//   const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
//   // const { getFieldDecorator, getFieldValue} = form; 
//   console.log( props,'ppp0000---')
//     // debugger

//   return (
//     <td {...restProps}>
//       {editing ? (
//         <Form.Item
//           name={dataIndex}
//           style={{
//             margin: 0,
//           }}
//           rules={[
//             {
//               required: true,
//               message: `Please Input ${title}!`,
//             },
//           ]}
//         >
//           {inputNode}
//         </Form.Item>
//       ) : (
//         record[title]
//       )}
//     </td>
//   );
// };

class EditTableData extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data:originData,
      editingKey:''
    }
  }
  // 判断是否可编辑
  isEditing = record => record.key == this.state.editingKey

  // 初始化
  init(){
    console.log(this.props,'pp--')
    const data = this.props.basicColumns || this.props.dataViewColumns || this.props.associationColumns || []
    this.columns = [
      ...data,
      {
        title: ()=>{
          return <span>操作<Divider type="vertical" /><PlusSquareOutlined style={{color:"#333"}} onClick={()=>this.addColumns()}/></span>
        },
        width:'20%',
        dataIndex: 'operation',
        render: (_, record) => {
          const { editingKey } = this.state
          const editable = this.isEditing(record);
          return editable ? (
            <span>
              <Consumer>
                {
                  form => (
                  <a onClick={() => this.save(form,record.key)} >
                    保存
                  </a>)
                }
              </Consumer>
              <Divider type="vertical"  />
              <Popconfirm okText="确认" cancelText="取消" title="是否确定取消?" onConfirm={this.cancel}>
                <a>取消</a>
              </Popconfirm>
            </span>
          ) : (
              <span>
                <a disabled={editingKey != ''} onClick={()=>this.edit(record.key)}>编辑</a>
                <Divider type="vertical"  />
                <Popconfirm okText="确认" cancelText="取消" title="是否确定取消?" onConfirm={()=>this.delete(record.key)}>
                  <a>删除</a>
                </Popconfirm>
              </span>
          );
        },
      },
    ]; 
  }
  // 添加
  addColumns = () => {
    const newData = [...this.state.data]
    newData.push({
      key: newData.length,
      name: ``,
      age: '',
      address: ``
    })
    this.setState({
      data:newData
    })
  }
  // 编辑
  edit = (key) => {
    this.setState({
      editingKey:key
    })
  }
  // 删除
  delete = (key) => {
    const newData = [...this.state.data]
    const index = newData.findIndex(item=>item.key == key)
    newData.splice(index,1)
    this.setState({
      data:newData
    })
  }
  // 保存
  save = (form,key) => {
    form.validateFields((error,row)=>{
      if(error){
        return
      }
      const newData = [...this.state.data]
      const index = newData.findIndex(item=>item.key == key)
      if(index > -1){
        const item = newData[index]
        newData.splice(index,1,{
          ...item,...row
        })
      }
      this.setState({
        editingKey:'',
        data:newData
      })
      this.props.saveTable(newData)
    })

  }

  // 取消
  cancel = () => {
    this.setState({
      editingKey: ''
    })
  }

  render(){
    this.init()
    console.log(this.columns,'columns')
    const columns = this.columns.map(col => {
      if(!col.editable){
        return col
      }
      return {
        ...col,
        onCell:record => ({
          record,
          Inputs:Input,
          dataIndex:col.dataIndex,
          title:col.title,
          editing:this.isEditing(record)
        })
      }
    })
    return (
      <Provider value={this.props.form}>
        <Table bordered style={{marginTop:'30px'}} components={{
          body:{
            cell:EditableCell
          }
        }} columns={columns} dataSource={this.state.data} pagination={false}/>
      </Provider>
    )
  }
}


export default Form.create()(EditTableData)