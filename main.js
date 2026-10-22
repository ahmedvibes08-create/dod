// ==============================
// كلمة السر
// ==============================

const PASSWORD = "love";

const lockScreen = document.getElementById("lockScreen");
const introScreen = document.getElementById("introScreen");
const mainPage = document.getElementById("mainPage");

const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const errorMessage = document.getElementById("error");

const startBtn = document.getElementById("startBtn");


// ==============================
// فتح الموقع
// ==============================

function openIntro() {

    if (passwordInput.value.trim() === PASSWORD) {

        lockScreen.classList.add("hidden");

        introScreen.classList.remove("hidden");

        errorMessage.textContent = "";

    } else {

        errorMessage.textContent = "كلمة السر غير صحيحة ❤️";

        passwordInput.value = "";

        passwordInput.focus();
    }
}


unlockBtn.addEventListener("click", openIntro);


passwordInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        openIntro();
    }

});


// ==============================
// الموسيقى
// ==============================

const bgSong = document.getElementById("bgSong");
const musicButton = document.getElementById("musicButton");


startBtn.addEventListener("click", function() {

    introScreen.classList.add("hidden");

    mainPage.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    bgSong.play()
        .then(function() {

            musicButton.textContent = "🔊";

        })
        .catch(function() {

            musicButton.textContent = "🎵";

        });

});


musicButton.addEventListener("click", function() {

    if (bgSong.paused) {

        bgSong.play()
            .then(function() {
                musicButton.textContent = "🔊";
            });

    } else {

        bgSong.pause();

        musicButton.textContent = "🎵";

    }

});


// ==============================
// العداد الحقيقي
// البداية: 28 أكتوبر 2022
// ==============================

const startDate = new Date(2022, 9, 28, 0, 0, 0);


function daysInMonth(year, month) {

    return new Date(year, month + 1, 0).getDate();

}


function addYearsSafe(date, years) {

    const result = new Date(date);

    const originalDay = result.getDate();

    result.setFullYear(result.getFullYear() + years);

    if (result.getDate() !== originalDay) {

        result.setDate(0);

    }

    return result;

}


function addMonthsSafe(date, months) {

    const result = new Date(date);

    const originalDay = result.getDate();

    result.setMonth(result.getMonth() + months);

    if (result.getDate() !== originalDay) {

        result.setDate(0);

    }

    return result;

}


function updateCounter() {

    const now = new Date();

    if (now < startDate) {
        return;
    }


    // السنوات

    let years = now.getFullYear() - startDate.getFullYear();

    let anniversary = addYearsSafe(startDate, years);


    if (anniversary > now) {

        years--;

        anniversary = addYearsSafe(startDate, years);

    }


    // الشهور

    let months =
        (now.getFullYear() - anniversary.getFullYear()) * 12
        +
        (now.getMonth() - anniversary.getMonth());


    let monthDate = addMonthsSafe(anniversary, months);


    if (monthDate > now) {

        months--;

        monthDate = addMonthsSafe(anniversary, months);

    }


    // الوقت المتبقي بعد السنوات والشهور

    const remainingMilliseconds =
        now.getTime() - monthDate.getTime();


    const totalSeconds =
        Math.floor(remainingMilliseconds / 1000);


    const days =
        Math.floor(totalSeconds / 86400);


    const hours =
        Math.floor((totalSeconds % 86400) / 3600);


    const minutes =
        Math.floor((totalSeconds % 3600) / 60);


    const seconds =
        totalSeconds % 60;


    // عرض الأرقام

    document.getElementById("years").textContent = years;

    document.getElementById("months").textContent = months;

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


updateCounter();

setInterval(updateCounter, 1000);


// ==============================
// القلوب والورود المتحركة
// ==============================

const petalsContainer =
    document.getElementById("petals");


function createPetal() {

    const petal =
        document.createElement("span");

    petal.className = "petal";


    const symbols = [
        "♥",
        "♡",
        "🌹",
        "✦",
        "❤",
        "💕",
        "🌸"
    ];


    petal.textContent =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];


    petal.style.left =
        Math.random() * 100 + "%";


    petal.style.fontSize =
        12 + Math.random() * 20 + "px";


    petal.style.animationDuration =
        5 + Math.random() * 6 + "s";


    petalsContainer.appendChild(petal);


    setTimeout(function() {

        petal.remove();

    }, 12000);

}


setInterval(createPetal, 700);


for (let i = 0; i < 12; i++) {

    setTimeout(function() {

        createPetal();

    }, i * 250);

}