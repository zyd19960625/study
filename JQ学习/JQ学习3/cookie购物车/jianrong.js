
function showNodeType(dom){
    alert(dom.nodeType);
}

//����ie�ϰ汾�Ļ�ȡ ��һ��Ԫ���ӽڵ㡣
//���� node ����Ҫ��ȡ��һ��Ԫ���ӽڵ�Ķ��󡣣�Ԫ�ؽڵ㣩
function getFirstChild(node){
    //���node.firstElementChild ���ڣ��ͷ���firstElementChild,
    // ���node.fistElementChild �����ڣ��ͷ��� fitstChild;
    var  oFirstChild=node.firstElementChild ||node.firstChild;
    return oFirstChild
}
//���ã�
//����Ҫ��ȡ�Ķ��� oDiv ��Ϊʵ�Σ����뺯�����á�

//alert(oFirstChild.nodeType);

//���ݵĵڶ���д����if else
function getFirstChildEX(node){
    if(node.firstElementChild){
        return node.firstElementChild;
    }else{
        return node.firstChild;
    }
}
//��ȡ���һ��Ԫ�ؽڵ�
function getLastChild(node){
    return node.lastElementChild||node.lastChild;
}
//��ȡ��һ���ֵ�Ԫ�ؽڵ�
function getNextSibling(node){
    return node.nextElementSibling||node.nextSibling;
}
//��ȡ��һ���ֵ�Ԫ�ؽڵ�
function getPreviousSibling(node){
    return node.previousElementSibling||node.previousSibling;
}

//��ȡ������Ԫ�ؽڵ�
function getChildren(node){
    var arrChild=[];
    //��Ԫ�ؽ׶η��뵽 ���� arrChild�С���󷵻أ�return �� ������� arrChild
    var children=node.childNodes;//������ Ԫ�ؽڵ� ���ı��ڵ�� ���顣
    for(var i=0;i<children.length;i++){
        if(children[i].nodeType==1)//Ԫ�ؽڵ�
        {
            arrChild.push(children[i]);
        }
    }
    return arrChild;
}

//����
//��getChildren ���� ��ȡ����Ԫ�ؽڵ㣬���������顣
//������� oDivChild �������飨oDiv������Ԫ�ؽڵ㣩
/**
 * Created by Administrator on 16-5-24.
 */
