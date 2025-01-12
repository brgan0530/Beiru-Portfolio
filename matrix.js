function initDotGrid() {
    //start with gray first
    let selectedColor = '#e5e5e5';
    let dots = [];

    // Smiley face pattern
    const smileyPattern = [
        0,0,1,1,1,1,0,0,
        0,1,0,0,0,0,1,0,
        1,0,1,0,0,1,0,1,
        1,0,0,0,0,0,0,1,
        1,0,1,0,0,1,0,1,
        1,0,0,1,1,0,0,1,
        0,1,0,0,0,0,1,0,
        0,0,1,1,1,1,0,0
    ];

    // Set up color palette- changes color when selected 
    // All to select multiple elements 
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            selectedColor = option.dataset.color;
        });
    });

    // Create grid
    const grid = document.querySelector('.dot-grid');
    for (let i = 0; i < 64; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';

        let isColored = false;
        
        dot.addEventListener('click', () => {
            
            console.log("hello")

            if (isColored) {
                dot.style.backgroundColor = '#2a2a2a';//change this 
                isColored = false;
                console.log("false")

            } else {
                dot.style.backgroundColor = selectedColor;
                isColored = true;
                console.log("true")
            }
        });
        
        dots.push({ element: dot, isColored});
        grid.appendChild(dot);
    }

    // Reset button functionality
    document.getElementById('resetBtn').addEventListener('click', () => {
        dots.forEach(dot => {
            dot.isColored = false;
            dot.element.style.backgroundColor = '#2a2a2a';//change this
            console.log(dot) 
        });
    });

    // Smiley button functionality
    document.getElementById('smileyBtn').addEventListener('click', () => {
        dots.forEach((dot, index) => {
            if (smileyPattern[index]) {
                dot.element.style.backgroundColor = selectedColor;
                dot.isColored = true;
            } else {
                dot.element.style.backgroundColor = '#2a2a2a';
                dot.isColored = false;
            }
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initDotGrid);

//for colour palette
// Select all color options
const colorOptions = document.querySelectorAll('.color-option');

// Loop through each option and add a click event listener
colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    // Remove the 'selected' class from all options
    colorOptions.forEach(opt => opt.classList.remove('selected'));

    // Add 'selected' class to the clicked option
    option.classList.add('selected');

    // Get the background color of the selected option
    const selectedColor = option.getAttribute('data-color');

    // Set the outline color to match the selected color
    option.style.outlineColor = selectedColor;
  });
});