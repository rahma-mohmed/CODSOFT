document.getElementById('downloadCV').addEventListener('click', function () {
     const link = document.createElement('a');
     link.href = 'Rahma-Mohmed-Aboshaheen.pdf'; 
     // link.target = '_blank';
     link.download = 'Rahma_Mohmed_CV.pdf';
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(event){
          scroll(event , this);
     })
});


function scroll(event , anchor){
     event.preventDefault();
     const targetId = anchor.getAttribute('href'); 
     const targetSection = document.querySelector(targetId); 
     if (targetSection) {
          targetSection.scrollIntoView({
               behavior: 'smooth', 
               block: 'start' 
          });
     }
}
