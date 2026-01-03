document.querySelector('.love-btn').addEventListener('click', () => {
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'flying-star';
        star.innerText = '⭐';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = '100vh';
        star.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        document.body.appendChild(star);

        setTimeout(() => {
            star.style.transition = 'top 2s cubic-bezier(.68,-0.55,.27,1.55), opacity 2s';
            star.style.top = Math.random() * 40 + 'vh';
            star.style.opacity = 0;
        }, 100);

        setTimeout(() => {
            star.remove();
        }, 2200);
    }
});