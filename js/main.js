// testing JS wiring
// console.log('wired');
let btn = document.querySelector('button');
let k = 17;
const clickHandler = () => {
        console.log('clicked');
        let input = Number(prompt('Enter the number of squares?'));
        if (input > 52) {
                alert('Max possible squares = 64')
        } else {
                k = input;
                destroyer();
                gridGenerator(k)
        }

}

btn.addEventListener('click', clickHandler);

const destroyer = () => {
        let parent = document.querySelectorAll('.container');
        for (let g = 0; g < parent.length; g++) {
                parent[g].remove();
        }
        // parent.removeChild('div')

}

const gridGenerator = (k) => {
        for (let j = 0; j < k; j++) {

                let parent = document.querySelector('.gridContainer');
                let newDiv = document.createElement('div');
                newDiv.setAttribute('class', 'container');
                parent.appendChild(newDiv);

                let containerAll = document.querySelectorAll('.container');
                // console.log(containerAll);
                let container = containerAll[j];
                // console.log(container);
                for (let i = 0; i < k; i++) {


                        let myDiv = document.createElement('div');
                        myDiv.setAttribute('class', 'gridDiv')
                        container.appendChild(myDiv);
                }
        }


}
gridGenerator(k);


