
function showNodeType(dom){
    alert(dom.nodeType);
}

//兼容ie老版本的获取 第一个元素子节点。
//参数 node 是需要获取第一个元素子节点的对象。（元素节点）
function getFirstChild(node){
    //如果node.firstElementChild 存在，就返回firstElementChild,
    // 如果node.fistElementChild 不存在，就返回 fitstChild;
    var  oFirstChild=node.firstElementChild ||node.firstChild;
    return oFirstChild
}
//调用：
//把需要获取的对象 oDiv 作为实参，传入函数调用。

//alert(oFirstChild.nodeType);

//兼容的第二种写法，if else
function getFirstChildEX(node){
    if(node.firstElementChild){
        return node.firstElementChild;
    }else{
        return node.firstChild;
    }
}
//获取最后一个元素节点
function getLastChild(node){
    return node.lastElementChild||node.lastChild;
}
//获取下一个兄弟元素节点
function getNextSibling(node){
    return node.nextElementSibling||node.nextSibling;
}
//获取上一个兄弟元素节点
function getPreviousSibling(node){
    return node.previousElementSibling||node.previousSibling;
}

//获取所有子元素节点
function getChildren(node){
    var arrChild=[];
    //把元素阶段放入到 数组 arrChild中。最后返回（return ） 这个数组 arrChild
    var children=node.childNodes;//包含了 元素节点 和文本节点的 数组。
    for(var i=0;i<children.length;i++){
        if(children[i].nodeType==1)//元素节点
        {
            arrChild.push(children[i]);
        }
    }
    return arrChild;
}

//调用
//用getChildren 方法 获取所有元素节点，并返回数组。
//定义变量 oDivChild 接受数组（oDiv的所有元素节点）
/**
 * Created by Administrator on 16-5-24.
 */
