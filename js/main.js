// testing JS wiring
// console.log('wired');

const gridGenerator = () => {
        for (let j = 0; j < 17; j++) {
                let parent = document.querySelector('.gridContainer');
                let newDiv = document.createElement('div');
                newDiv.setAttribute('class', 'container');
                parent.appendChild(newDiv);

                let containerAll = document.querySelectorAll('.container');
                // console.log(containerAll);
                let container = containerAll[j];
                // console.log(container);
                for (let i = 0; i < 17; i++) {


                        let myDiv = document.createElement('div');
                        myDiv.setAttribute('class', 'gridDiv')
                        container.appendChild(myDiv);
                }
        }


}
gridGenerator();

