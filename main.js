var http = require('http');
var fs = require('fs');
var url = require('url');

function templateList(filelist)
{
var list='<ul>';
var i=0;
while(i<filelist.length)
{
list=list+'<li><a href="/?id='+filelist[i]+'">'+filelist[i]+'</a></li> ';
i=i+1;
}
list=list+'</ul>';
return list;
}
function templateHTML(title,list,body)
{
var temp=`
            <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              ${list}
              ${body}
            </body>
            </html>
            `;
//아니 시발 `이놈이 '이거랑 다른지는 몰랐지;; 
return temp;
}
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname=url.parse(_url,true).pathname;
    var title = queryData.id;


fs.readdir('./data',function(error,filelist){

var list=templateList(filelist);

if(pathname === '/'){
      
fs.readFile(`data/${title}`,'utf8',function(err,description){   

if(title===undefined)
{
title='Welcome';
description='Welcome!';
}

var template = templateHTML(title,list,`<h2>${title}</h2><p>${description}</p>`);

 response.writeHead(200);
    response.end(template);
});
   
}
else
{
response.writeHead(404);
response.end('Not found');
}

});
});
app.listen(3000);