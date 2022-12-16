var pwd = 'welcome';

$(document).ready(function () {
    AOS.init({});
});

$('a.smooth-scroll').click(function (event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function () {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex', '-1');
                    $target.focus();
                };
            });
        }
    }
});

function passwordCheck() {
    // var data = localStorage.getItem('data');
    // if (data) {
    //     data = JSON.parse(data);
    //     var pwdDate = new Date(data.date);
    //     if (data.pwd === pwd && (new Date() - pwdDate) / (1000 * 60 * 60 * 24) < 1) {
    //         loadHTML('home');
    //     } else {
    //         loadHTML('login');
    //     }
    // } else {
    //     loadHTML('login');
    // }
    loadHTML('home');
}
window.onload = passwordCheck;

$("#password").keyup(function (event) {
    if (event.keyCode === 13) {
        validatePWD();
    }
});

function validatePWD() {
    var password = document.getElementById('password').value;
    if (!password) {
        alert('Please Enter Password');
    } else if (password !== pwd) {
        alert('Invalid Password');
    } else {
        loadHTML('home');
        localStorage.setItem('data', JSON.stringify({ 'pwd': pwd, date: new Date() }));
    }
}

function loadHTML(param) {
    if (param === 'home') {
        var elements = document.getElementsByClassName('home');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block';
        }
        elements = document.getElementsByClassName('login');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
    } else {
        var elements = document.getElementsByClassName('home');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
        elements = document.getElementsByClassName('login');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block';
        }
    }
}

var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("awardModal");

function viewAward(fileName) {
    var modalImg = document.getElementById("awardImage");
    modal.style.display = "block";
    modalImg.src = 'images/' + fileName;
}
span.onclick = function () {
    modal.style.display = "none";
}

function closeNav() {
    document.getElementById('close_button_id').click();
}