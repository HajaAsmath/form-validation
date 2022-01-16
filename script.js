(function () {
    let email = document.querySelector('#email');
    let country = document.querySelector('#country');
    let zip = document.querySelector('#zip');
    let password = document.querySelector('#password');
    let confirmPassword = document.querySelector('#confirm-password');
    let form = document.querySelector('form');
    let submit = document.querySelector('#submit');
    let inputs = document.querySelectorAll('.input');

    inputs.forEach( ele => {
        ele.addEventListener('input', validate);
    });

    function validate(ele) {
        ele = ele.target;
        if(!ele.validity.valid) {
            showError(ele);
        } else {
            ele.nextElementSibling.textContent = "";
        }
    }

    function showError(ele) {
        let error;
        switch (ele) {
            case email:
                error = document.querySelector('.email.error');
                error.textContent = "";
                if(email.validity.valueMissing) {
                    error.textContent = "Error: Please fill email";
                } else if (email.validity.typeMismatch) {
                    error.textContent = "Error: Please enter a valid email address: ex: you@email.com";
                }
                break;
            case country:
                // error = document.querySelector('.country .error');
                // if(e)
                break;
            case zip:
                break;
        }
    }

}());