//有符号浮点数
export const reg_numeric = /^\d+(\.\d+)?$/;
//金额，带两位小数
export const REG_MONEY = /^\d*(?:\.\d{0,2})?$/;
// 命名风格解析正则
export const reg_naming_style = /[-_./\s]+|(?:([A-Z][a-z]+))/;
/**日期格式检查 */
//
// MM/DD/YYYY
export const reg_datestring = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
// YYYY-MM-DD
export const reg_datestring2 = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])$/;
