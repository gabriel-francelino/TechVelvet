// -------------------------------------------------------------------------- 

// TechVelvet Store - Users Page JS

// -------------------------------------------------------------------------- 

// HTML Elements

const userList = document.querySelector(".users .list");
const btnNewUser = document.querySelector("#btnModalNewUser");

// -------------------------------------------------------------------------- 

// API

const getUsers = async () => {
    const response = await fetch("/api/users");
    const users = await response.json();
    return users; 
}

const loadUsers = async (ini, max) => {
    userList.innerHTML = "";
    const users = await getUsers();
    for(let i = ini; i < max; i++) {
        userList.innerHTML += `
        <div class="user">
            <div class="display">
                <span>${users[i].firstName} ${users[i].lastName}</span>
            </div>
            <div class="buttons">
                <button><i class='bx bxs-pencil'></i></button>
                <button><i class='bx bxs-trash'></i></button>
            </div>
        </div>
        `;
    }
}

// --------------------------------------------------------------------------

// Pagination

const btnPreviousPage = document.querySelector("#previousPage");
const btnNextPage = document.querySelector("#nextPage");

let ini = 0, max = 5;

const nextPage = async () => {
    const users = await getUsers();
    if(ini+5 <= users.length-1) {
        ini += 5;
        max += 5;
        loadUsers(ini, max);
    }
}
const previousPage = () => {
    if(ini-5 >= 0) {
        ini -= 5;
        max -= 5;
        loadUsers(ini, max);
    }
}

// --------------------------------------------------------------------------

// Modals

const modalContent = document.querySelector('.modalContainer .modalContent');
const btnCloseModal = document.querySelector("#btnCloseModal");

const modalNewUser = () => {
    openModal();
    modalContent.innerHTML = `
        <form>
            <div class="inputField">
                <input type="text" id="firstName" placeholder="First Name" autocomplete="off">
                <label for="firstName">First Name</label>
            </div>
            <div class="inputField">
                <input type="text" id="lastName" placeholder="Last Name" autocomplete="off">
                <label for="lastName">Last Name</label>
            </div>
            <div class="inputField">
                <input type="email" id="email" placeholder="Email" autocomplete="off">
            <label for="email">Email</label>
            </div>
            <div class="inputField">
                <input type="text" id="password" placeholder="Password" autocomplete="off">
                <label for="password">Password</label>
            </div>
        </form>
    `;
}

// --------------------------------------------------------------------------

// Events

window.onload = () => loadUsers(ini, max);

btnNewUser.addEventListener("click", modalNewUser);
btnCloseModal.addEventListener("click", closeModal);

btnNextPage.addEventListener("click", nextPage);
btnPreviousPage.addEventListener("click", previousPage);

// --------------------------------------------------------------------------
