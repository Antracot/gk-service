$(function() {

    $(".info").validate({

        rules: {
            tele: {
                required: true,
                digits: true
            },
            mail: {
                required: true,
                email: true            
            }
        },
        messages: {
             tele: {
                required: "Поле должно быть заполнено",
                digits: "это не число"
            },
            mail: {
                required: "Поле должно быть заполнено",
                email: "это не адресс электронной почты"            
            }
        },
        focusCleanup: true,
        focusInvalid: false,
        invalidHandler: function(event, validator) {
            $(".js-form-message").text("Исправьте пожалуйста все ошибки.");
        },
        onkeyup: function(element) {
            $(".js-form-message").text("");
        },
        errorPlacement: function(error, element) {
            return true;
        },
        errorClass: "form-input_error",
        validClass: "form-input_success"
    });

});
