import React from 'react'
import Area from './area'
import Pie from './pie'
import LinePie from './line-pie'
import {Row,Col,Card} from 'antd'

export default () => (
	<div className="echarts_wrapper">
		<Row gutter={16} className="gutter-row">
			<Col md={24}>
				<div>
					<Card title="区域图" bordered={false}><Area /></Card>
				</div>
			</Col>
		</Row>	
    <Row gutter={16} className="gutter-row">
      <Col md={12}>
				<div>
					<Card title="饼状图" bordered={false}><Pie /></Card>
				</div>
			</Col>
      <Col md={12}>
				<div>
					<Card title="柱状折线图" bordered={false}><LinePie /></Card>
				</div>
			</Col>
		</Row>	 
	</div>
)