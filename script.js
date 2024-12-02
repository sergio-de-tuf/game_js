const player = document.getElementById("player");
const damper = document.getElementById("damper");
const btn = document.querySelector(".start");

let isStart = false;

const activeJump = () => {
  if (isStart) {
    if (!player.classList.contains("active")) {
      player.classList.add("active");
    }

    setTimeout(() => {
      player.classList.remove("active");
    }, 300);
  }
};

const startGame = () => {
  isStart = true;

  damper.classList.add("animate");

  interval = setInterval(() => {
    let playerTop = parseInt(
      window.getComputedStyle(player).getPropertyValue("top")
    );
    let damperLeft = parseInt(
      window.getComputedStyle(damper).getPropertyValue("left")
    );

    if (damperLeft < 50 && damperLeft > 0 && playerTop >= 140) {
      endtGame();
    }
  }, 10);
};

const endtGame = () => {
  isStart = false;

  clearInterval(interval);

  damper.classList.remove("animate");

  alert("GAME OVER!");
};

document.addEventListener("keydown", activeJump);

btn.addEventListener("click", () => {
  startGame();
});
