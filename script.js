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
        ele.addEventListener('focusout', validate);
    });

    function validate(ele) {
        ele = ele.target;
        if(!ele.validity.valid || ele === confirmPassword) {
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
                if(email.validity.valueMissing) {
                    error.textContent = "Error: Please fill email";
                } else if (email.validity.typeMismatch) {
                    error.textContent = "Error: Please enter a valid email address: ex: you@email.com";
                }
                break;
            case country:
                error = document.querySelector('.country.error');
                if(country.validity.valueMissing) {
                    error.textContent = "Error: Please fill country";
                }
                break;
            case zip:
                error = document.querySelector('.zip.error');
                if(zip.validity.valueMissing) {
                    error.textContent = "Error: Please fill zip code";
                } else if(zip.validity.rangeOverflow) {
                    error.textContent = "Error: Max length should be 5"
                }
                break;
            case password:
                error = document.querySelector('.password.error');
                if(password.validity.valueMissing) {
                    error.textContent = "Error: Please fill password";
                } else if(password.validity.rangeUnderflow){
                    error.textContent = "Error: Should be atleast 8 character long";
                } else if(password.validity.patternMismatch) {
                    error.textContent = "Password should match the pattern: 3 lowercase, 2 uppercase, 1 special character(!@#$&*), 2 numerals(1-9)";
                }
                break;
            case confirmPassword:
                error = document.querySelector('.confirm-password.error');
                if(confirmPassword.value !== password.value) {
                    error.textContent = "Error: Passwords do not match"
                } else {
                    error.textContent = "";
                }
                break;
        }
    }

}());