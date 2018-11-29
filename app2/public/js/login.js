'use strict'
function loginForm() {

var login = $$('loginForm').getValues().login;
var password = $$('loginForm').getValues().password;

if(login == 'Admin' && password == 'qwerty') {
  $$('loginForm').hide();
 openIndex();
} else {
  alert('Вы указали неверное имя пользователя или пароль!');
}

}
