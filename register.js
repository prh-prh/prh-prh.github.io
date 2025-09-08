window.onload=function (){
  var btn=document.getElementById('register_button');

  btn.onclick=function (e){
    e.preventDefault();
    var account=document.querySelector('input[name="userid"]').value.trim();
    var pwd1=document.querySelector('input[name="password_1"]').value;
    var pwd2=document.querySelector('input[name="password_2"]').value;
    if (!account||!pwd1||!pwd2) {
      alert('账号或密码不能为空！');
      return;
    }
    if (!/^\d{11}$/.test(account)) {
       alert('账号必须为 11 位数字！'); 
       return;
       }
    if (pwd1!==pwd2) {
      alert('两次密码输入不一致！');
      return;
    }
    if (pwd1.length<6) {
      alert('密码至少 6 位！');
      return;
    }
    var userMap=JSON.parse(localStorage.getItem('userDB')||'{}');
    if (userMap[account]) {
      alert('该账号已被注册！');
      return;
    }
    userMap[account]={ password: pwd1 };
    localStorage.setItem('userDB', JSON.stringify(userMap));
    alert('注册成功！即将前往登录页…');
    location.href='login.html';
  };

};
