// Alarm Form Submission
document.getElementById("alarmForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const alarmTime = document.getElementById("alarmTime").value;
    if (!alarmTime) return;

    let alarms = JSON.parse(localStorage.getItem("alarms")) || [];
    alarms.push(alarmTime);
    localStorage.setItem("alarms", JSON.stringify(alarms));

    alert("Alarm set successfully!");
});

// Reminder Form Submission
document.getElementById("reminderForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("reminderTitle").value;
    const details = document.getElementById("reminderDetails").value;
    const time = document.getElementById("reminderTime").value;

    const reminder = { title, details, time };

    let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
    reminders.push(reminder);
    localStorage.setItem("reminders", JSON.stringify(reminders));

    alert("Reminder set successfully!");
    this.reset();
});

// Alarm Checker
setInterval(() => {
    const alarms = JSON.parse(localStorage.getItem("alarms")) || [];
    const now = new Date().toISOString();
    alarms.forEach((alarm, index) => {
        if (alarm <= now) {
            alert("⏰ Alarm ringing!");
            const audio = new Audio("alarm.mp3");
            audio.play();
            alarms.splice(index, 1); // Remove the alarm after ringing
            localStorage.setItem("alarms", JSON.stringify(alarms));
        }
    });
}, 1000);