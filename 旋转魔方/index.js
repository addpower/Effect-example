(function () {
    var oInput = document.getElementsByTagName('input');
    var oCube = document.getElementsByClassName('cube')[0];
    var ClassList = oCube.classList;
    
    var NowClass = ClassList[1];

    for (var i = 0 ,len = oInput.length; i < len; i++) {
        oInput[i].addEventListener('click',clickFn);
    }

    function clickFn(e){

        var targetClass = e.target.className;
        
        if(targetClass != NowClass) {
            ClassList.replace(NowClass,targetClass);
            NowClass = targetClass;
        }
    }



})()