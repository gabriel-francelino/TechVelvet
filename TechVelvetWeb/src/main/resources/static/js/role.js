// -------------------------------------------------------------------------- 

// TechVelvet Store - Role JS

// -------------------------------------------------------------------------- 

// API

const getRoles = async () => {
    const response = await fetch("/api/roles");
    const users = await response.json();
    return users; 
}
const createRole = async (role) => {
    const response = await fetch("/api/roles", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(role)
    });
    if (response.ok) {
        console.log("Role created successfully");
    } else {
        console.error("Failed to create role");
    }
    return await response.json();
}

// -------------------------------------------------------------------------- 