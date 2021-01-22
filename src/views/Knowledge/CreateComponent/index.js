import React from 'react'
import {Row, Col, Card} from 'antd'

const html1 = `
	<div style="background:#F6F6F6;padding:10px">
		<p>import React from 'react'</p>
		<span>const</span> MyComponent = React.createClass({ <br/>
		<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>	render () { <br/>
		<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span> ( <br/>
			<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>	<span><span>&lt;<span>h2</span>&gt;</span>我是React.createClass生成的组件<span>&lt;/<span>h2</span>&gt;</span></span><br/>
			<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>)<br/>

			<span>&nbsp;&nbsp;&nbsp;&nbsp</span>}<br/>
		})
	</div>
`
const html2 = `
	<div style="background:#F6F6F6;padding:10px">
		<p>import React from 'react'</p>
		<span>class MyComponent from React.Component</span>{<br/>
		<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>	render () { <br/>
		<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span> ( <br/>
			<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>	<span><span>&lt;<span>h2</span>&gt;</span>我是React.createClass生成的组件<span>&lt;/<span>h2</span>&gt;</span></span><br/>
			<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>)<br/>

			<span>&nbsp;&nbsp;&nbsp;&nbsp</span>}<br/>
		}
	</div>
	
`
const html3 = `
	<div style="background:#F6F6F6;padding:10px">
		<p>import React from 'react'</p>
		<span>const MyComponent = (props) => (</span>{<br/>
			<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>	<span><span>&lt;<span>h2</span>&gt;</span>我是React.createClass生成的组件h2</span>&gt;</span></span><br/>
			<span></span>)<br/>

			<span>ReactDom.render(<span>&lt;<span>MyComponent name="xxxx" /<span>&gt;</span>,mountNode)</span><br/>
	</div>
	
`
export default class extends React.Component {
    render () {
			return (
				<div className="component_write_wrapper markdown_box">
					<Row className="fmt gutter-row">
						<Col md={12} className="gutter-col">
							<Card title="React.createClass">
								<div dangerouslySetInnerHTML={{__html: html1}}></div>
								<ol>
									<li>React.createClass会自绑定函数方法（不像React.Component只绑定需要关系的函数）导致不必要的性能开销，增加代码过时的可能性</li>
									<li>React.createClass的mixmins不够自然、直观</li>
								</ol>
							</Card>
						</Col>
						<Col md={12} className="gutter-col">
							<Card title="React.Component">
								<div dangerouslySetInnerHTML={{__html: html2}}></div>
								<ol>
									<li>需要手动绑定this指向</li>
									<li>React.Component形式非常适合高阶组件，它以更直观的形式展示了比mixins更强大的功能，并且HOC是纯净的JavaScript，不用担心他们会被废弃</li>
								</ol>
							</Card>
						</Col>
						<Col md={24} className="gutter-col">
							<Card title="无状态函数式组件">
								<div dangerouslySetInnerHTML={{__html: html3}}></div>
								<ol>
									<li>无状态组件的创建形式使嗲吗的可读性更好，并且减少了大量冗余的代码，精简至只有一个render方法，大大的增强了编写一个组件的便利</li>
									<li>组件不会被实例化，整体渲染性能得到提升</li>
									<li>组建不能访问this对象</li>
									<li>组件无法访问生命周期的方法</li>
									<li>无状态组建只能访问输入的props，同样的props会得倒同样的渲染结果，不会有副作用</li>
								</ol>
							</Card>
						</Col>
					</Row>
				</div>
			)
    }
}
