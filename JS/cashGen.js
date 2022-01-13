const powerNums = document.querySelector('#powerContainer'); //Selecting DOM to manipulate
const oneText = document.querySelector('.oneText'); //Selecting DOM to manipulate
const twoText = document.querySelector('.twoText'); 

let amtToGen; //keeps track of amount of sets requested
let clicked = false; //functionality to lock buttons

function generate(num)
{
    if(!clicked) //only can click once
    {
        let content;
        amtToGen = num;
        clicked = true;

        for(let i = 0; i < amtToGen; i++)
        {
            let name = i.toString();
            content = document.createElement('div'); //create a div...
            content.classList.add('numbers' + i); //with a class 'numbers'
            powerNums.appendChild(content); //add as child node

            oneText.innerText = 'Your lucky numbers are:';
            twoText.innerText = "Good Luck!"

            for(let j = 0; j < 5; j++)
            {
                display(content);
            }
        displayPower(content);
        }
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
    twoText.innerText = '';
}

async function display(content)
{
    const whiteBalls = 60; //max number you can choose

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
    const powerBall = 4; //max number you can choose

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
    const api_url = 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&size=6';

    const response = await fetch(api_url);
    const numResponse = await response.json();
    const numGenerated = numResponse.data[0];
    return numGenerated;
}