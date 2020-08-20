//script 태그가 있으면 절대 안됨! 이거 자체가 script 태그 안에 들어있다고 생각.
var Links=
{
setColor:function(color)
{
//var alist=document.querySelectorAll('a');
//var i=0;
//while(i<alist.length)
//{
//alist[i].style.color=color;
//i=i+1;
//}

$('a').css('color',color);
//jQuery를 이용한 강력한 방법.
}
};
var Body=
{
setColor:function(color)
{
//document.querySelector('body').style.color=color;
$('body').css('color',color);
},
setBackgroundColor:function(color)
{
//document.querySelector('body').style.backgroundColor=color;
$('body').css('backgroundColor',color);
}
};
function nightDayHandler(self)
{
var target=document.querySelector('body');
if(self.value==='night')
{
Body.setBackgroundColor('black');
Body.setColor('white');
self.value='day';
Links.setColor('powderblue');
}
else
{
Body.setBackgroundColor('white');
Body.setColor('black');
self.value='night';
Links.setColor('blue');
}
}