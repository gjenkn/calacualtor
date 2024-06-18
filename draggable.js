document.addEventListener('DOMContentLoaded', () => {
    const draggableElements = document.querySelectorAll('.draggable');

    draggableElements.forEach(element => {
        element.addEventListener('mousedown', startDrag);
        element.addEventListener('touchstart', startDrag);
    });

    function startDrag(e) {
        e.preventDefault();

        const element = e.target;
        const rect = element.getBoundingClientRect();
        const offsetX = e.clientX ? e.clientX - rect.left : e.touches[0].clientX - rect.left;
        const offsetY = e.clientY ? e.clientY - rect.top : e.touches[0].clientY - rect.top;

        function drag(e) {
            e.preventDefault();
            const clientX = e.clientX || e.touches[0].clientX;
            const clientY = e.clientY || e.touches[0].clientY;

            // Adjust the position of the element based on the initial offset
            element.style.left = `${clientX - offsetX}px`;
            element.style.top = `${clientY - offsetY}px`;
        }

        function endDrag() {
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('mouseup', endDrag);
            document.removeEventListener('touchend', endDrag);
        }

        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag, { passive: false });
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
    }
});