$.validator.setDefaults({
  submitHandler: function () {
    let form_data = new FormData($('#signupForm')[0]);
    let http_req = new XMLHttpRequest();
      http_req.onloadstart = () => {
        console.log('started');
        let responsediv = document.createElement( "div" );
        responsediv.id = 'response';
        $("#newDialog").append(responsediv);
        let button = document.createElement('button');
        button.id = 'closeDialog';
        button.innerText = 'Close';
        button.addEventListener('click', closeDialogBox());
        $("#newDialog").append(button);
        $("#newDialog")[0].showModal();
      };
      http_req.open('POST', '/');
      http_req.upload.onprogress = function(e) {
        showProgress(e);
      };
      http_req.send(form_data);
      http_req.onloadend = () => {
        console.log(http_req.responseText);
        $('#signupForm')[0].reset();
        $('#response')[0].innerHTML += `<h4>${http_req.responseText}</h4>`;
      }
  }
});

$.validator.addMethod('filesize', function(value, element, param) {
  // param = size (in bytes) 
  // element = element to validate (<input>)
  // value = value of the element (file name)
  return this.optional(element) || (element.files[0].size <= param) 
});

  $(document).ready(function () {
    $("#signupForm").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        username: {
          required: true,
          minlength: 2
        },
        password: {
          required: true,
          minlength: 5
        },
        confirm_password: {
          required: true,
          minlength: 5,
          equalTo: "#password"
        },
        email: {
          required: true,
          email: true
        },
        image: { 
          required: true, 
          extension: "png|jpe?g|gif", 
          filesize: 1048576 * 40
        },
        agree: "required",
        gender: "required"
      },
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        username: {
          required: "Please enter a username",
          minlength: "Your username must consist of at least 2 characters"
        },
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        confirm_password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long",
          equalTo: "Please enter the same password as above"
        },
        image: "File must be JPG, GIF or PNG, less than 40MB",
        email: "Please enter a valid email address",
        agree: "Please accept our policy",
        gender: "Please select a gender"
      },
      errorElement: "em",
      errorPlacement: function (error, element) {
        // Add the `help-block` class to the error element
        error.addClass("help-block");

        if (element.prop("type") === "checkbox") {
          error.insertAfter(element.parent("label"));
        } else if(element.prop("type") === "radio") {
            error.insertAfter(element.parent("label").parent(".radio"));
        } else {
          error.insertAfter(element);
        }
      },
      highlight: function (element, errorClass, validClass) {
        $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
      }
    });
  });

function closeDialogBox() {
  return () => {
    console.log('button clicked');
    $('#response').remove();
    $('#closeDialog').remove();
    $('#newDialog')[0].close();
  }
};

function showProgress(e) {
  console.log(`${e.type}: ${e.loaded} bytes transferred`);
  $('#response')[0].innerHTML += `<p>${e.type}: ${e.loaded} bytes transferred</p>`;
};