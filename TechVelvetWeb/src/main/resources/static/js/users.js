// -------------------------------------------------------------------------- 

// TechVelvet Store - Users Page JS

// -------------------------------------------------------------------------- 

// HTML Elements

const userList = document.querySelector(".users .list");

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

// Events

loadUsers(0, 5);

// --------------------------------------------------------------------------
