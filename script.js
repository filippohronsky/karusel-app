const totalImages = 10; // zmeň podľa počtu fotiek
const interval = 3000;  // 5 sekúnd
let current = 1;

function updateImage() {
  const img = document.getElementById('photo');
  img.src = `images/${current}.jpg`;
  current = current % totalImages + 1;
}

window.onload = () => {
  updateImage();
  setInterval(updateImage, interval);
};