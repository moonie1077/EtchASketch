const container = document.querySelector("#container");


for (let i= 0; i<16; i++) {
  const row = document.createElement("div");
  row.classList.add('row');
  container.appendChild(row)

  for (let j = 0; j<16; j++)
      {
      const pixel = document.createElement("div");
      pixel.classList.add('pixel');
      row.appendChild(pixel);
      }
  }
//comment
const pixels = document.querySelectorAll(".pixel")
pixels.forEach((boxItem) => {
    boxItem.addEventListener("mouseover",
    function() {boxItem.classList.add('pixelColored')});
});
console.log(pixels);
document.addEventListener("keydown",(event) => {
console.log(event);
if (event.shiftkey = true)
    {pixels.forEach((boxItem) => {
    {boxItem.classList.remove('pixelColored')}});}
} );