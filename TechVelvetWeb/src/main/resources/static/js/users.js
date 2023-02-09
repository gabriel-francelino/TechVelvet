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

btnNewUser.addEventListener("click", modalNewUser);
btnCloseModal.addEventListener("click", closeModal);

loadUsers(0, 5);

// --------------------------------------------------------------------------
