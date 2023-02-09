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
const createUser = async (user) => {
    const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(user)
    });
    if (response.ok) {
        console.log("User created successfully");
    } else {
        console.error("Failed to create user");
    }
    return await response.json();
}
const updateUser = async (id, user) => {
    const response = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(user)
    });
    if (response.ok) {
        console.log("User updated successfully");
    } else {
        console.error("Failed to update user");
    }
    return await response.json();
}
const deleteUser = async (id) => {
    const response = await fetch(`/api/users/${id}`, {
        method: "DELETE"
    });
    if (response.ok) {
        console.log("User deleted successfully");
    } else {
        console.error("Failed to delete user");
    }
}

// -------------------------------------------------------------------------- 

// CRUD User

const addNewUser = async () => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = { firstName, lastName, email, password };

    console.log(await createUser(user));
    await loadUsers(ini, max)
    closeModal();
}
const editUser = async (id) => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = { firstName, lastName, email, password };

    console.log(await updateUser(id, user));
    await loadUsers(ini, max);
    closeModal();
}
const removeUser = async (id) => {
    await deleteUser(id);
    await loadUsers(0, 5);
    ini = 0;
    max = 5;
    closeModal();
}

// -------------------------------------------------------------------------- 

// Load Users 

const loadUsers = async (ini, max) => {
    userList.innerHTML = "";
    const users = await getUsers();
    for(let i = ini; i < max; i++) {
        if(!users[i]) return null;
        userList.innerHTML += `
        <div class="user">
            <div class="display">
                <span>${users[i].firstName} ${users[i].lastName}</span>
            </div>
            <div class="buttons">
                <button onclick="modalEditUser(${i})"><i class='bx bxs-pencil'></i></button>
                <button onclick="modalDeleteUser(${i})"><i class='bx bxs-trash'></i></button>
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

let confirmModal;
const modalContent = document.querySelector('.modalContainer .modalContent');
const btnCloseModal = document.querySelector("#btnCloseModal");
const btnConfirmModal = document.querySelector("#btnConfirmModal");

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
    btnConfirmModal.removeEventListener('click', confirmModal);
    btnConfirmModal.removeAttribute("onclick");
    confirmModal = addNewUser;
    btnConfirmModal.addEventListener('click', confirmModal);
}
const modalEditUser = async (index) => {
    const users = await getUsers();
    const user = users[index];
    openModal();
    modalContent.innerHTML = `
        <form>
            <div class="inputField">
                <input type="text" id="firstName" placeholder="First Name" autocomplete="off" value="${user.firstName}">
                <label for="firstName">First Name</label>
            </div>
            <div class="inputField">
                <input type="text" id="lastName" placeholder="Last Name" autocomplete="off" value="${user.lastName}">
                <label for="lastName">Last Name</label>
            </div>
            <div class="inputField">
                <input type="email" id="email" placeholder="Email" autocomplete="off" value="${user.email}">
            <label for="email">Email</label>
            </div>
            <div class="inputField">
                <input type="text" id="password" placeholder="Password" autocomplete="off" value="${user.password}">
                <label for="password">Password</label>
            </div>
        </form>
    `;
    btnConfirmModal.removeEventListener('click', confirmModal);
    btnConfirmModal.removeAttribute("onclick");
    btnConfirmModal.setAttribute("onclick", `editUser(${user.id})`);
}
const modalDeleteUser = async (index) => {
    const users = await getUsers();
    const user = users[index];
    openModal();
    modalContent.innerHTML = `
       <span>Do you really want to delete the user?</span>
    `;
    btnConfirmModal.removeEventListener('click', confirmModal);
    btnConfirmModal.removeAttribute("onclick");
    btnConfirmModal.setAttribute("onclick", `removeUser(${user.id})`);
}

// --------------------------------------------------------------------------

// Events

window.onload = () => loadUsers(ini, max);

btnNewUser.addEventListener("click", modalNewUser);
btnCloseModal.addEventListener("click", closeModal);

btnNextPage.addEventListener("click", nextPage);
btnPreviousPage.addEventListener("click", previousPage);

// --------------------------------------------------------------------------
