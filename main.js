document.addEventListener('DOMContentLoaded', () => {
    const colorSelect = document.getElementById('colorSelect');
    colorSelect.addEventListener('change', (event) => {
        document.body.style.backgroundColor = event.target.value;
    });
});
