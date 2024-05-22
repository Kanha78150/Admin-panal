'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.progress-ring__circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        document.querySelector('.progress-text').textContent = `${percent}%`;
    }
    let progress = 0;
    const interval = setInterval(() => {
        if (progress <= 55) {
            setProgress(progress);
            progress++;
        } else {
            clearInterval(interval);
        }
    }, 100);
});


document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.progress-ring__circle2');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        document.querySelector('.progress-text2').textContent = `${percent}%`;
    }

    let progress = 0;
    const interval = setInterval(() => {
        if (progress <= 30) {
            setProgress(progress);
            progress++;
        } else {
            clearInterval(interval);
        }
    }, 100);
});


document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.progress-ring__circle3');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        document.querySelector('.progress-text3').textContent = `${percent}%`;
    }

    let progress = 0;
    const interval = setInterval(() => {
        if (progress <= 80) {
            setProgress(progress);
            progress++;
        } else {
            clearInterval(interval);
        }
    }, 100);
});


document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.progress-ring__circle4');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        document.querySelector('.progress-text4').textContent = `${percent}%`;
    }

    let progress = 0;
    const interval = setInterval(() => {
        if (progress <= 70) {
            setProgress(progress);
            progress++;
        } else {
            clearInterval(interval);
        }
    }, 100);
});
