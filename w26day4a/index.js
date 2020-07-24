let root = "https://jsonplaceholder.typicode.com/posts";

$.ajax (root, {
    dataType: "json",
    method: 'GET',
    success: function(response){
        $.each(response, function(index, elem){
            $("div.row").append(`<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">       
            <div class="box-part text-center">
                <div class="title">
                    <h4>Id : ${elem.id}</h4>
                    <h5>User Id : ${elem.userId}</h5>
                </div>
                <div class="text">
                    <span>${elem.title}</span>
                </div>
            </div>
        </div>`);
        });
        // console.log(response);
    },
    error: function(request,errorType, errorMsg){
        alert("Ajax malfunction: " + errorMsg);
    },
    // // filter for data
    // data: {"userId": 1}
});