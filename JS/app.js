const powerNums = document.querySelector('#powerContainer');
const oneText = document.querySelector('.oneText');
const whiteBalls = 69; //max number you can choose
const powerBall = 26; //max number you can choose
const api_url = 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&size=6';

const content = document.createElement('div'); //create a div...
content.classList.add('numbers'); //with a class 'numbers'
powerNums.appendChild(content); //add as child node

function generate()
{
    //resetText();
    /*
    for(let i = 0; i < 5; i++)
    {
        const content = document.createElement('div'); //create a div...
        content.classList.add('set' + i); //with a class 'numbers'
        powerNums.appendChild(content); //add as child node
    }
    */

    numStorage = ['one', 'two', 'three', 'four', 'five']
    for(let i = 0; i < numStorage.length; i++)
    {
        display(numStorage[i])
    }
    displayPower('six');
    oneText.innerText = 'Your lucky numbers are:';
}

function resetText()
{
    document.getElementById("oneText").reset();  
}

async function display(name1)
{
    let name = name1;
    name = document.createElement('p');
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
    name = document.createElement('p1');
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