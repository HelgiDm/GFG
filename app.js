// Carousel
let crslBtnLeft = document.querySelector('#side-btn-left');
let crslBtnRight = document.querySelector('#side-btn-right')
let crslSpecial = document.querySelector('#crsl-special');
let crslImages = document.querySelector('.images');


crslBtnLeft.addEventListener('click', () => {
    if (crslSpecial.previousElementSibling) {
        crslSpecial.previousElementSibling.id = 'crsl-special';
        crslSpecial.id = '';
        crslSpecial = document.querySelector('#crsl-special');
    }
    else {
        crslImages.children[crslImages.children.length - 1].id = 'crsl-special';
        crslSpecial.id = '';
        crslSpecial = document.querySelector('#crsl-special');
    }
});

crslBtnRight.addEventListener('click', () => {
    if (crslSpecial.nextElementSibling) {
        crslSpecial.nextElementSibling.id = 'crsl-special';
        crslSpecial.id = '';
        crslSpecial = document.querySelector('#crsl-special');
    }
    else {
        crslImages.children[0].id = 'crsl-special';
        crslSpecial.id = '';
        crslSpecial = document.querySelector('#crsl-special');
    }
})


