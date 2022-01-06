const powerNums = document.querySelector('#powerContainer');
const whiteBalls = 69; //max number you can choose
const powerBall = 26; //max number you can choose
const api_url = 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&size=6';

const content = document.createElement('div'); //create a div with a class 'numbers'
content.classList.add('numbers');
powerNums.appendChild(content); //add as child node

generate();

function generate()
{
    numStorage = ['one', 'two', 'three', 'four', 'five']
    for(let i = 0; i < numStorage.length; i++)
    {
        display(numStorage[i])
    }
    displayPower('six');
}

async function display(name1)
{
    let name = name1;
    name = document.createElement('h1');
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

async function displayPower(name1)
{
    let name = name1;
    name = document.createElement('h1');
    content.appendChild(name);
    let temp = await getNum();
    if((temp > powerBall) || temp == 0)
    {
        while((temp > powerBall) || temp == 0)
        {
            temp = await getNum();
        }
    }
    name.innerText = 'power: ' + temp;
}

async function getNum() //fetch 
{
    const response = await fetch(api_url);
    const numResponse = await response.json();
    const numGenerated = numResponse.data[0];
    return numGenerated;
}