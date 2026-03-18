document.addEventListener('DOMContentLoaded', () => {
    const navigationButtons = document.getElementById('main-navigation-buttons').children;
    const sections = document.getElementsByClassName('section');

    // Scroll Navigation Bar
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

    // Scroll to Top Button
    const scrollToTopButton = document.getElementById('scroll-to-top-button');
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })

    document.addEventListener('scroll', () => {
        if (window.scrollY >= (document.documentElement.scrollHeight / 2)) {
            scrollToTopButton.classList.add('scroll-to-top-button-animation');
        } else {
            scrollToTopButton.classList.remove('scroll-to-top-button-animation');
        }
    });
});