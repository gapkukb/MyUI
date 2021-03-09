import React, { Component } from "react";
import Button from "./package/button";
import Field from "./package/field";
import Icon from "./package/icon";

class App extends Component {
	state = {
		model: "外部传进来的值",
	};
	render() {
		return (
			<div>
				{/* <div>{this.state.model}</div> */}
				<Field
					colon
					prefix="http://"
					suffix="@gmail.com"
					showLimit
					defaultValue={this.state.model}
					placeholder="完整结构"
					type="text"
					icon={<Icon name="phone"></Icon>}
					onIconClick={() => {}}
					rightIcon="wifi"
					label="总览"
					labelAlign="right"
					bordered
					error="错误信息错误信息错误信息错误信息错误信息错误信息错误信息错误信息错误信息错误信息错误信息"
					maxLength="20"
					button={<Button size="small">按钮</Button>}
				></Field>
				<Field colon label="请输入任意字符 :" placeholder="请输入任意字符" type="text" maxLength="6"></Field>
				<Field colon label="请输入数字 :" placeholder="请输入数字" type="number" maxLength="6"></Field>
				<Field colon label="请输入整数 :" placeholder="请输入整数" type="integer" maxLength="6"></Field>
				<Field colon label="请输入邮箱 :" placeholder="请输入邮箱" type="email" maxLength="6"></Field>
				<Field colon label="请输入搜索内容 :" placeholder="请输入搜索内容" type="search" maxLength="6"></Field>
				<Field colon label="请输入url地址 :" placeholder="请输入url地址" type="url" maxLength="6"></Field>
				<Field colon label="请输入电话 :" placeholder="请输入电话" type="tel" maxLength="6"></Field>
				<Field colon label="请输入密码 :" placeholder="请输入密码" type="password" maxLength="6"></Field>
				<Field
					disabled
					colon
					label="文本输入域 :"
					placeholder="文本输入域"
					type="textarea"
					rows="2"
					showLimit
				></Field>
				<div>size</div>
				<Field size="large" label="大号" placeholder="大号" type="text" maxLength="6"></Field>
				<Field label="普通" placeholder="普通" type="text" maxLength="6"></Field>
				<Field size="small" label="小号" placeholder="小号" type="text" maxLength="6"></Field>
			</div>
		);
	}
}
export default App;
