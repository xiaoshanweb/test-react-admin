import React from 'react'
import { Table, Divider, Input } from 'antd';
import {PlusSquareOutlined} from '@ant-design/icons';


export default class EditTable extends React.Component{
  constructor(){
    super()
    this.state = {
      tableColumns:[],
      tableData:[]
    }
  }
  componentWillMount(){
    let data = [
      {
        canEdit:false,
        key: '1',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
      },
      {
        canEdit:false,
        key: '1',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
      }
    ]
    const columns = [
      {
        title: '操作类型',
        aligin:'center',
        dataIndex: 'address',
        render:(text,record)=>{
          return (<label>
            {console.log(text,record,'o0---')}
            {record.canEdit ? <Input blur={(e)=> {console.log(e,'999--')}} ref='input' size="small" defaultValue={record.address} /> : record.address}
          </label>)
        }
      },
      {
        title: '名称',
        aligin:'center',
        dataIndex: 'name',
        render:(text,record)=>{
          return (<label>
            {/* {console.log(address,'o0---')} */}
            {record.canEdit ? <Input size="small"  defaultValue={record.name}/> : record.name}
          </label>)
        }
      },
      {
        title: '描述',
        aligin:'center',
        dataIndex: 'money',
        render:(money,record)=>{
          return (<label>
            {/* {console.log(address,'o0---')} */}
            {record.canEdit ? <Input size="small" defaultValue={record.money}/> : money}
          </label>)
        }
      },
      {
        title: ()=>{
          return <span>操作<Divider type="vertical" /><PlusSquareOutlined style={{color:"#333"}} onClick={()=>this.addColums()}/></span>
        },
        key: 'action',
        aligin:'center',
        render:(text,record)=>{
          return (<label>
            {!record.canEdit && <a onClick={()=>this.editData(record)}>编辑</a>}
            {record.canEdit && <a onClick={()=>this.saveData(record)}>保存</a>}
            <Divider type="vertical" />
            <a onClick={()=>this.deleteData(record)}> 删除</a>
          </label>)
        }
      },
    ]
    this.setState({
      tableColumns:columns,
      tableData:data
    })
  }
  saveData(e){
    console.log(this.state.tableData,e,'00--')
  }
  editData = (row) => {
    let tem = [...this.state.tableData]
    const len = tem.filter((t,i)=> {return t.canEdit})
    if(len.length){
      return false
    }
    tem.map(t=>{
      if(t.key == row.key) return t.canEdit = true
      else return t
    })
    this.setState({tableData:tem})
  }
  deleteData = (row) => {
    let tem = [...this.state.tableData]
    let index = -1
    tem.forEach((t,i)=>{
      if(t.key == row.key) index = i
    })
    index != -1 ? tem.splice(index,1) : ''
    this.setState({tableData:tem})
  }
  addColums = ()=>{
    let tem = [...this.state.tableData]
    tem.push(
      {
        canEdit:true,
        key: '',
        name: '',
        money: '',
        address: '',
      }
    )
    this.setState({tableData:tem})
  }
  
  render(){
    return(
      <div style={{marginTop:'30px'}}>
        <Table bordered columns={this.state.tableColumns} dataSource={this.state.tableData}  title={() => '操作配置'} />
      </div>
    )
  }
}