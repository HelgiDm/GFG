// Carousel
const crslBtnLeft = document.querySelector('#side-btn-left');
const crslBtnRight = document.querySelector('#side-btn-right')
let crslSpecial = document.querySelector('#crsl-special');
let crslImages = document.querySelector('.images');
let crslControlBtn = document.querySelector('.control-btn');
let crslControlBtnSpecial = document.querySelector('#crsl-control-special');

// Carousel Side Buttons
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
    crslControlBtn.children[Array.from(crslImages.children).indexOf(crslSpecial)].id = 'crsl-control-special';
    crslControlBtnSpecial.id = '';
    crslControlBtnSpecial = document.querySelector('#crsl-control-special');
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
    crslControlBtn.children[Array.from(crslImages.children).indexOf(crslSpecial)].id = 'crsl-control-special';
    crslControlBtnSpecial.id = '';
    crslControlBtnSpecial = document.querySelector('#crsl-control-special');
})

// Carousel Control Buttons
let children = crslControlBtn.children;
for (let child of children) {
    child.addEventListener('click', () => {
        if (!child.id) {
            child.id = 'crsl-control-special';
            crslControlBtnSpecial.id = '';
            crslControlBtnSpecial = document.querySelector('#crsl-control-special');
            crslImages.children[Array.from(children).indexOf(crslControlBtnSpecial)].id = 'crsl-special';
            crslSpecial.id = '';
            crslSpecial = document.querySelector('#crsl-special');
        }
        
    });
}


// Tab Content
let tabTitleActive = document.querySelector('#tab-title-active');
let tabTitles = document.querySelector('.tab-title ul');
let ulTabTitles = tabTitles.children;
for (let title of ulTabTitles) {
    title.addEventListener('click', () => {
        if (!title.id) {
            title.id = 'tab-title-active';
            tabTitleActive.id = '';
            tabTitleActive = document.querySelector('#tab-title-active');
        }
    })
}

