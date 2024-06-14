// let coffee = document.querySelector('.img')
// let count = document.querySelector('.counter')
// let i = 0



// let clickMug = () => {
//     let i = 0
//     count.innerHTML = ++i


// }

// setTimeout(() => {
//     coffee.style.transform = 'scale(1)';
// }, 300);

document.addEventListener('DOMContentLoaded', (event) => {
    let coffee = document.querySelector('.img')
    let count = document.querySelector('.counter')
    let i = 0






    coffee.addEventListener('mousedown', () => {


        coffee.style.transform = 'scale(1.2)';
    });

    coffee.addEventListener('mouseup', () => {
        coffee.style.transform = 'scale(1)';
        count.innerHTML = ++i
    });

    coffee.addEventListener('mouseleave', () => {
        coffee.style.transform = 'scale(1)';
    });
})