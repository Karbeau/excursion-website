document.querySelector('button').addEventListener('click', getImage)

function generateRandomNumber() {
  return Math.floor(Math.random()* 999);
}

let image = document.querySelector('#randImg')

function getImage(){
  let output = generateRandomNumber();
  let imgUrl = 'https://picsum.photos/id/'+ output + '/' + 400;
  image.src = imgUrl
}

getImage()