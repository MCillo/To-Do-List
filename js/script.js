// To-Do list App 
// Vanilla Javascript was provided by "schoolhouse"
function newItem() {

    // javascript
    // 1. Adding a New Item
    let li = document.createElement('li');
    let inputValue = document.getElementById('input').ariaValueMax;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        let list = document.querySelector('#list');
        list.appendChild(li);
    }

    // 2. Crossing out an item from the list
    function crossOut() {
        li.classList.toggle('strike');
    }

    li.addEventListener('dblclick', crossOut);

    // 3a. Adding the delete button "X"
    let crossOutButton = document.createElement('crossOutButton');
    crossOutButton.appendChild(document.createTextNode('X'));
    li.appendChild(crossOutButton);

    crossOutButton.addEventListener('click', deleteListItem);

    // 3b. Adding Class Delete (display:none) from the css
    function deleteListItem() {
        li.classList.add('delete')
    }

    // 4. Reordering the items
    $('#list').sortable();
}

