document.querySelector('button').onclick = function(){
    document.body.style.backgroundColor = 'black';
    
    let allAnchorTags = document.querySelectorAll('a');
    allAnchorTags.forEach(anchor => {
        anchor.style.color = "yellow";
    })
}