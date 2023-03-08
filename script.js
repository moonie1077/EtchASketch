const container = document.querySelector("#container");
const button = document.querySelector("#button");

function getResolution() {
  let pixelDensity = prompt("How many?");
  if (pixelDensity<100) {
      document.getElementById("container").innerHTML = '';
      setResolution(pixelDensity);
      } else {alert("Please select a smaller value")}
}

function setResolution(input) {
  for (let i= 0; i<input; i++) {
    const row = document.createElement("div");
    row.style.height = 960 / input + "px";
    row.classList.add('row');
    container.appendChild(row)

    for (let j = 0; j<input; j++)
        {
        const pixel = document.createElement("div");
        pixel.style.width = 960 / input + "px";
        pixel.classList.add('pixel');
        row.appendChild(pixel);
        }
    }
  const pixels = document.querySelectorAll(".pixel")
  pixels.forEach((boxItem) => {
     boxItem.addEventListener("mouseover",
     function() {boxItem.classList.add('pixelColored')});
  });

  document.addEventListener("keydown",(event) => {
  if (event.shiftkey = true)
      {pixels.forEach((boxItem) => {
      {boxItem.classList.remove('pixelColored')}});};
  });
 }


button.addEventListener("click", getResolution);
setResolution(16);