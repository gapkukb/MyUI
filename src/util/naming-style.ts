import { reg_naming_style } from "./regexp";
/**
 * kebab case :连字符（-），所有单词都小写，my-name-style
 * snake case  连字符（_）, 全小写或全大写
 * camel case （驼峰式） 名称中间没有空格和标点，除第一个单词外后面的单词首字母均大写。
 *
 * var test = ["myNameStyle", "MyNameStyle", "MyNameStyle", "my-name-style", "my_name_style", "MY_NAME_STYLE"];
 */
function nameStyleBase(input: string): string[] {
  return input.split(reg_naming_style).filter((i) => i);
}
export const capitalize = (input: string) => input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
interface INamingStyle {
  pascal: (input: string) => string;
  camel: (input: string) => string;
  join: (input: string, joiner: string, upper?: boolean) => string;
  snake: (input: string) => string;
  kebab: (input: string) => string;
  constant: (input: string) => string;
  custom: (input: string, formatter: (input: string[]) => string) => string;
}
export const namingStyle: INamingStyle = {
  join: (input, joiner, upper) => nameStyleBase(input).join(joiner)[upper ? "toUpperCase" : "toLowerCase"](),
  pascal: (input) => nameStyleBase(input).map(capitalize).join(""),
  camel(input) {
    const output = this.pascal(input);
    return output.charAt(0).toLowerCase() + output.slice(1);
  },
  snake(input) {
    return this.join(input, "_");
  },
  kebab(input) {
    return this.join(input, "-");
  },
  constant(input) {
    return this.join(input, "_", true);
  },
  custom: (input, formatter) => formatter(nameStyleBase(input)),
};
