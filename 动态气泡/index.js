(function(w,d){
    var bubbles = d.querySelector('.bubbles');
    var num = bubbles.getAttribute('num');
    var duration = bubbles.getAttribute('duration');
    var bubbleWidth = bubbles.clientWidth;

    setInterval(bubbleUp,duration*1000);

    bubbleUp();
    function bubbleUp(){
        
        bubbles.innerHTML = "";
        for (let i = 0; i < num; i++) {
            var bubbleDiv = d.createElement('div');
            bubbleDiv.classList.add('bubble');
            bubbleDiv.style.cssText = `
                transform:translate(${bubbleWidth * Math.random()}px,0) scale(${5 * Math.random()});
                animation : up ${duration * Math.random() + 1}s ease-in-out;
            `
            bubbles.appendChild(bubbleDiv);
        }
    }
})(window,document)