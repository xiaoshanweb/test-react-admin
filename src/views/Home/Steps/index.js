import React from 'react'
import  {Timeline} from 'antd'
const Item = Timeline.Item

const list = [
    {desc:'登录验证- 2020/3',color:'green'},
    {desc:'登录验证- 2020/4',color:'green'},
    {desc:'登录验证- 2020/5',color:'red'},
    {desc:'登录验证- 2020/6',color:'blue'},
    {desc:'登录验证- 2020/7',color:'yellow'},
    {desc:'登录验证- 2020/8',color:'blue'}
]
export default () => (
    <div className="home-task">
        <small>10个已完成，2个待完成，1个正在进行中</small>
        <Timeline>
            {list.map( (item,index) => <Item key={index} color={item.color}>{item.desc}</Item>)}   
        </Timeline>
    </div>
)