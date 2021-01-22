import React, { useState }from 'react'
import { Row,Col,Card, Table, Tag, Divider, Modal, Button } from 'antd';
import ModalData from './model'


const App = (props) => {
  console.log(props,'----')
  const [isModalVisible, setIsModalVisible] = useState(false);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <label>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </label>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      align:'center',
      render: (record) => (
        <label>
          <a onClick={() => showModal(record)}>编辑</a>
          <Divider type="vertical" />
          {/* <Button onClick={()=>showModal(record)} > 删除</Button> */}
          <a onClick={()=>showModal(record)} > 删除</a>
        </label>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    }
  ];
  
  const showModal = (row) => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  }
  const handleOk = (form={},data) => {
    setIsModalVisible(false);
    console.log(form,data,'pp---')
  }

  

  return (
    <label>
      <Row gutter={16} className="gutter-row">
        <Col md={24}>
          <Card title="基本表格+简单弹框" bordered={false}>
            <Table columns={columns} dataSource={data} />
          </Card>
        </Col>
      </Row>
      {isModalVisible && <ModalData close={()=>{
        handleCancel()
      }} saveOk={(form,data)=>{ handleOk(form,data) }}/>}
      {/* {isModalVisible && <ModalData  />} */}
    </label>
  );
};
const la = '111'
export default () => (
  <App/>
)