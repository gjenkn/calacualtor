document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the equal button
    var equalButton = document.querySelector('.equal');

    let foundSecretItem = false; 
    let usedHint = false; 

    // Event listener for finding the secret item
    document.getElementById('findSecretItemButton').addEventListener('click', function() {
        foundSecretItem = true;
        const starsEarned = countStars(foundSecretItem, usedHint);
    });

    // Event listener for using a hint
    document.getElementById('useHintButton').addEventListener('click', function() {
        usedHint = true;
        const starsEarned = countStars(foundSecretItem, usedHint);
        document.getElementById('displayHint').style.display = 'block';
    });
    // count the number of stars they should obtain
    function countStars(foundSecretItem, usedHint) {
        let stars = 3;
        if (!foundSecretItem) {
            stars--;
        }
        if (usedHint) {
            stars--;
        }
        return stars;
        console.log(stars);
    }

    // event listener to detect when the equal button is clicked
    equalButton.addEventListener('click', function() {
        // Get the value of the display
        var expression = display.value;

        // Get the winning expression from the data attribute
        var winningExpression = document.querySelector('.container').dataset.winningExpression;

        // Check if the entered expression matches your specific criteria
        if (expression.trim() === winningExpression) {
            const starsEarned = countStars(foundSecretItem, usedHint);

            // Delay the appearance of dynamic content by 2 seconds
            setTimeout(function() {document.getElementById('dynamicContent').style.display = 'block';}, 800); 

            if(starsEarned >= 1) {
                setTimeout(function() {document.getElementById('starsAppearing1').style.display = 'block';}, 1200); 
            }
            if (starsEarned >= 2) {
                setTimeout(function() {document.getElementById('starsAppearing2').style.display = 'block';}, 1600); 
            }
            if(starsEarned == 3) {
                setTimeout(function() {document.getElementById('starsAppearing3').style.display = 'block';}, 2000); 
                setTimeout(function() {basic();}, 2400); 
            }
            
        } 
        // Evaluate and display the result regardless of the criteria
        display.value = eval(expression);
    });

    function basic(){
        confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      }

});