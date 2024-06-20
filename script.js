//Digital Clock  Program

function updateClock(){

   const now = new Date();
   let  Hours = now.getHours();
   const meriditem =  Hours >= 12 ? "PM" : "AM";
   Hours = Hours % 12 || 12;
   Hours = Hours.toString().padStart(2, 0);
   const Minutes = now.getMinutes().toString().padStart(2, 0);
   const Seconds = now.getSeconds().toString().padStart(2, 0);
   const timeString = `${Hours}:${Minutes}:${Seconds} ${meriditem}`;
   document.getElementById("Clock").textContent = timeString;
}

updateClock();
setInterval(updateClock,1000);


