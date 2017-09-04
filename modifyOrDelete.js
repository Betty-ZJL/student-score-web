//打印查询出的结果
function printTable(stuInfo) {
    let head = '<html>' +
        '<head>' +
        '<meta charset="UTF-8">' +
        '<title>修改学生成绩信息</title>\n' +
        '<link rel="stylesheet" href="./bootstrap-3.3.7-dist/css/bootstrap.css">' +
        '<script src="./jquery-3.2.1.js"></script>' +
        '<script src="./doModify.js"></script>' +
        '<script src="./doDelete.js"></script>' +
        '<script src="./bootstrap-3.3.7-dist/js/bootstrap.js"></script>' +
        '</head>';
    let body = '<body>' +
        '<div style="margin-top:50px;">' +
        '<h2 style="text-align:center">修 改 学 生 成 绩 信 息</h2>\n' +
        '<table class="table table-hover center-block" style="width: 400px">\n' +
        '    <form name="sInfo" action="index.html"\n' +
        '          onsubmit="modify(sInfo)">\n' +
        '        <tr>\n' +
        '            <th style="width: 150px;">姓&nbsp;&nbsp;名</th>\n' +
        '            <td><input type="text" name="name" value="' + stuInfo.name + '" required/></td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <th>学&nbsp;&nbsp;号</th>\n' +
        '            <td><input type="text" name="id" id="did" value="' + stuInfo.id + '" readonly/></td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <th>民&nbsp;&nbsp;族</th>\n' +
        '            <td><input type="text" name="nation" value="' + stuInfo.nation + '" required/></td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <th>班&nbsp;&nbsp;级</th>\n' +
        '            <td><input type="text" name="clazz" value="' + stuInfo.clazz + '" required/></td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <th>英&nbsp;&nbsp;语</th>\n' +
        '            <td><input type="number" name="English" min="0" max="100"  value="' + stuInfo.English + '" required/></td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <th>语&nbsp;&nbsp;文</th>\n' +
        '            <td><input type="number" name="Chinese" min="0" max="100" value="' + stuInfo.Chinese + '"required/></td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <th>数&nbsp;&nbsp;学</th>\n' +
        '            <td><input type="number" name="math" min="0" max="100" value="' + stuInfo.math + '"required/></td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <th>编&nbsp;&nbsp;程</th>\n' +
        '            <td><input type="number" name="program" min="0" max="100" value="' + stuInfo.program + '"required/></td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td style="text-align:center"><input class="btn btn-primary" type="submit" value="修改"/></td>\n' +
        '            <td>\n' +
        '<input class="btn btn-primary" type="button" value="删除" onclick="javascript:return deleted(sInfo.name.value,sInfo.id.value)"/></a>\n' +
        '                <a href="./modifyOrDelete.html"><input class="btn btn-primary" type="button" style="margin-left: 40px;" value="返回上一步"></input></a>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '    </form>\n' +
        '</table>' +
        '</div>' +
        '</body>' +
        '</html>';
    return head + body;
}

function printInfo(id) {
    //遍历提取详细信息
    let stuInfo = {};
    let flag = 0;
    for (let i = 0; i < localStorage.length; i++) {
        if (id === localStorage.key(i)) {
            stuInfo = JSON.parse(localStorage.getItem(localStorage.key(i)));
            flag = 1;
            break;
        }
    }
    //输出结果
    if (flag) {
        let result = printTable(stuInfo);
        document.write(result);
    } else {
        alert('查无此人！');
    }
}