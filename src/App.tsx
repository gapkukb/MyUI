import React, { Component } from "react";
import Button from "./package/button";
import Field from "./package/field";
import Icon from "./package/icon";

class App extends Component {
	render() {
		return (
			<div>
				<Field
                    colon
					placeholder="完整结构"
					type="text"
					icon={<Icon name="phone"></Icon>}
					rightIcon="wifi"
                    label="完整结构"
                    labelAlign="right"
                    // error="错误信息"
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
				<Field colon label="文本输入域 :" placeholder="文本输入域" type="textarea" maxLength="6"></Field>
			</div>
		);
	}
}
export default App;
