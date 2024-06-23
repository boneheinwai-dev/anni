document.addEventListener("DOMContentLoaded", function () {
    const message = document.querySelector('.message');
    message.style.opacity = 0;

    setTimeout(() => {
        message.style.opacity = 1;
    }, 1000);

    // Play the anniversary song when the page loads
    const audio = document.getElementById('anniversarySong');
    audio.play();
});
