const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();
xhr.onload = function(){
    let result = JSON.parse(xhr.responseText);
    for (let elem of result) {
        document.getElementById('row').innerHTML += `<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">       
        <div class="box-part text-center">
            <div class="title">
                <h4>Id : ${elem.id}</h4>
                <h5>User Id : ${elem.userId}</h5>
            </div>
            <div class="text">
                <span>${elem.title}</span>
            </div>
        </div>
    </div>`
    }
};
