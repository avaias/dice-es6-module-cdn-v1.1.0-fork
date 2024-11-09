import DiceBox from "https://unpkg.com/@3d-dice/dice-box@1.1.3/dist/dice-box.es.min.js";

let Box = new DiceBox({
  assetPath: "assets/",
  origin: "https://unpkg.com/@3d-dice/dice-box@1.1.3/dist/",
  container: "#dice-box",
  theme: "diceOfRolling",
  themeColor: "#feea03",
  externalThemes: {
    diceOfRolling: "https://www.unpkg.com/@3d-dice/theme-dice-of-rolling@0.2.1",
  },
  offscreen: true,
  scale: 6,
  // physics settings that must be set - defaults are buggy
  throwForce: 5,
  gravity: 1,
  mass: 1,
  spinForce: 6,
});

Box.init().then(async (world) => {
  Box.roll(["4d20", "4d12", "4d10", "4d8", "4d6", "4d4"]);
});

const button = document.getElementById("rollem");

const colors = [
  "#348888",
  "#22BABB",
  "#9EF8EE",
  "#FA7F08",
  "#F24405",
  "#F25EB0",
  "#B9BF04",
  "#F2B705",
  "#F27405",
  "#F23005",
];

const scale = [2, 3, 4, 5, 6, 7, 8];

function get_random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

button.addEventListener("click", (e) => {
  Box.updateConfig({
    scale: get_random(scale),
  });
  Box.roll(["4d20", "4d12", "4d10", "4d8", "4d6", "4d4"], {
    themeColor: get_random(colors),
  });
});
