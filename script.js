const h1 = document.querySelector('h1');
const container = document.querySelector('.container');

h1.addEventListener('mouseover', () => {
    container.style.boxShadow = '20px 20px 0px var(--colour-black)';
});

h1.addEventListener('mouseout', () => {
    container.style.boxShadow = '10px 10px 0px var(--colour-black)';
});