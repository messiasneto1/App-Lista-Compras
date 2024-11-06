const inputButton = document.getElementById('add-button');
const itemsList = document.getElementById('items');

/* <li class="item">
    <input type="checkbox" id="">
    <label for=""></label>
    <img src="assets/delete-icon.svg" alt="">
</li> */

inputButton.addEventListener('click', handleAddItem);
itemsList.addEventListener('click', handleDeleteItem);


function handleAddItem() {
    const input = document.getElementById('add-input');
    const inputValue = input.value.trim();
    if (inputValue.length === 0) {
        return;
    }
    
    const li = document.createElement('li');
    li.classList.add('item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `item${document.querySelectorAll(".item").length + 1}`;

    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = inputValue;

    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'assets/delete-icon.svg';
    deleteIcon.alt = 'Delete icon';

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteIcon);

    document.getElementById('items').appendChild(li);

    input.value = '';
}

function handleDeleteItem(event) {
    const warningBox = document.getElementById('warning-box');
    if (event.target.tagName === 'IMG') {
        const li = event.target.parentElement;
        li.remove();
        warningBox.classList.remove('hidden');
        const closeWarningButton = document.getElementById('close-warning-button');
        closeWarningButton.addEventListener('click', () => {
            warningBox.classList.add('hidden');
        });
    }
}

