const textArea = document.getElementById('editor');

textArea.addEventListener('keydown', () => {
    localStorage.setItem('text', textArea.value)
})

textArea.value = localStorage.getItem('text')