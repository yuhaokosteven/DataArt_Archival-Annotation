class Particle {
  constructor(size, type) {
    // snow, thunder, fog, rain, sand
    const colors = [
      [255, 255, 255],
      [0, 51, 204],
      [165, 165, 192],
      [128, 179, 255],
      [255, 163, 26]
    ]

    this.size = map(size * getRandomArbitrary(0.5, 1.5), 0, 200, 2, 50)
    this.color = colors[type]
    this.lifeSpan = getRandomArbitrary(-Math.PI / 2, Math.PI / 2)
    this.location = {
      x: Math.floor(Math.random(1) * width),
      y: Math.floor(Math.random(1) * height)
    }

    this.direction = {
      x: getRandomArbitrary(-1, 1),
      y: getRandomArbitrary(-1, 1)
    }
  }

  display() {
    ellipse(this.location.x, this.location.y, this.size, this.size)
    fill(this.color[0], this.color[1], this.color[2], 120 * Math.abs(Math.cos(this.lifeSpan)))
    this.lifeSpan -= Math.PI / 2 * 0.001
  }

  move() {
    let newX = this.location.x + this.direction.x * 0.1
    let newY = this.location.y + this.direction.y * 0.1

    this.location = {
      x: newX,
      y: newY
    }
  }

  thunder() {
    ellipse(this.location.x, this.location.y, this.size, this.size)
    if (frameCount % 60 == 0) {
      fill(0, 51, 204, 120 * Math.cos(this.lifeSpan))
      this.lifeSpan -= Math.PI / 2 * 0.01
    }
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
