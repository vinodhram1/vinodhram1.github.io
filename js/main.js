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

function closeNav() {
    document.getElementById('close_button_id').click();
}

function viewAward(fileName) {
    var modal = document.getElementById("awardModal");
    var modalImg = document.getElementById("awardImage");
    modal.style.display = "block";
    modalImg.src = 'images/' + fileName;
}

function CVPopup() {
    var modal = document.getElementById("downloadOptions");
    modal.style.display = 'block';
}

function closePopup(elementId) {
    var modal = document.getElementById(elementId);
    modal.style.display = "none";
}

function openLocation() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        window.location.href = "geo:0,0?q=Hyderabad, Telangana, India";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = "maps://maps.google.com/maps?q=Hyderabad, Telangana, India";
    } else {
        window.open("https://www.google.com/maps?q=Hyderabad, Telangana, India", "_blank");
    }
}