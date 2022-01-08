const powerNums = document.querySelector('#powerContainer');
const oneText = document.querySelector('.oneText');
const whiteBalls = 69; //max number you can choose
const powerBall = 26; //max number you can choose
const api_url = 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&size=6';

let amtToGen;
let content;
let clicked = false;

function generate(num)
{
    if(!clicked)
    {
        amtToGen = num;
        clicked = true;

        for(let i = 0; i < amtToGen; i++)
        {
            let name = i.toString();
            content = document.createElement('div'); //create a div...
            content.classList.add('numbers' + i); //with a class 'numbers'
            powerNums.appendChild(content); //add as child node

            for(let j = 0; j < 5; j++)
            {
                display(content);
            }
        displayPower(content);
        }
        oneText.innerText = 'Your lucky numbers are:';
    }
}

function resetText()
{
    clicked = false;
    for(let i = 0; i < amtToGen; i++)
    {
        powerNums.removeChild(powerNums.firstElementChild);
    }
    oneText.innerText = 'Click a button to generate';
}

async function display(content)
{
    let name = document.createElement('p');
    content.appendChild(name);
    let temp = await getNum();
    if((temp > whiteBalls) || temp == 0)
    {
        while((temp > whiteBalls) || temp == 0)
        {
            temp = await getNum();
        }
    }
    name.innerText = temp;
}

async function displayPower(content)
{
    let name = document.createElement('p1');
    content.appendChild(name);
    let temp = await getNum();
    if((temp > powerBall) || temp == 0)
    {
        while((temp > powerBall) || temp == 0)
        {
            temp = await getNum();
        }
    }
    name.innerText = temp;
}

async function getNum() //fetch 
{
    const response = await fetch(api_url);
    const numResponse = await response.json();
    const numGenerated = numResponse.data[0];
    return numGenerated;
}