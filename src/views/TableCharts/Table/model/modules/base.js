import React from 'react'
import { Form, Input, Select, Radio } from 'antd';
const { Option } = Select;

// const Basic = (props) => {
class Basic extends React.Component{
  formRef = React.createRef();
  // const [form] = Form.useForm();
  onGenderChange(value){
    switch (value) {
      case 'male':
        this.props.form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        this.props.form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      case 'other':
        this.props.form.setFieldsValue({
          note: 'Hi there!',
        });
        return;
    }
  }
  onFinish(values){
    console.log(values);
    console.log(this.props.form.getFieldsValue,'09900--')
  }
  
  render(){
    console.log(this.props.form.getFieldValue('gender'),'990----')
    const { form } = this.props;
    const { getFieldDecorator, getFieldValue} = form; 
    return (
      <div>
        <Form ref={this.formRef} layout="inline" name="control-hooks" onFinish={this.onFinish.bind(this)}>
          <Form.Item label="权限标识" required>
            {getFieldDecorator("note")(<Input placeholder="请输入"/>)}
          </Form.Item>
          <Form.Item label="权限名称" required>
          {getFieldDecorator("name")(<Input placeholder="请输入"/>)}
          </Form.Item>
          <Form.Item label="requiredMark" name="状态" required>
            {getFieldDecorator("requiredMark")(
              <Radio.Group>
                <Radio.Button value="optional">启用</Radio.Button>
                <Radio.Button value="disabled">禁用</Radio.Button>
              </Radio.Group>
            )}
          </Form.Item>
          <Form.Item name="gender" label="分类" required>
            {getFieldDecorator("gender")(
              <Select style={{width: '250px'}} placeholder="请选择" onChange={this.onGenderChange.bind(this)} allowClear >
                <Option value="male">api借口</Option>
                <Option value="female">租户</Option>
                <Option value="other">系统</Option>
              </Select>
            )}
          </Form.Item>
          {getFieldValue('gender') == 'other' && <Form.Item name="customizeGender" label="备注">
            {getFieldDecorator("customizeGender")(<Input />)}
          </Form.Item>} 
        </Form>
      </div>

    )
  }
}
export default Form.create()(Basic)