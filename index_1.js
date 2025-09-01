// search.js  —— DOM0 级绑定
document.getElementById('gos').onclick = function () {
    var keyword = document.getElementById('kw').value.trim();
    if (keyword) {
        location.href = 'https://www.baidu.com/s?wd=' + encodeURIComponent(keyword);
    }
};

document.getElementById('kw').onkeydown = function (e) {
    if (e.key === 'Enter') {
        document.getElementById('gos').onclick();
    }
};
