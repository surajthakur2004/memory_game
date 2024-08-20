const cards = document.querySelectorAll('.box');
const resetBtn = document.querySelector('.btn');
const back = document.querySelectorAll('.back');

let arr =[];
let count = 0
let images =[
  {
    'name' : 'android',
    'img':"icons8-android-os-64.png"
  },
  {
    'name' : 'angular',
    'img':"icons8-angular-48.png"
  },
  {
    'name' : 'bootstrap',
    'img':"icons8-bootstrap-48.png"
  },
  {
    'name' : 'c++',
    'img':"icons8-c-48.png"
  },
  {
    'name' : 'c',
    'img':"icons8-c.png"
  },
  {
    'name' : 'flask',
    'img':"icons8-flask-64.png"
  },
  {
    'name' : 'html',
    'img':"icons8-html-5.svg"
  },
  {
    'name' : 'ios',
    'img':"icons8-ios-64.png"
  },
  {
    'name' : 'java',
    'img':"icons8-java-48.png"
  },
  {
    'name' : 'vuejs',
    'img':"icons8-vue-js-64.png"
  },
  {
    'name' : 'sql',
    'img':"icons8-sql-60.png"
  },
  {
    'name' : 'react',
    'img':"icons8-react-native.svg"
  },
  {
    'name' : 'python',
    'img':"icons8-python-48.png"
  },
  {
    'name' : 'pandas',
    'img':"icons8-pandas-48.png"
  },
  {
    'name' : 'numpy',
    'img':"icons8-numpy-48.png"
  },
  {
    'name' : 'nodejs',
    'img':"icons8-node-js.svg"
  },
  {
    'name' : 'mongodb',
    'img':"icons8-mongo-db-48.png"
  },
  {
    'name' : 'machine',
    'img':"icons8-machine-60.png"
  }
];

images = images.concat(images);

function swap(images){

  for(let i= images.length-1; i>0 ; i-- )
  {
    
    let j = Math.floor(Math.random()*(i+1));
    let temp = images[i];
    images[i] = images[j];
    images[j] = temp;
  }
}

swap(images);

function fillImages(){
for(let i =0 ; i<36 ; i++)
{
  let card = cards[i];
  card.setAttribute('name' ,`${images[i].name}` );
  let img = cards[i].querySelector('.back img');
  
  img.src = `${images[i].img}`;
}
}

fillImages();


async function compare(first , second)
{
  enableCard(first , second);
  if((first.getAttribute('name'))===(second.getAttribute('name')))
  {
    await setTimeout(() => {
      first.classList.add('shrink');
      second.classList.add('shrink');
  }, 500); 
    
  }
  else{
    await setTimeout(() => {
      first.classList.remove('flipped');
      second.classList.remove('flipped');
  }, 1000); 
  }

  arr=[];
  count =0;
}

function disabled(card)
{
  card.style.pointerEvents = 'none';
  card.style.cursor = 'not-allowed';
}
function enableCard(first , second)
{

  first.style.pointerEvents = 'auto';  // Restores pointer events to default
  first.style.cursor = 'pointer'; 
  second.style.pointerEvents = 'auto';  // Restores pointer events to default
  second.style.cursor = 'pointer'; 
}

function flipCard() {
  count++;
  this.classList.add('flipped');
  arr.push(this);
  disabled(this);
  let first = arr[0];
  
  let second = arr[1];
  console.log(arr);

  if(count == 2)
    compare(first , second)
}


cards.forEach((card)=>{
  card.addEventListener('click' , flipCard)
})


function reset(images)
{
  cards.forEach((card)=>{
    card.classList.remove('flipped')
    card.classList.remove('shrink')
  });
  swap(images);
  fillImages();
  arr=[];
  count = 0;
  console.log(arr);
  console.log(count);
}

resetBtn.addEventListener('click', ()=>{
  console.log('reset');
  reset(images);
})

