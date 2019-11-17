$(document).ready(function(){
    
    // config
    var config = (function(){
        return {
            ymSensor: 'XXXXXX'
        }
    })();

    // form validation
    var forms = (function(){
        var validation = $('form').validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                agreement: {
                    required: true
                }
            },
            messages: {
                email: {
                    required: 'Это поле обязательно для заполнения',
                    error: 'Введите'
                },
                agreement: {
                    required: 'Для отправки заявки необходимо согласиться с условиями'
                }
            },
            submitHandler: function() {
                var currentForm = $($(this)[0].currentForm),
                    goal = currentForm.data('goal');

                $.ajax({
                    url: 'https://httpbin.org/post', //tester
                    method: 'POST',
                    data: currentForm.serialize(),
                    beforeSend: function(){},
                    error: function(){},
                    success: function(){

                        // yandexMetrica ReachGoal
                        ym(config.ymSensor, 'reachGoal', goal, {});
                    }
                })
            }
        });

        return {
            validation: validation
        }
    })(jQuery)

    $(document).on('close', function(){
        forms.validation.destroy()
    })
});