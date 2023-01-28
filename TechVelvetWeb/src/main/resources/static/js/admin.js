// -------------------------------------------------------------------------- 

// TechVelvet Store - Admin Page JS

// -------------------------------------------------------------------------- 

// HTML Elements

const btnMobile = document.querySelector('#btnMobile');

// -------------------------------------------------------------------------- 

//  Mobile Menu

let btnMobileIconX = false;
const toggleMobileMenu = () => {
    document.querySelector('.navBar').classList.toggle('mobile');
    btnMobileIconX = !btnMobileIconX;
    btnMobileIconX ? btnMobile.innerHTML = "<i class='bx bx-x'></i>" : btnMobile.innerHTML = "<i class='bx bx-menu'></i>";
}
// const closeMobileMenu = () => {
//     document.querySelector('header .container nav').classList.remove('mobile');
//     btnMobileIconX = false;
//     btnMobile.innerHTML = "<i class='bx bx-menu'></i>";
// }

// --------------------------------------------------------------------------

// Events

btnMobile.addEventListener('click', toggleMobileMenu);

// --------------------------------------------------------------------------
