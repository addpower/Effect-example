// bindEvent()
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var num = 4;//验证码内容数量

function init() {
    for (var i = 65; i < 122; i++) {
        if (i > 90 && i < 97) {
            continue;
        }
        arr.push(String.fromCharCode(i));
    }
    // console.log(arr);


    createText(); //创建内容区域
    bindEvent(); //事件绑定
}
var value = '';

function createText() {
    // 取出随机字母---画线---写随机字母
    var len = arr.length;
    var text = '';
    for (var i = 0; i < num; i++) {
        // 取出0 - len 之间的随机数
        var a = arr[Math.floor(Math.random() * len)];
        text += a + ' ';
        // 保存当前验证码内容
        value += a;
    }

    // console.log(text);
    var myCanvas = $('#myCanvas')[0];
    // 画笔
    var ctx = myCanvas.getContext('2d');
    // 先清除
    ctx.clearRect(0, 0, 270, 80);

    // 开始画线
    ctx.beginPath();
    // 粗细
    ctx.lineWidth = 15;
    // 颜色
    ctx.strokeStyle = '#ccc';
    // 起点终点位置   长度
    ctx.moveTo(Math.floor(Math.random() * 50), Math.floor(Math.random() * 80));
    ctx.lineTo(250 + Math.floor(Math.random() * 20), Math.floor(Math.random() * 80));
    // 描边
    ctx.stroke();
    // 结束画线
    ctx.closePath();

    // 写文字
    ctx.beginPath();
    // 设置属性
    ctx.font = '43px Roboto Slab';
    ctx.fillStyle = '#ddd';
    // 填充内容  开始  终点
    ctx.fillText(text, 40, 60);
}

function bindEvent() {
    $('.submit').on('click', function () {
        var text = $('.inp').val().trim()
        // 实现忽略大小写
        // var text = $('.inp').val().trim().toLowerCase();
        // var valueL = value.toLowerCase();

        if (text == '' || text == null || text == undefined) {
            $('p').show().html('请输入内容');
            $('.icon').css({
                display: 'block',
                backgroundImage: 'url("./关闭.png")'
            })
        } else {
            if (value == text) {
                $('.icon').css({
                    display: 'block',
                    backgroundImage: 'url("./正确.png")'
                });
            } else {
                $('p').show().html('请输入正确内容');
                $('.icon').css({
                    display: 'block',
                    backgroundImage: 'url("./关闭.png")'
                })
            }
        }
    })

    $('.refresh').on('click', function () {
        createText();
    })
    
    $('.inp').focus(function(){
        $('.icon').add('p').hide();
    })
}

window.onload = function () {
    init();
}