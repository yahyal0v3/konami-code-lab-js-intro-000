const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
}

document.body.addEventListener('keydown', function(e) {
  let index = 0
  if (e.key === codes[index]) {      
    index++
    console.log(index)
    console.log(e.key)
    if (index === codes.length) {
      alert("Hurray!")
      index = 0
    }
  } else {
    index = 0
  }
})