// function clockFunction(){
//      var date = new Date();
//      document.getElementById('clock').innerHTML = date.toLocaleTimeString();
// }

// window.onload = function(){
//      setInterval(clockFunction,1000);
// }


function updateClock() {
     const now = new Date();
     const hours = now.getHours();
     const minutes = now.getMinutes().toString().padStart(2, '0');
     const seconds = now.getSeconds().toString().padStart(2, '0');
     const ampm = hours >= 12 ? 'PM' : 'AM';


     const formattedHours = hours % 12 || 12;

     document.getElementById('clock').textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;

     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
     const formattedDate = now.toLocaleDateString(undefined, options);
     document.getElementById('date').textContent = formattedDate;
}

document.getElementById('theme-toggle').addEventListener('click', () => {
     document.body.classList.toggle('light-theme');
});

setInterval(updateClock, 1000);

window.onload = updateClock;