/* (() => {
  const dvd = document.querySelector("#dvd");
  let counter = 0;
  setInterval(()=>{
    dvd.style.left = 50;
    dvd.style.top = counter;
    counter+=20;

},1000)
  
  console.log("hello, world");
})(); */

const dvd = document.querySelector("#dvd");
let container = document.querySelector(".container");
let containerHeight = parseFloat(getComputedStyle(container).height);
let containerWidth = parseFloat(getComputedStyle(container).width);
let dvdWidth = parseFloat(getComputedStyle(dvd).width);
let dvdHeight = parseFloat(getComputedStyle(dvd).height);

let leftCounter = 0;
let topCounter = 0;
let DIRECTIONY = "DOWN";
let DIRECTIONX = "LEFT";
let DIRECTIONS = {
  DOWN: "DOWN",
  UP: "UP",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
};

let randomLeft = Math.floor(Math.random() * containerWidth);
let randomTop = Math.floor(Math.random() * containerHeight);

dvd.style.left = randomLeft + "px";
dvd.style.top = randomTop + "px";
leftCounter = randomLeft;
topCounter = randomTop;

// setInterval(() => {
//   dvd.style.left = leftCounter + "px";
//   dvd.style.top = topCounter + "px";

//   if (DIRECTIONY == DIRECTIONS.DOWN) {
//     if (topCounter + dvdHeight >= containerHeight) {
//       DIRECTIONY = DIRECTIONS.UP;
//       console.log("OI");
//     } else {
//       topCounter += 10;
//     }
//   }

//   if (DIRECTIONY == DIRECTIONS.UP) {
//     if (topCounter <= 0) {
//       DIRECTIONY = DIRECTIONS.DOWN;
//       console.log("OI");
//     } else {
//       topCounter -= 10;
//     }
//   }

//   if (DIRECTIONX == DIRECTIONS.LEFT) {
//     if (leftCounter + dvdWidth >= containerWidth) {
//       DIRECTIONX = DIRECTIONS.RIGHT;
//     } else {
//       leftCounter += 10;
//     }
//   }

//   if (DIRECTIONX == DIRECTIONS.RIGHT) {
//     if (leftCounter <= 0) {
//       DIRECTIONX = DIRECTIONS.LEFT;
//     } else {
//       leftCounter -= 10;
//     }
//   }
// }, 1000);

function animate() {
  dvd.style.left = leftCounter + "px";
  dvd.style.top = topCounter + "px";

  if (DIRECTIONY == DIRECTIONS.DOWN) {
    if (topCounter + dvdHeight - 30 >= containerHeight) {
      DIRECTIONY = DIRECTIONS.UP;

      console.log("OI");
    } else {
      topCounter += 1;
    }
  }

  if (DIRECTIONY == DIRECTIONS.UP) {
    if (topCounter <= -30) {
      DIRECTIONY = DIRECTIONS.DOWN;
      console.log("OI");
    } else {
      topCounter -= 1;
    }
  }

  if (DIRECTIONX == DIRECTIONS.LEFT) {
    if (leftCounter + dvdWidth >= containerWidth) {
      DIRECTIONX = DIRECTIONS.RIGHT;
    } else {
      leftCounter += 1;
    }
  }

  if (DIRECTIONX == DIRECTIONS.RIGHT) {
    if (leftCounter <= 0) {
      DIRECTIONX = DIRECTIONS.LEFT;
    } else {
      leftCounter -= 1;
    }
  }

  requestAnimationFrame(animate);
}

animate();
