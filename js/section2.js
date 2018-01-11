/**
 * Created by Administrator on 2017/9/9 0009.
 */


//section2 轮播
var arrImg=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg'];
var currentIndex=0;  //当前为第一张
var divImg=$("divImg");  //调用图片框

lunbo();

var btnLeft2=$("btnLeft2");
var btnRight2=$("btnRight2");
btnLeft2.onclick=prev;
btnRight2.onclick=next;
setInterval(next,3000);
function lunbo(){
    divImg.innerHTML="";
    for (var i = 0; i <arrImg.length; i++) {
        divImg.innerHTML+="<img src='"+arrImg[i]+"'/>";
    }
}
function next(){
    currentIndex++;//5
    if(currentIndex>arrImg.length-1){
        currentIndex=0;
        divImg.style.marginLeft="0px";
    }else{
        var left=divImg.offsetLeft-1000;
//            console.log(left)
        divImg.style.marginLeft=left+'px';
    }

}
function prev(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=(arrImg.length-1);
        divImg.style.marginLeft=-(arrImg.length-1)*1000+'px';
    }else{
        var left=parseInt(divImg.style.marginLeft)+1000;

        divImg.style.marginLeft=left+'px';
    }

}


function $(id){
    return document.getElementById(id);
}
