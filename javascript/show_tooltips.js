document.addEventListener('DOMContentLoaded', () => {
    const tooltips = document.getElementsByClassName('tooltip');

    for (const tooltip of tooltips) {
        const parent = tooltip.parentNode;
        parent.addEventListener('mouseenter', () => {
            tooltip.dataset.show = 'true';
        });

        parent.addEventListener('mouseleave', () => {
            tooltip.dataset.show = 'false';
        });
    }
})