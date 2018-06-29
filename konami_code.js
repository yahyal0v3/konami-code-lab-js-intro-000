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

let index = 0
document.body.addEventListener('keydown', function(e) {
  if (e.key === codes[index]) {
    index++
    console.log(e.key)
    if (index === codes.length) {
      alert("Hurray!")
      index = 0
    }
  } else {
    index = 0
  }
})
