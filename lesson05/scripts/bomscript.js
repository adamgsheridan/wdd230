const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        input.focus();
        input.value = '';
    }
    else {
        window.alert("Invalid Empty Entry!! Try Again!!");
    }
});

// Changes text to blue or back to black.
document.getElementById('easteregg').onclick = easteregg;

function easteregg() {
    if (document.body.style.color != 'blue') {
        document.body.style.color = 'blue';
    }
    else {
        document.body.style.color = 'black';
    }
}