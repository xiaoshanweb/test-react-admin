import React from 'react'
import {Row, Col, Card} from 'antd'
import {syntax} from 'assets/md/knowledge'

const html1 = `
    <pre><code><span class="hljs-keyword">const</span> html=<span class="hljs-string">'&lt;h1&gt;content&lt;/h1&gt;'</span>;  
    React.render(
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">dangerouslySetInnerHTML</span>=<span class="hljs-string">{{__html:</span> <span class="hljs-attr">html</span>}}&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>,
        <span class="hljs-built_in">document</span>.body
    );
    </code></pre>
    <pre>
		<code>
			<span class="hljs-keyword">const</span> html=<span class="hljs-string">'&lt;h1&gt;content&lt;/h1&gt;'</span>
		</code>
    </pre>
`

const html2 = `
    <pre><code><span class="hljs-keyword">let</span> <span class="hljs-attr">props</span> = {
        a: <span class="hljs-number">1</span>,
        b: <span class="hljs-number">2</span>,
        c: 'text'
    }

    // 常规
    <span class="hljs-keyword">let</span> <span class="hljs-attr">component</span> = &lt;Component <span class="hljs-attr">a={props.a}</span> <span class="hljs-attr">b={props.b}</span> <span class="hljs-attr">c={props.c}/&gt;</span>

    // 扩张运算符
    <span class="hljs-keyword">let</span> <span class="hljs-attr">component</span> = &lt;Component {...props} /&gt;
    </code></pre>
		<pre>
			<ol>
				<li style="color:red">首次入院前外院治疗情况，增加补充备注。单列出首次入院前外院治疗疗效评估，勾选否不显示</li>
				<li>基因检测改为下图示</li>
				<li>是否复发或进展，复发/进展的时间，复发/进展时的PS评分，三项移到是否再次病检上面</li>
				<li>再次基因检测结果同下图示</li>
			</ol>
		</pre>
`
export default () => (
	<Row className="gutter-row fmt">
		<Col md={22} className="gutter-col">
			<Card bordered={false}>
				<div dangerouslySetInnerHTML={{__html:html1}}></div>
			</Card>
		</Col>
		<Col md={22} className="gutter-col">
			<Card bordered={false}>
				<div dangerouslySetInnerHTML={{__html:html2}}></div>
			</Card>
		</Col>
	</Row>
)