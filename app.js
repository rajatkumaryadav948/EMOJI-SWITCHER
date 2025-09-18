
const emojis = ["😀", "😂", "😎", "😍", "🤩", "😴", "🤖", "👻", "🐱", "🐶", "🐼", "🦁", "🍕", "🍔", "🍟", "🌮", "🍩", "⚽", "🏀", "🚗", "✈️", "🎸", "🎧", "💡", "🔥", "🌈", "⭐", "🎉"];

const colors = ["#6dd5fa", "#2980b9", "#ff6f61", "#2ecc71", "#9b59b6", "#f39c12", "#e74c3c", "#1abc9c", "#34495e", "#ff9800"];

function changeEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("emoji").textContent = emojis[randomIndex];
    document.body.style.background = `linear-gradient(to right, ${randomColor}, black)`;
}

setInterval(changeEmoji, 2000);
