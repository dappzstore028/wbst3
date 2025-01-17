const particlesContainer = document.getElementById("particles");

function createParticle() {
    const particle = document.createElement("span");
    particle.className = "particles";
    const size = Math.random() * 10 + 5; // Ukuran partikel acak
    const posX = Math.random() * window.innerWidth; // Posisi horizontal acak

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}px`;

    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 5000); // Hapus partikel setelah 5 detik
}

setInterval(createParticle, 100); // Buat partikel setiap 100ms
