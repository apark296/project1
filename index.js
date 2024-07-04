document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('loginModal');
    var btn = document.getElementById('loginButton');
    var span = document.getElementsByClassName('close')[0];
    var form = document.getElementById('loginForm');

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    form.onsubmit = function(event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        alert('Username: ' + username + '\nPassword: ' + password);
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('printHello');
    var btn = document.getElementById('helloButton');
    var span = document.getElementsByClassName('close')[1];
    var form = document.getElementById('helloForm');

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    form.onsubmit = function(event) {
        event.preventDefault();
        var firstname = document.getElementById('firstname').value;
        alert('Firstname: ' + firstname);
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function(){
    var modal = document.getElementById('playGame');
    var btn = document.getElementById('gameButton');
    var span = document.getElementsByClassName('close')[2];
    var form = document.getElementById('gameForm');

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if(event.target == modal) {
            modal.style.display = 'none';
        }
    }

    form.onsubmit = function(event) {
        event.preventDefault();
        modal.style.display = 'none';
    }


});
