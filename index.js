//Js Array of valid for registered user (usernames and passwords) to login
const validCredentials = [
    { username: "Nasir", password: "Nasir123" },
    { username: "Izam", password: "Izam123" },
    { username: "Zarul", password: "Zarul123" },
    { username: "Zuhaimi", password: "Zuhaimi123" },
    { username: "Malik", password: "Malik123" },
    { username: "Roslan", password: "Roslan123" },
    { username: "Guest", password: "G123" }
];

// Function responsible on login page
function login() {
    // Get username and password from form inputs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Check if entered credentials match any in the array
    const isValid = validCredentials.some(cred => cred.username === username && cred.password === password);
    
    
    if (isValid) {
        window.location.href = "homepage.html"; 
    } else {
        document.getElementById("error").innerText = "Invalid username or password.";
    }
}
