window.onload = () => {
    
    let element = document.getElementById('child');
    document.onkeydown = checkKey;

    function checkKey(e) {

        let style = window.getComputedStyle(element);
    
        e = e || window.event;
    
        if (e.keyCode == '38') {
            // up arrow
            console.log('up');
            bottom = style.getPropertyValue('bottom');
            if (parseInt(bottom.split('px')[0]) <= 290) element.style.bottom = parseInt(bottom.split('px')[0]) + 10 + 'px';
        }
        else if (e.keyCode == '40') {
            // down arrow
            console.log('down');
            bottom = style.getPropertyValue('bottom');
            if (parseInt(bottom.split('px')[0]) >= 10)  element.style.bottom = parseInt(bottom.split('px')[0]) - 10 + 'px';
        }
        else if (e.keyCode == '37') {
           // left arrow
           console.log('left');
           left = style.getPropertyValue('left');
           if (parseInt(left.split('px')[0]) >= 10) element.style.left = parseInt(left.split('px')[0]) - 10 + 'px';
        }
        else if (e.keyCode == '39') {
           // right arrow
           console.log('right');
           left = style.getPropertyValue('left');
           if (parseInt(left.split('px')[0]) <= 290) element.style.left = parseInt(left.split('px')[0]) + 10 + 'px';
        }
    
    }
    
}