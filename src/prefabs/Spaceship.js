class spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add tp existing scene
        this.points = pointValue;   // store pointValue
        this.movesSpeed = 3;        // pixels per frame
    }

    update() {
        // move spaceship left
        this.x -= this.movesSpeed;

        // wrap around from left to right edge
        if (this.x <= 0 - this.width) {
            this.reset();
        }
    }

    // position reset
    reset() {
        this.x = game.config.width;
    }
}