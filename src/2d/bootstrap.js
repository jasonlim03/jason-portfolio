import Phaser from "phaser";

export class Bootstrap extends Phaser.Scene {
  constructor() {
    super("bootstrap");
    this.video = null;
  }

  init() {}

  preload() {}

  create() {}

  update() {}
  // load video after preload function
}

function ArrayFrame(start, end, reverse) {
  if (reverse) {
    let arr = [];
    for (let i = start; i >= end; i--) {
      arr.push({ key: "light" + i.toString().padStart(1, "0") });
    }
    return arr;
  } else {
    let arr = [];
    for (let i = start; i <= end; i++) {
      arr.push({ key: "light" + i.toString().padStart(1, "0") });
    }
    return arr;
  }
}
