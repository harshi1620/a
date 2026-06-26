async function getUser() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        console.log(data)

        const user = data.results[0];

        document.getElementById("avatar").src = user.picture.large;
        document.getElementById("name").textContent = `${user.name.first} ${user.name.last}`;
        document.getElementById("email").textContent = user.email;
        document.getElementById("country").textContent = user.location.country;

    } catch (error) {
        alert("Failed to fetch user data.");
        console.error(error);
    }
}

// Load a user when page opens
getUser();