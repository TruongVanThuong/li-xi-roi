

let countdownTime = 3; 
const countdownElement = document.getElementById("countdown");

updateCountdown();

function updateCountdown() {
  
  const hours = Math.floor(countdownTime / 3600);
  const minutes = Math.floor((countdownTime % 3600) / 60);
  const seconds = countdownTime % 60;
  console.log(hours, minutes, seconds);

  countdownElement.innerHTML = "Lì xì sẽ xuất hiện sau: " + hours + "h " + minutes + "m " + seconds + "s ";

  if (countdownTime <= 0) {
    createLucky(7);
  } else {
    countdownTime = countdownTime - 1;
    setTimeout(updateCountdown, 1000);
  }
}



// ================================================



const luckyContainer = document.getElementById("lucky-container");
const luckyContent = ["🧧", "🎁", "🎉"];
// const luckyContent = ['&#10052', '&#10053', '&#10054']; //hiệu ứng tuyết rơi

const random = (num) => {
  return Math.floor(Math.random() * num);
};

const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 10;
  const size = random(25) + 25;
  return `
    top: -${top}%;
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${dur}s;
  `;
};

const showMessage = (message) => {
  alert(message);
}

const createLucky = (num) => {
  for (var i = num; i > 0; i--) {
    var lucky = document.createElement("div");
    lucky.className = "lucky";
    lucky.style.cssText = getRandomStyles();
    const luckyClick = luckyContent[random(3)];
    lucky.innerHTML = luckyClick;

    lucky.addEventListener("click", () => {
      // if(luckyClick === "🧧" || luckyClick === "🎁" || luckyClick === "🎉") {
      //   showMessage('yehhhhhhhhh');
      // } else {
      //   showMessage('oh noooooooo');
      // }
      const randomPercentage = random(101);
      
      if (randomPercentage < 50) {
        showMessage("yehhhhhhhhh!");
      } else {
        showMessage("ohhhhh noooooooo!");
      }
    });

    luckyContainer.append(lucky);
  }
};
