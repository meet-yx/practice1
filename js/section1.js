/**
 * Created by Administrator on 2017/9/9 0009.
 */
//section1轮播 
var  arrImg1=['images/1.jpg','images/2.jpg' ];    //存放图片的数组
var  now=0;                       //当前为第几张图片 
var  divImg1=$("divImg1");         //图片框
var  btnLeft1=$("btnLeft1");      //按钮
var  btnRight1=$("btnRight1");    //按钮
lunbo1();                         //调用轮播

btnLeft1.onclick=prev1;           //鼠标单击执行的事件
btnRight1.onclick=next1;

setInterval(next1,5000);          //定时器
function lunbo1(){                //轮播事件
    divImg1.innerHTML="";
    for (var i = 0; i <arrImg1.length; i++) {
        divImg1.innerHTML+="<img src='"+arrImg1[i]+"'/>";
    }
}
function next1(){
    now++;//5
    if(now>arrImg1.length-1){
        now=0;
        divImg1.style.marginLeft="0px";
    }else{
        var left=divImg1.offsetLeft-728;
//            console.log(left)
        divImg1.style.marginLeft=left+'px';
    }

}
function prev1(){
    now--;
    if(now<0){
        now=(arrImg1.length-1);
        divImg1.style.marginLeft=-(arrImg1.length-1)*728+'px';
    }else{
        var left=parseInt(divImg1.style.marginLeft)+728;

        divImg1.style.marginLeft=left+'px';
    }

}

function $(id){
    return document.getElementById(id);
}
