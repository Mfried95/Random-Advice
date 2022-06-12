

document.querySelector(".toggle").addEventListener("click", toggle)

function toggle (){
    fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.querySelector(".number").innerHTML = `# ${data.slip.id}`
    document.querySelector(".advice").innerHTML = `"${data.slip.advice}"`
  });
}


