document.body.addEventListener('click', () => {
    const cardImage = document.querySelector('.card-img').src;
    document.body.style.backgroundImage = `url(${cardImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
});
