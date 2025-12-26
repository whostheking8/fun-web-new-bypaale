document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const imageBox = document.getElementById("imageBox");
  const audio = document.getElementById("audio");

  startBtn.addEventListener("click", () => {
    // sembunyikan tombol
    startBtn.style.display = "none";

    // tampilkan gambar
    imageBox.style.display = "block";

    // set audio
    audio.currentTime = 0;
    audio.volume = 0.8;
    audio.loop = true;

    audio.play().catch(err => {
      console.log("Audio gagal diputar:", err);
    });
  });
});