// 学号 不可更改，在上一修改界面时 学号 已设定为 readonly
function modify(sInfo) {
    let stu = {};
    stu.name = sInfo.name.value.toString();
    stu.id = sInfo.id.value.toString();
    stu.nation = sInfo.nation.value.toString();
    stu.clazz = sInfo.clazz.value.toString();
    stu.English = sInfo.English.value.toString();
    stu.Chinese = sInfo.Chinese.value.toString();
    stu.math = sInfo.math.value.toString();
    stu.program = sInfo.program.value.toString();
    stu.sum = (parseFloat(stu.English) + parseFloat(stu.Chinese) + parseFloat(stu.math) + parseFloat(stu.program)).toString();
    let stuStr = JSON.stringify(stu);
    localStorage[sInfo.id.value] = stuStr;
    alert(`学生 ${stu.name} 成绩信息修改成功！`);
}