const viewTime = () => {
    let timesOfDay = document.querySelector(".welcome");
    let dayOfWeek = document.querySelector(".day");
    let time = document.querySelector(".time");
    let countDown = document.querySelector(".countdown");
    let nowDate = new Date();
    let hours = nowDate.getHours();
    let currentYear = nowDate.getFullYear();
    let lastDayCurrYear = new Date(currentYear, 11, 31);
    let total = Math.round((lastDayCurrYear - nowDate) / (1000 * 60 * 60 * 24));
    let noon = 12;
    const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ];
    if (hours >= 1 && hours <= 12) {
        timesOfDay.textContent = "Доброе утро";
    } else if (hours >= 12 && hours <= 16) {
        timesOfDay.textContent = "Добрый день";
    } else if (hours >= 16 && hours <= 21) {
        timesOfDay.textContent = "Добрый вечер";
    } else if (hours >= 21 && hours <= 24) {
        timesOfDay.textContent = "Доброй ночи";
    }
    time.textContent = `Текущее время: ${nowDate.toLocaleTimeString()} ${
        hours < noon ? "PM" : "AM"
    }`;
    dayOfWeek.textContent = `Сегодня: ${days[nowDate.getDay()]}`;
    countDown.textContent = `До нового года осталось ${total} дн`;
};
setInterval(viewTime, 1000);
