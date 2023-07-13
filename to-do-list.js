const form = document.querySelector('input');
const ulContainer = document.querySelector('ulContainer');

form.addEventListener('submit', event => {
    event.preventDefault();

    const inputValue = event.target.querySelector('input').value.trim();

    if (inputValue.length) {
        ulContainer.innerHTML +=
            `<li class="li">
            <span class="linha-li">${inputValue}</span>
            <i class="bx bxs-trash lixeira"></i>
        </li>`;

        form.reset();
    }
});

ulContainer.addEventListener('click', event => {
    const clickElement = event.target;
    if (clickElement.classList.contains('lixeira')) {
        clickElement.parentElement.remove();
    }
});
