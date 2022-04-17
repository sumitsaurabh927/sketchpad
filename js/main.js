// testing JS wiring
console.log('wired');
let container = document.querySelector('.container');

const gridGenerator = () => {

        for(let i=0; i<17; i++){
                let myDiv = document.createElement('div');
                myDiv.setAttribute('class', 'gridDiv')
                container.appendChild(myDiv);
        }
        
}
gridGenerator();

