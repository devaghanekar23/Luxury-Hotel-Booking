function searchRoom() {
    let input = document.getElementById("search").value.toLowerCase();
    let rooms = document.querySelectorAll(".room-card");

    rooms.forEach(room => {
        let name = room.querySelector("h3").innerText.toLowerCase();

        if (name.includes(input)) {
            room.style.display = "block";
        } else {
            room.style.display = "none";
        }
    });
}

function checkAvailability() {
    document.getElementById("status").innerHTML =
        "✅ Room Available";
}

function bookRoom() {
    alert("🎉 Booking Confirmed!");
    return false;
}

function addReview() {
    alert("⭐ Review Added Successfully!");
}

