import { Scene } from 'phaser';
import { EventBus } from '../EventBus';
import "@fontsource/julius-sans-one";

export class Home extends Scene
{
    constructor ()
    {
        super('Home');
    }

    preload ()
    {
        this.load.image('background', 'assets/bg.png');
        this.load.image('floor', 'assets/Tiles/chocoMid100x100.png');
        this.load.image('candycane', 'assets/Tiles/canePinkSmall370x370.png')
    }

    create ()
    {        
        this.cameras.main.setBackgroundColor(0xFFF4F6);

        // this.add.image(512, 384, 'background').setAlpha(0.5);
        const floors = [];
        floors.push(this.add.sprite(50,550, 'floor'))
        for (let i = 0; i < 11; i++)
        {
           floors.push(this.add.sprite(0,0,'floor'));
        }
        
        Phaser.Actions.AlignTo(floors, Phaser.Display.Align.RIGHT_CENTER);

        this.add.text(this.cameras.main.worldView.x + this.cameras.main.width / 2, this.cameras.main.worldView.y + this.cameras.main.height / 2, 
            'Mariana\nFarias', {
            fontFamily: 'Julius Sans One', fontSize: 96, color: '#00000',
            // stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5,1.2).setDepth(100);

        this.add.image(350, 320, 'candycane').setAlpha(0.5).setFlipX(true);
        
        this.add.image(900, 320, 'candycane').setAlpha(0.5);

        EventBus.emit('current-scene-ready', this);
    }

    changeScene ()
    {
        if (this.logoTween)
        {
            this.logoTween.stop();
            this.logoTween = null;
        }

        this.scene.start('Game');
    }
}
