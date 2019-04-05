function getStyle(obj,attr,value)
{
if(!value)
{
if(obj.currentStyle)//ie
{
return obj.currentStyle(attr);
}
else{//标准浏览器
obj.getComputedStyle(attr,false);
}
}
else
{
obj.style[attr] = value;
}
}
