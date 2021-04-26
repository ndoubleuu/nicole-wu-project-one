// Images in landscapeImage section and gallerySection should appear when scrolled to a certain point

const landscapeImage = document.querySelector('.landscapeImage .wrapper');
const galleryImageOne = document.querySelector('#imageOne');
const galleryImageTwo = document.querySelector('#imageTwo');
const galleryImageThree = document.querySelector('#imageThree');

window.addEventListener('scroll', function() {
    //Store scroll "distance" in a variable to be used in conditional statements
    let scrolling = window.scrollY;
    //From 2000 scroll onward, show landscape image
    if (scrolling >= 2000) {
        landscapeImage.classList.add('showElement');
    } else {
        landscapeImage.classList.remove('showElement');
    }
    //From 2450 scroll onward, show gallery image 1
    if (scrolling >= 2400) {
        galleryImageOne.classList.add('showElement');
    } else {
        galleryImageOne.classList.remove('showElement');
    }
    //From 2650 scroll onward, show gallery image 2
    if (scrolling >= 2600) {
        galleryImageTwo.classList.add('showElement');
    } else {
        galleryImageTwo.classList.remove('showElement');
    }
    //From 2850 scroll onward, show gallery image 3
    if (scrolling >= 2800) {
        galleryImageThree.classList.add('showElement');
    } else {
        galleryImageThree.classList.remove('showElement');
    }
})