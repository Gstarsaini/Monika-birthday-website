let sound = new Audio('ting.mp3'); // Local sound file

document.getElementById('start-button').addEventListener('click', function() {
    sound.play(); // Play the magical sound
    alert("The Sorting Hat is ready to place you in your house, Monika!");

    // Display the final step after the button is clicked
    document.getElementById('final-step').style.display = 'block';
});
