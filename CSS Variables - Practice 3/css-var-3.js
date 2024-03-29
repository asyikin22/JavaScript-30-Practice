//First Part

const themeToggle = document.getElementById('themeToggle');
const container = document.querySelector('.container');

themeToggle.addEventListener('click', () => {
    container.classList.toggle('dark');
});

//Second Part

const inputs = document.querySelectorAll ('.controls input');

inputs.forEach(input => input.addEventListener('change', handleUpdate));

function handleUpdate () {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

