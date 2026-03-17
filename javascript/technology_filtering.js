const technologySets = {
    languages: new Set(['javascript-technology-card', 'python-technology-card', 'golang-technology-card', 'dart-technology-card', 'coldfusion-technology-card', 'html-technology-card', 'css-technology-card']),
    frameworks: new Set(['bootstrap-technology-card', 'flutter-technology-card']),
    databases: new Set(['microsoft-technology-card', 'mysql-technology-card', 'postgresql-technology-card']),
    devTools: new Set(['postman-technology-card', 'linux-technology-card', 'windows-technology-card', 'vs-technology-card', 'git-technology-card', 'github-technology-card']),
}

document.addEventListener('DOMContentLoaded', () => {
    const technologies = document.getElementById('technologies').children;
    const filterButtons = document.getElementById('technologies-filter-buttons').children;

    for (let button of filterButtons) {
        button.addEventListener('click', button => {
            for (let technology of technologies) {
                const buttonVal = button.target.value;
                if (buttonVal === 'all' || technologySets[buttonVal].has(technology.id)) {
                    technology.hidden = false;
                } else {
                    technology.hidden = true;
                }
            }
        });
    }
})