export default class load extends Phaser.Scene {
    constructor() {
        super({ key: 'load' });
        
    }

    preload() {
        this.load.image('mark1', 'assets/images/mark1.png');
        this.load.image('mark2', 'assets/images/mark2.png');
        this.load.image('index0', 'assets/images/guide-IMG/index0.png'); 
    }

    create() {
        this.scene.stop('ADMIN')
        this.scene.stop('map8')
        this.scene.stop('WIN')
        this.scene.stop('Load_index')

        this.scale.resize(1600, 900)
        var sceneWidth = this.scale.width;
        var sceneHeight = this.scale.height;
        this.scale.displaySize.setAspectRatio(sceneWidth / sceneHeight);
        this.scale.refresh();


        this.add.image(0, 0, 'index0').setOrigin(0, 0).setDepth(5);


        setTimeout(() => {

            this.scene.launch('start')// launch qua thằng start {debug} => Scene
        }, 3000);
        

    }

    update() {
        


    }
}



