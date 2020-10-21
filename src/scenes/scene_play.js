import Sprite from '../gameObjects/Sprite.js';
import CharacterSprite from '../gameObjects/CharacterSprite.js'
class Scene_play extends Phaser.Scene {
    constructor() {
        super({ key: "Scene_play" });
    }
    load(){
       this.physics.world.setBoundsCollision(false,false,true,true);
    }
    create() {

        console.log("Jugando")

        //Ajustar la imagen al fondo

        let bgu = this.add.image(0, 0, "gymBackground").setOrigin(0, 0);

        let agrid = new AlignGrid({ scene: this, rows: 11, cols: 11 });
        agrid.showNumbers();

        //agrid.placeAtIndex(0,bgu);
        //Align.scaleToGameW(bgu,1,this);

        // bgu.displayHeight=360

        //let bgd= this.add.image(0,360,"gymBackground").setOrigin(0,0);
        //bgd.displayheight=this.scale.height/2;
        //let background = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'gymBackground')

        // let scaleX = this.cameras.main.width / background.width
        // let scaleY = this.cameras.main.height / background.height
        // let scale = Math.max(scaleX, scaleY)
        // background.setScale(scale).setScrollFactor(0)

        this.playerU = new CharacterSprite(this, 100, 220, "tomato_walk");
        this.playerU.displayHeight = 300;
        this.playerU.displayWidth = 300;

        //this.playerU.scale.setTo(2,2)
        //controles
        this.cursor = this.input.keyboard.createCursorKeys();

        Align.scaleToGameW(this.playerU,0.1,this);

        //camara
        // window.scene=this;




        //this.cameras.main.setBounds(0, 0, bgu.displayWidth, bgu.displayHeight);
        //this.cameras.main.startFollow(this.playerU, true);
        //this.cameras.mian.setZoom(3);
        //this.cameras.main.zoom = 0.3;



    }
    update() {

        // Control pj1

        if (this.cursor.left.isDown === true) {

            this.playerU.body.setVelocityX(-300);
            this.playerU.anims.play("tomato_walk", true);
        }
        if (this.cursor.right.isDown === true) {
            this.playerU.body.setVelocityX(300);
            this.playerU.anims.play("tomato_walk", true);
        }
        if (this.cursor.up.isDown === true) {
            this.playerU.body.setVelocityY(-300);
            this.playerU.anims.play("tomato_walk", true);
        }
        if (this.cursor.down.isDown === true) {
            this.playerU.body.setVelocityY(300);
            this.playerU.anims.play("tomato_walk", true);
        }
        if (this.cursor.down.isUp && this.cursor.up.isUp && this.cursor.right.isUp && this.cursor.left.isUp) {
            this.playerU.body.setVelocityX(0);
            this.playerU.body.setVelocityY(0);
            this.playerU.anims.play("tomato_walk", true, 0);
            this.playerU.anims.stop();
        }


    }


}
export default Scene_play;