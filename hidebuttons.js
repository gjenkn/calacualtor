function hideButton(button) {
        button.classList.add('hidden');
        
        setTimeout(function() { button.remove();}, 5500); // 6 sec delay
}