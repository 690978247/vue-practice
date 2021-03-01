
//  如何判断一个字符串是否为日期格式
var data = "2020-11-19 14:30:36.096";
//返回为false则是日期格式;isNaN(data)排除data为纯数字的情况（此处不考虑只有年份的日期，如‘2018’）

if(isNaN(data)&&!isNaN(Date.parse(data))){
　　console.log("data是日期格式！")
}

//js 正则判断字符串是 中文还是数字
var pattern = new RegExp("[\u4E00-\u9FA5]+");

var str = "中文字符"

if(pattern.test(str)){

    alert('该字符串是中文');

}

//验证是否是英文

var pattern2 = new RegExp("[A-Za-z]+");

var str2 = "abcdefsgaaweg"

if(pattern2.test(str2)){

    alert('该字符串是英文');

}


var pattern3 = new RegExp("[0-9]+");

var str3 = "234234"

if(pattern3.test(str3)){

    alert('该字符串是数字');

}