//界面加载后执行
window.onload = function () {
  var btn = document.getElementById('login_button');
  //事件绑定
  btn.onclick = function (e) {
    e.preventDefault();
    var account=document.querySelector('input[name="userid"]').value.trim();
    var pwd=document.querySelector('input[name="password_1"]').value;
    if (!account || !pwd) {
      alert('账号或密码不能为空！');
      return;
    }
    var userMap=JSON.parse(localStorage.getItem('userDB') || '{}');
    if (!userMap[account]) {
      alert('账号不存在，请先注册！');
      return;
    }
    if (userMap[account].password !== pwd) {
      alert('密码错误！');
      return;
    }
    sessionStorage.setItem('currentUser', account);
    alert('登录成功！即将跳转…');
    location.href = 'index_1.html';
  };
};