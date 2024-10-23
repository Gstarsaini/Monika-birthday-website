let sound = new Audio('https://drive.google.com/uc?export=view&id=1UfR7fevj5a7jA9Q0FxFEI8KzWY5UFa3W'); // Magic sound link

document.getElementById('start-button').addEventListener('click', function() {
    sound.play(); // Play the magical sound
    alert("The Sorting Hat is ready to place you in your house, Monika!");

    // Display the final step after the button is clicked
    document.getElementById('final-step').style.display = 'block';
});
