// Write output with process.res object
//
process.res.write("Hello here!\n\n")
process.res.write("You are getting URL: " + process.req.url + "\n")

// This is simple example of using mysql module
//
// var Client = require('mysql').Client,
//    client = new Client();
//
// client.user = '';
// client.password = '';
// client.connect();
// client.query("Your SQL query here");
 
// You should call process.res.end() at the end of output to stop output. 
//
// This is good idea for async requests, because you can call it wherever you want.
//
/*
2) Работа с Node.JS

При создании нового сайта в папке сайта появляется файл index.js, в котором описано - как работает фреймворк на нашем хостинге.
Не требуется делать listen(...), это делает специальный контроллер. В файле index.js достаточно определить функцию exports.server, в которой будет заключена вся логика.

Вывод process.stdout (console.log, console.dir и прочие) транслирован в файл error_log, всю отладку можно отслеживать оттуда.
На аккаунте включён SSH доступ.

При необходимости доустановить модули Node.JS - обращайтесь по адресу nodejs@timeweb.ru

3) Для тестирования вам выделен технический домен node116.tmweb.ru.*/

process.res.end()