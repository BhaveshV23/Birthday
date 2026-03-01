const pages = document.querySelectorAll("section");
const music = document.getElementById("bgMusic");
let musicStarted = false;

function nextPage(num) {
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById("page" + num).classList.add("active");

    // Trigger Scooter Animation on Page 4
    if (num === 4) {
        document.getElementById("activa").classList.add("drive-active");
    } else {
        document.getElementById("activa").classList.remove("drive-active");
    }

    if (!musicStarted) {
        music.volume = 0.3;
        music.play();
        musicStarted = true;
    }
}

    // UPDATED TYPING EFFECT
const text = `Dear Siddhant,

    We spend so much time laughing and talking about nothing, that I rarely tell you how much I appreciate you.

    From stressful exam nights to celebrating the small wins, you've been the most consistent "constant" in my life's code. 

    You're not just my best friend; you're the brother I was lucky enough to find. I'm proud of the man you're becoming.

    Happy Birthday, Legend. Keep shining. ❤️`;

let i = 0;
function startTyping() {
    if (i < text.length) {
        document.getElementById("letter").textContent += text.charAt(i);
        i++;
        setTimeout(startTyping, 50);
    } else {
        document.getElementById("finalBtn").style.display = "block";
      }
}

// CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
function startConfetti() {
    for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          size: Math.random() * 7 + 3,
          speed: Math.random() * 3 + 2,
          color: `hsl(${Math.random() * 360}, 80%, 60%)`
        });
    }
    requestAnimationFrame(updateConfetti);
}

function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.y += p.speed;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
    });
    requestAnimationFrame(updateConfetti);
}