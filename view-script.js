document.addEventListener("DOMContentLoaded", function () {
    // Display Alarms
    const alarms = JSON.parse(localStorage.getItem("alarms")) || [];
    const alarmList = document.getElementById("alarmList");
    if (alarms.length === 0) {
        alarmList.innerHTML = "<p class='text-center text-muted'>No alarms set.</p>";
    } else {
        alarms.forEach((alarm) => {
            const div = document.createElement("div");
            div.classList.add("alarm-item");
            div.innerText = `Alarm set for: ${new Date(alarm).toLocaleString()}`;
            alarmList.appendChild(div);
        });
    }

    // Display Reminders
    const reminders = JSON.parse(localStorage.getItem("reminders")) || [];
    const reminderList = document.getElementById("reminderList");
    if (reminders.length === 0) {
        reminderList.innerHTML = "<p class='text-center text-muted'>No reminders set.</p>";
    } else {
        reminders.forEach((reminder) => {
            const div = document.createElement("div");
            div.classList.add("reminder-item");
            div.innerHTML = `
                <h5>${reminder.title}</h5>
                <p>${reminder.details}</p>
                <p><strong>Time:</strong> ${new Date(reminder.time).toLocaleString()}</p>
            `;
            reminderList.appendChild(div);
        });
    }
});
// Clear button functionality
const clearButton = document.getElementById("clearButton");
if (clearButton) {
    clearButton.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete all alarms and reminders?")) {
            localStorage.removeItem("alarms");
            localStorage.removeItem("reminders");

            alarmList.innerHTML = "<p class='text-center text-muted'>No alarms set.</p>";
            reminderList.innerHTML = "<p class='text-center text-muted'>No reminders set.</p>";

            alert("All alarms and reminders have been cleared.");
        }
    });
}

