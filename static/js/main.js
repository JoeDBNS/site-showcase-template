

// OnLoad Run
window.addEventListener('load', function() {
    InitNavigationMenu();
    SetupFormProgressMarkers();
});


function InitNavigationMenu() {
    let nav_toggler = document.querySelector('.navbar-toggler');
    let nav_popup = document.querySelector('.navbar-popup');

    nav_toggler.addEventListener('click', function() {
        if (nav_popup.classList.contains('navbar-popup-show')) {
            nav_toggler.classList.remove('navbar-toggler-expand');
            nav_popup.classList.remove('navbar-popup-show');
        }
        else {
            nav_toggler.classList.add('navbar-toggler-expand');
            nav_popup.classList.add('navbar-popup-show');
        }
    });

    // close menu popup on mousedown outside of menu popup
    document.addEventListener('mousedown', function(event) {
        if (nav_popup.classList.contains('navbar-popup-show')) {
            contains_login_popup = false;
            node = event.target;

            // check event.target parents for menu popup and menu toggler
            while (node !== null) {
                if (node === nav_popup || node === nav_toggler) {
                    contains_login_popup = true;
                }
                node = node.parentElement;
            }

            // if outside of menu popup, close menu popup and flip chevron
            if (!contains_login_popup) {
                nav_toggler.classList.remove('navbar-toggler-expand');
                nav_popup.classList.remove('navbar-popup-show');
            }
        }
    });
}



function SetupFormProgressMarkers() {
    Array.from(document.querySelectorAll('.progress-module .step-text')).forEach(function(element) {
        element.addEventListener('click', function(event) {
            if (element.parentElement.classList.length === 1) {
                element.parentElement.classList.add('step-pending')
            }
            else {
                if (element.parentElement.classList.contains('step-pending')) {
                    element.parentElement.classList.remove('step-pending')
                    element.parentElement.classList.add('step-complete')
                }
                else if (element.parentElement.classList.contains('step-complete')) {
                    element.parentElement.classList.remove('step-complete')
                    element.parentElement.classList.add('step-fail')
                }
                else if (element.parentElement.classList.contains('step-fail')) {
                    element.parentElement.classList.remove('step-fail')
                }
            }
        });
    });
}


