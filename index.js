setInterval(()=>{
d=new Date();
htime=d.getHours()
mtime=d.getMinutes()
stime=d.getSeconds()


hrotation=30*htime+stime/3600;
mrotation=6*mtime+stime/60;
srotation=6*stime


hour.style.transform=`rotate(${hrotation}deg)`

minute.style.transform=`rotate(${mrotation}deg)`

second.style.transform=`rotate(${srotation}deg)`
},1000)
// script.js


// List of 60 colors excluding white, red, and black
const colors = [
  "#FF5733", "#33FF57", "#5733FF", "#33A5FF", "#FFC300", "#DAF7A6", "#900C3F", 
  "#581845", "#C70039", "#00B894", "#0984E3", "#6C5CE7", "#74B9FF", "#00CEC9", 
  "#FDCB6E", "#E17055", "#FF7675", "#D63031", "#2D3436", "#636E72", "#A29BFE",
  "#E84393", "#55EFC4", "#B2BEC3", "#EDAE49", "#E63946", "#457B9D", "#2A9D8F", 
  "#264653", "#F4A261", "#8D8741", "#659DBD", "#DAAD86", "#BC986A", "#FBEEC1",
  "#D4A5A5", "#D4A8E6", "#A4B0F5", "#89BDE3", "#8BB174", "#C5E99B", "#FAF3DD", 
  "#ED9B40", "#FF847C", "#E84A5F", "#99B898", "#FECEAB", "#FF847C", "#E84A5F", 
  "#CC527A", "#E8175D", "#474747", "#B0C4DE", "#7FFFD4", "#40E0D0", "#66CDAA", 
  "#FF6F61", "#6B4226", "#98DDCA", "#A9DEF9", "#FF99C8"
];
// Function to display time
function showTime() {
  const clock = document.getElementById("clock"); // Get clock element

  // Get current date and time
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // AM-PM format logic
  let session = "AM";
  if (hours >= 12) {
      session = "PM";
      if (hours > 12) {
          hours -= 12; // Convert to 12-hour format
      }
  }
  if (hours === 0) {
      hours = 12; // 12 AM case
  }

  // Add zero padding if time < 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Combine hours, minutes, and seconds
  let time = `${hours}:${minutes}:${seconds} ${session}`;
  clock.innerText = time; // Update clock display
  
  //color changes
  document.body.style.backgroundColor = colors[seconds % colors.length];

  // Call showTime again after 1 second
  setTimeout(showTime, 1000);
}

// Call the function when page loads
showTime();
