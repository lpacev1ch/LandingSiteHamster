function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

function faq() {
    alert('Как установить игру?\n1. Выберите свою операционную систему и кликните на соответсвующую кнопку\n2. После попадания на гугл диск, установите все элементы\n3. Распакуйте установленный файл\n4. Запустите\nПриятной игры :)');
}

    //page 2

    const carouselllvlItems = document.querySelectorAll('.carousellvl-item');
    let currentIndex = 0;
    
    function showNextItem() {
      carouselllvlItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % carouselllvlItems.length;
      carouselllvlItems[currentIndex].classList.add('active');
    }
    
    setInterval(showNextItem, 5000);