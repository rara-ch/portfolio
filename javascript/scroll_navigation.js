document.addEventListener('DOMContentLoaded', () => {
    const navigationButtons = document.getElementById('main-navigation-buttons').children;
    const sections = document.getElementsByClassName('section');

    for (let button of navigationButtons) {

        button.addEventListener('click', (button) => {
            const buttonVal = button.target.value;
            let scrollToTop;
            for (let section of sections) {
                if (section.id === buttonVal) {
                    scrollToTop = section.getBoundingClientRect().top;
                }
            }
            window.scrollTo({ top: scrollToTop, behavior: 'smooth' });
        });
    }
});