document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            // Toggle active class on click
            this.classList.toggle('active');
        });
    });
});
