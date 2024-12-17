// Canvas-Element abrufen
var c = document.getElementById("c");

if (!c) {
    console.error("Canvas-Element mit der ID 'c' wurde nicht gefunden.");
} else {
    var ctx = c.getContext("2d");

    // Canvas Vollbild
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    // Zeichenkette für den Matrix-Effekt
    var matrix = "黑客帝国abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%+-/~{[|]}";
    matrix = matrix.split("");

    var font_size = 10;
    var columns = c.width / font_size; // Anzahl der Spalten
    var drops = Array(columns).fill(1); // Y-Koordinaten der Tropfen

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#00FF46"; // Grüner Text
        ctx.font = font_size + "px arial";

        for (var i = 0; i < drops.length; i++) {
            var text = matrix[Math.floor(Math.random() * matrix.length)];
            ctx.fillText(text, i * font_size, drops[i] * font_size);

            if (drops[i] * font_size > c.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 50);
}

// Alle Boxen auswählen
const boxes = document.querySelectorAll('.box2, .box3, .box4');

// Hover-Effekt mit JavaScript hinzufügen
boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        const text = box.querySelector('.text');
        text.style.opacity = '1';
        text.style.transform = 'translateY(0)';
    });

    box.addEventListener('mouseleave', () => {
        const text = box.querySelector('.text');
        text.style.opacity = '0';
        text.style.transform = 'translateY(-10px)';
    });
});




