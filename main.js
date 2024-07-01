function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

function faq() {
    alert('Как установить игру?\n1. Выберите свою операционную систему и кликните на соответсвующую кнопку\n2. После попадания на гугл диск, установите все элементы\n3. Распакуйте установленный файл\n4. Запустите\nПриятной игры :)');
}