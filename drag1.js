/**
 * Created by lvnan on 2016/1/25.
 */
var destBoxDiv;
var destBoxDiv2;
var srcImg;
var msgDiv;

//直接加载
window.onload = function () {
    destBoxDiv = document.getElementById("destbox");
    destBoxDiv2 = document.getElementById("destbox2");
    msgDiv = document.getElementById("msg");
    srcImg = document.getElementById("img");
    /*ondragstart 事件：当拖拽元素开始被拖拽的时候触发的事件，此事件作用在被拖曳元素上*/
    srcImg.ondragstart = function (e) {
        e.dataTransfer.setData("ImgID","img");
    }
    /*ondragover 事件：拖拽元素在目标元素上移动的时候触发的事件，此事件作用在目标元素上*/
    destBoxDiv.ondragover = function (e) {
        //在ondragover中一定要执行preventDefault()，否则ondrop事件不会被触发。
        e.preventDefault();
    }
    destBoxDiv2.ondragover=function(e){
        e.preventDefault();
    }
    /*ondrop 事件：被拖拽的元素在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上*/
    destBoxDiv.ondrop =dropImgHandler;
    destBoxDiv2.ondrop =dropImgHandler;

}

function dropImgHandler(e) {
    showMsg(e.dataTransfer);
    e.preventDefault();
    var img=document.getElementById(e.dataTransfer.getData("ImgId"));
    e.target.appendChild(img);
}

function showMsg(obj) {
    var s = "";
    for (var k in obj) {
        s += k + ":" + obj[k] + "<br />";
    }
    msgDiv.innerHTML = s;
}