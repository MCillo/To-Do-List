// To-Do list App 
// Vanilla Javascript was provided by "schoolhouse"
function newItem() {


    // // Vanilla Javascript for step 1. Adding a New Item
    // let li = document.createElement('li');
    // let inputValue = document.getElementById('input').value;
    // let text = document.createTextNode(inputValue);
    // li.appendChild(text);

    // if (inputValue === '') {
    //     alert('You must write something!');
    // } else {
    //     let list = document.querySelector('#list');
    //     list.appendChild(li);
    // }


    // JQuery for Step 1.
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!')
    } else {
        $('#list').append(li);
    }


    // // Vanilla Javascript for step 2. Crossing out an item from the list
    // function crossOut() {
    //     li.classList.toggle('strike');
    // }

    // li.addEventListener('dblclick', crossOut);

    // JQuery for Step 2.
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

    // // Vanilla Javascript for step 3a. Adding the delete button "X"
    // let crossOutButton = document.createElement('crossOutButton');
    // crossOutButton.appendChild(document.createTextNode('X'));
    // li.appendChild(crossOutButton);

    // crossOutButton.addEventListener('click', deleteListItem);

    // JQuery for Step 3a.
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    // // Vanilla Javascript for step 3b. Adding Class Delete (display:none) from the css
    // function deleteListItem() {
    //     li.classList.add('delete')
    // }

    // JQuery for Step 3b.
    function deleteListItem() {
        li.addClass('delete')
    }

    // 4. Reordering the items - already in JQuery - no need for change
    $('#list').sortable();
}

