document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('showCow').addEventListener('click', function() {
        document.getElementById('findSecretItemButton').style.display = 'block';
        setTimeout(function() {findSecretItemButton.classList.add('hiddenCow');}, 1);
        
        setTimeout(function() {findSecretItemButton.remove();}, 2000); // 6 sec delay
    });

});