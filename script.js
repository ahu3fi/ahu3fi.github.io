document.addEventListener('DOMContentLoaded', () => {
    const textArray = [
        "امیرحسین یوسفی هستم",
        "برنامه نویس پایتون هستم",
        "توسعه دهنده بازی با یونیتی هستم",
        "تدوینگر ویدئو هستم"
    ];
    
    let index = 0;
    let charIndex = 0;
    const typingSpeed = 100; // ms
    const erasingSpeed = 50; // ms
    const pauseDuration = 1500; // ms

    function typeText() {
        const textElement = document.getElementById('typing-text');
        const currentText = textArray[index];
        if (charIndex < currentText.length) {
            textElement.textContent = "من " + currentText.slice(0, charIndex + 1);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(eraseText, pauseDuration);
        }
    }

    function eraseText() {
        const textElement = document.getElementById('typing-text');
        if (charIndex > 0) {
            textElement.textContent = "من " + textElement.textContent.slice(3, -1);
            charIndex--;
            setTimeout(eraseText, erasingSpeed);
        } else {
            index = (index + 1) % textArray.length;
            setTimeout(typeText, typingSpeed);
        }
    }

    document.body.classList.add('fade-in');
    typeText();
});
