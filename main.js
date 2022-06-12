

document.querySelector(".toggle").addEventListener("click", toggle)

function toggle (){
    fetch('https://api.adviceslip.com')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  });
}


