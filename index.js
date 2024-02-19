document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('emailForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var emailValue = document.getElementById('exampleInputEmail1').value;
        console.log('Email Value:', emailValue);
        let greet = document.getElementById('greet');
        greet.innerHTML = `Hello ${emailValue}. Quote of the day: Age is something that doesn't matter, unless you are a cheese.`;
    });
});
