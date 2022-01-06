const powerNums = document.querySelector('#powerContainer');
const amtWhite = 5;
const whiteBalls = 70;
const powerBall = 27;

const content = document.createElement('div');
let h1 = document.createElement('h1')
generateNum();

powerNums.appendChild(h1);

function generateNum()
{
    fetchAPI();
}

function fetchAPI()
{
    let JSONrandoNum;
    let randoNum;
    let temp;
    fetch('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&size=6')
        .then(response => response.json())
        .then(data => JSONrandoNum = data)
        .then(() =>  randoNum = JSONrandoNum.data[0])
        .then(() => {
            if(randoNum > 69)
            {
                h1.textContent = 'error'
            }
            else
            {
                h1.textContent = randoNum
            }
         })
}