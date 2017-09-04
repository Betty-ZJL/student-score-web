function deleted(name, id) {
    let msg = `确定删除"${name}+${id}"的成绩？\n\n请确认！`;
    if (confirm(msg) == true) {
        let storage = localStorage;
        for (let i = 0; i < localStorage.length; i++) {
            if (id === localStorage.key(i)) {
                storage.removeItem(localStorage.key(i));
                break;
            }
        }
        return true;
    } else {
        return false;
    }
}