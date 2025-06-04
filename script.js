let imageList = [];
let current = 0;
const interval = 5000; // Interval in milliseconds to change the image

function scanImages(callback) {
  let index = 1;
  const newList = [];

  function tryNext() {
    const img = new Image();
    img.onload = () => {
      newList.push(`${index}.png`);
      index++;
      tryNext();
    };
    img.onerror = () => {
      callback(newList);
    };
    img.src = `images/${index}.jpg?nocache=${Date.now()}`; // nocache = vyhneš sa cache
  }

  tryNext();
}

function updateImage() {
  if (imageList.length === 0) return;

  const img = document.getElementById('photo');
  img.src = `images/${imageList[current]}?nocache=${Date.now()}`;
  current = (current + 1) % imageList.length;

  // Na začiatku cyklu urob nové skenovanie
  if (current === 0) {
    scanImages((newList) => {
      imageList = newList;
      console.log("Updated image list:", imageList);
    });
  }
}

window.onload = () => {
  scanImages((newList) => {
    imageList = newList;
    if (imageList.length > 0) {
      updateImage();
      setInterval(updateImage, interval);
    } else {
      console.error("No images found in /images/");
    }
  });
};