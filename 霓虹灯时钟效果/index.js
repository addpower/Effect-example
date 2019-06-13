(function (w, d) {

    var timerCache = '',//时间缓存
         timerNum = d.querySelectorAll('.timer-num');

    setInterval(timerUpdata,200);


    function timerUpdata(){
        var timerArr = timerHandler(new Date());
        // console.log(timerArr);
        
        // 时间不变，立即返回
        if(timerArr == null){
            return ;
        }

        // 时间更新
        timerNum.forEach(function (ele,index) {
            ele.innerHTML = timerArr ? timerArr[index] : '-';
        })
    }


    /**
     * 时间数据处理
     * @param {*} dateObj 形参时间对象
     * @returns {Array} 返回时间数组
     */
    function timerHandler(dateObj){
        var hour = ('0' + dateObj.getHours()).slice(-2);
        var min = ('0' + dateObj.getMinutes()).slice(-2);
        var sec = ('0' + dateObj.getSeconds()).slice(-2);
        var timerStr = hour + min + sec;

        if(timerStr == timerCache){
            return null ;
        }
        timerCache = timerStr;


        return timerStr.split('');


    }
})(window, document)