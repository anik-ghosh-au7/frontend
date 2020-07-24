window.onload = () => {
    createContent();
};

function createContent() {
    // method 1
    // document.body.innerHTML = `<div class='image'><img src='https://goo.gl/kjzfbE' alt='First'><button class='remove'>X</button></div></div>`;
    
    // method 2
    let parent_div = document.createElement('div')
    parent_div.className = 'image';

    let image_elem = document.createElement('img');
    image_elem.src = 'https://goo.gl/kjzfbE';
    image_elem.alt = 'First';

    let button_elem = document.createElement('button');
    button_elem.className = 'remove';
    button_elem.innerText = 'X';

    parent_div.appendChild(image_elem);
    parent_div.appendChild(button_elem);
    document.body.appendChild(parent_div);
};