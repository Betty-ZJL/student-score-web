//计算总分平均数
function calAver(sums) {
    let aver = 0;
    for (let sum of sums) {
        aver += sum;
    }
    return aver / sums.length;
}

//计算总分中位数
function calMedi(sums) {
    sums.sort(function (a, b) {
        return a - b
    });
    return (sums[parseInt(sums.length / 2)] + sums[parseInt((sums.length - 1) / 2)]) / 2;
}

//输出html
function printHtml(idInfo, summary) {
    let head = '<head>' +
        '<meta charset="UTF-8">' +
        '<title>学 生 成 绩 单</title>' +
        '<link rel="stylesheet" href="./bootstrap-3.3.7-dist/css/bootstrap.css">' +
        '</head>'
    let body = '<div style="margin-top:100px;">' +
        '<h2 style="text-align:center">学 生 成 绩 单</h2>' +
        '<table class="table table-hover center-block" style="width: 400px">' +
        ' <tr>' +
        ' <th>姓名</th>' +
        ' <th>学号</th>' +
        ' <th>班级</th>' +
        ' <th>语文</th>' +
        ' <th>数学</th>' +
        ' <th>英语</th>' +
        ' <th>编程</th>' +
        ' <th>总分</th>' +
        ' </tr>';
    for (let id of idInfo) {
        body += '<tr>' +
            '<td>' + id.name + '</td>\n' +
            '<td>' + id.id + '</td>\n' +
            '<td>' + id.clazz + '</td>\n' +
            '<td>' + id.Chinese + '</td>\n' +
            '<td>' + id.math + '</td>\n' +
            '<td>' + id.English + '</td>\n' +
            '<td>' + id.program + '</td>\n' +
            '<td>' + id.sum + '</td>\n' +
            '</tr>';
    }
    body += '<tr>' +
        '<td colspan="8" style="text-align:center" bgcolor="#CCFFCC">总分平均分为：' + summary.aver + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="8" style="text-align:center" bgcolor="#CCFFCC">总分中位数为：' + summary.medi + '</td>' +
        '</tr>' +
        '</table>' +
        '<div class="center-block" style="margin-top: 30px;width: 150px">' +
        '<a href="./index.html"><input class="btn btn-primary" type="button" value="返回主页"></input></a>' +
        '</div>' +
        '</div>';
    return head + body;
}

function queryScore(ids) {
    //提取要查询的学号
    let idArr = [];
    for (let id of ids) {
        if (id.type == 'text')
            idArr.push(id.value);
    }
    //遍历提取详细信息
    let idInfo = [];
    let summary = {};
    let sums = [];
    for (let id of idArr) {
        for (let i = 0; i < localStorage.length; i++) {
            if (id === localStorage.key(i)) {
                let stu = JSON.parse(localStorage.getItem(localStorage.key(i)));
                idInfo.push(stu);
                sums.push(parseFloat(stu.sum));
                break;
            }
        }
    }
    //计算总分平均分
    summary.aver = calAver(sums);
    //计算总分中位数
    summary.medi = calMedi(sums);
    //输出结果
    if (idInfo.length > 0) {
        let result = printHtml(idInfo, summary);
        document.write(result);
    } else {
        alert("查无此人！");
    }

}