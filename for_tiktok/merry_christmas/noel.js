function createSnowflake() {
    const snowflake = document.createElement('span');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';

    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 5;

    snowflake.style.left = `${startX}px`;
    snowflake.style.animationDuration = `${duration}s`;

    document.body.appendChild(snowflake);

    snowflake.addEventListener('animationiteration', () => {
        document.body.removeChild(snowflake);
    });
}

setInterval(createSnowflake, 500);