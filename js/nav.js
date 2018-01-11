/**
 * Created by Administrator on 2017/9/9 0009.
 */
window.onscroll=function(){
    var scrollTop=document.body.scrollTop;
    var nav=$("nav");
    var btn=$("btn");            //按钮
    var daoHang=$("daoHang");    //导航
    var ul=$("ul");
    var nLogo=$("nLogo");
    if(scrollTop>579){
        daoHang.className="fixed";
        //nav.style.opacity=0;//导航菜单隐藏
        daoHang.style.opacity="1";
        nLogo.style.height="130px";
        nLogo.style.display="block";
        daoHang.style.right="77%";
        nLogo.style.position="fixed";
        nLogo.style.left="0";

    }else if(scrollTop<579){
        daoHang.style.position="relative";
        daoHang.style.opacity="1";
        nLogo.style.display=" none";
        daoHang.style.width="100%";
        daoHang.style.height="130px";
        daoHang.style.right="0";
    }
    btn.onclick=function(){
        daoHang.style.opacity="1";
    }
};

function $(id){
    return document.getElementById(id);
}