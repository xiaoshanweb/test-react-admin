import React from 'react';
import { Table, Form, Input, Popconfirm } from 'antd';

const { Item } = Form
const { Provider, Consumer } = React.createContext()//组件之间传值

let modelList = [
  {
    key: "1",
    name: "Edrward 0",
    income: 3342.33,
    address: "London Park no. 0",
    operation: ""
  },
  {
    key: "2",
    name: "Edrward 1",
    income: 11432.33,
    address: "London Park no. 1",
    operation: ""
  },
  {
    key: "3",
    name: "Edrward 3",
    income: 55312.33,
    address: "London Park no. 3",
    operation: ""
  }
]



class EditableCell extends React.Component {
  renderCell = ({ getFieldDecorator }) => {
    const {
      editing, dataIndex, title, Inputs, record, index, children,
      ...restProps
    } = this.props;

    return (
      <td {...restProps} className='my-cell-td'>
        {editing ? (
          dataIndex == 'income' ?
            < Item style={{ margin: 0 }}>
              {getFieldDecorator(dataIndex, {
                rules: [{
                  required: true,
                  pattern: new RegExp(/^\d+\.?(\d{1,2})?$/),
                  message: '小数点后保留2位小数'
                }],
                initialValue: record[dataIndex] == '-' ? '' : record[dataIndex].replace(/,/g, ''),
              })(
                <Inputs />
              )}
            </Item> : < Item style={{ margin: 0 }}>
              {getFieldDecorator(dataIndex, {
                rules: [{ required: true, message: `请输入 ${title}!` }],
                initialValue: record[dataIndex],
              })(
                <Inputs />
              )}
            </Item>
        ) : children
        }
      </td>
    );
  };
  render() {
    return <Consumer>{this.renderCell}</Consumer>;
  }
}



class TableRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editingKey: '',
      data: modelList
    }
  }
  componentDidMount() {
    modelList.forEach(item => {
      item.income = this.formatNumber(item.income)
    })
    this.setState({
      data: modelList
    })
  }
  //千分符
  formatNumber = num => {
    if (isNaN(num)) {
      throw new TypeError("num is not a number");
    }
    var groups = (/([\-\+]?)(\d*)(\.\d+)?/g).exec("" + num),
      mask = groups[1],            //符号位 
      integers = (groups[2] || "").split(""), //整数部分 
      decimal = groups[3] || "",       //小数部分 
      remain = integers.length % 3;

    var temp = integers.reduce(function (previousValue, currentValue, index) {
      if (index + 1 === remain || (index + 1 - remain) % 3 === 0) {
        return previousValue + currentValue + ",";
      } else {
        return previousValue + currentValue;
      }
    }, "").replace(/\,$/g, "");
    return mask + temp + decimal;
  }

  //判断是否可编辑
  isEditing = record => record.key == this.state.editingKey

  //是否展示编辑
  editable = (editable, editingKey, record) => {
    const ele = editable ? (
      <span style={{ display: 'block' }}>
        <Consumer>
          {
            form => (
              <a onClick={() => this.save(form, record.key)} style={{ marginRight: 8 }}>
                保存
        	  </a>
            )
          }
        </Consumer>
        <Popconfirm
          title="是否确定取消?"
          onConfirm={this.cancel}
          okText="确定"
          cancelText="取消"
        >
          <a>取消</a>
        </Popconfirm>
      </span>
    ) : (
        <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>
          编辑
        </a>
      );
    return ele
  }

  //编辑
  edit = (key) => {
    this.setState({
      editingKey: key
    })
  }

  //保存
  save = (form, key) => {

    form.validateFields((error, row) => {
      if (error) {
        return
      }

      for (let i in row) {
        //!isNaN(Number(item[i].replace(/,/g, '')) 判断清除掉逗号的元素是不是数字类型
        row[i] = !isNaN(parseFloat(row[i])) ? this.formatNumber(row[i]) : row[i]
      }

      const newData = this.state.data
      const index = newData.findIndex(item => item.key === key)

      if (index > -1) {
        const item = newData[index];

        newData.splice(index, 1, {
          ...item,
          ...row,
        });
      }

      this.setState({
        editingKey: '',
        data: newData
      })
    })
  }

  //取消
  cancel = () => {
    this.setState({
      editingKey: ''
    })
  }

  init = () => {
    this.columns = [
      {
        title: 'name',
        dataIndex: 'name',
        editable: true,
      },
      {
        title: 'income',
        dataIndex: 'income',
        editable: true,
      },
      {
        title: 'address',
        dataIndex: 'address',
        editable: true,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record, index) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);
          return <div>
            {
              this.editable(editable, editingKey, record)
            }
          </div>
        }
      },
    ]
  }

  render() {
    this.init()
    const components = {
      body: {
        cell: EditableCell,
      },
    };

    const columns = this.columns.map(col => {

      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          Inputs: Input,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    return (
      <Provider value={this.props.form}>
        < Table
          components={components}//覆盖默认的 table 元素
          columns={columns}
          dataSource={this.state.data}
          pagination={false}
        />
      </Provider >
    )
  }
}
export default Form.create({
  onValuesChange(props, changeValues, allValues) {
    // console.log(allValues);
  }
})(TableRow)
