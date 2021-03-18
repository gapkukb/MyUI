// 快速创建组件模板
const fs = require("fs");
const path = require("path");
const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});
const root = process.cwd();
const reg_naming_style = /[-_./\s]+|(?:([A-Z][a-z]+))/;
const capitalize = (input) => input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
const convert2pascal = (input) =>
	input
		.split(reg_naming_style)
		.filter((i) => i)
		.map(capitalize)
		.join("");
readline.input.on("keypress", function (_, key) {
	if (key.name == "escape") process.exit();
});
function run() {
	readline.question("请输入组件名称,按esc退出:", (name) => {
		const file = path.join(root, name);
		if (fs.existsSync(file)) {
			console.log(`组件已存在,请重新输入`);
			return run();
		}
		create(file, name);
	});
}
run();
function create(file, name) {
	fs.mkdirSync(file);
	const pascal = convert2pascal(name);
	const style = path.join(file, "index.styl");
	const storybook = path.join(file, "index.stories.tsx");
	const tsx = path.join(file, "index.tsx");

	let data = `.${name}\n\tdisplay:flex`;
	fs.writeFileSync(style, data);

	data = `
import React from "react"; 
import { ${pascal} } from "./index";

export default {
  title: "${name}",
  component: ${pascal},
};
export const Demo = () => {
  return  <></>
};`.trim();

	fs.writeFileSync(storybook, data);
	data = `
import classnames from "classnames";
import "./index.styl";
export type ${pascal}Props = Partial<{

}>;

export const ${pascal}: CFC<${pascal}Props> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
        className: classnames("${name}",{

        }),
        style:{
        ...style
        },
        onClick:clickHandler,
        ...rest,
    };
    return <div {...props}>{children}</div>;
};
export default ${pascal};
  `.trim();
	fs.writeFileSync(tsx, data);
	console.log(`位于${file}处的组件创建完毕!`);
	run();
}
