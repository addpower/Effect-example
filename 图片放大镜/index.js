window.onload = function () {
    var leftone = document.getElementById('left');
    var rightopn = document.getElementById('right');
    var box = document.getElementById('box');
    var rImg = document.getElementsByTagName('img')[1];

    function getPosition(e) {
        var e = e || window.event;
        // var e = event ? event : windown.event;
        // 计算位置
        var top = e.clientY - leftone.offsetTop - box.offsetHeight / 2;
        var left = e.clientX - leftone.offsetLeft - box.offsetWidth / 2;
        // 边界
        var maxTop = leftone.offsetHeight - box.offsetHeight;
        var maxLeft = leftone.offsetWidth - box.offsetWidth;
        var minTop = 0;
        var minLeft = 0;
        var moveTop, moveLeft;

        if (top < minTop) {
            box.style.top = minTop + 'px';
            moveTop = minTop;
        } else if (top > maxTop) {
            box.style.top = maxTop + 'px';
            moveTop = maxTop;
        } else {
            box.style.top = top + 'px';
            moveTop = top;
        }

        if (left < minLeft) {
            box.style.left = minLeft + 'px';
            moveLeft = minLeft;
        } else if (left > maxLeft) {
            box.style.left = maxLeft + 'px';
            moveLeft = maxLeft;
        } else {
            box.style.left = left + 'px';
            moveLeft = left;
        }

        // 放大图片移动方向与滑块方向相反
        rImg.style.top = -moveTop * 2 + 'px';
        rImg.style.left = -moveLeft * 2 + 'px';
    }

    leftone.onmousemove = function (e) {
        var e = e || window.event;
        box.style.display = 'block';
        getPosition(e);
        
        rightopn.style.display = 'block';
    }

    leftone.onmouseleave = function (e) {
        var e = e || window.event;
        box.style.display = 'none';
        rightopn.style.display = 'none';

    }

}