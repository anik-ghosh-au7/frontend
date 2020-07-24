window.onload = () => {
    createChild(5);
};

function createChild(num) {
    let parent = document.getElementsByClassName('parent')[0];
    for (let i = 0; i < num; i++) {
        let child = document.createElement('div');
        child.classList.add('child');
        parent.appendChild(child);
    };
};