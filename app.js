/**
 * It takes two arguments, a cssId and a size, and then creates a grid of divs with the cssId class and
 * size number of divs
 * @param [cssId=medium] - This is the id of the grid container. It's used to set the id of the grid
 * container and the id of each grid box.
 * @param [size=256] - the number of grid boxes to create
 */
function generateGrid(cssId = 'medium', size = 48 * 48) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';
    gridContainer.setAttribute('id', cssId);
    for (let i = 0; i < size; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'grid-box')
        div.setAttribute('id', cssId)
        gridContainer.appendChild(div);
    }
};

/**
 * The function changeSize() is called when the user clicks on one of the three buttons. The function
 * then calls the generateGrid() function with the appropriate size
 */
function changeSize() {
    // Number of boxes
    const sizeSmall = 60 * 60;
    const sizeMedium = 48 * 48;
    const sizeBig = 26 * 26

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.id === 'small') {
                generateGrid('small', sizeSmall);
            }
            else if (button.id === 'medium') {
                generateGrid('medium', sizeMedium);
            }
            else if (button.id === 'big') {
                generateGrid('big', sizeBig);
            }
        });
    })
};

function initialize() {
    generateGrid();
    changeSize();
};

initialize();