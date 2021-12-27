class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.spritesheet('start', 'img/bri_big_anim_start.png', { frameWidth: 392, frameHeight: 370 });
        this.load.spritesheet('middle', 'img/bri_big_anim_middle.png', { frameWidth: 450, frameHeight: 430 });
        this.load.spritesheet('finish', 'img/bri_big_anim_finish.png', { frameWidth: 326, frameHeight: 335 });
    }

    create ()
    {

        const configCreate = (keyName, framesName) => {
            this.anims.create({
                key: keyName,
                frames: this.anims.generateFrameNumbers(framesName, {start: 0, end: 4}),
                frameRate: 4,
            });
        };

        const addSprite = (nameSpritePlay, keyPlay, repeatPlay) => {
            nameSpritePlay.play({ key: keyPlay, repeat: repeatPlay });
        }

        let startAnimation = configCreate('walkStart', 'start');

        let middleAnimation = configCreate('walkMiddle', 'middle');

        let finishAnimation = configCreate('walkFinish', 'finish');



        let spriteStart = this.add.sprite(400, 350, 'start').setScale(0.4);

        // spriteStart.play({ key: 'walkStart', repeat: 1 });
        addSprite(spriteStart, 'walkStart', 1);

        this.tweens.add({
            targets: spriteStart,
            y: 360,
            scaleX: 0.9,
            scaleY: 0.9,
            duration: 2000,
            
        });


        spriteStart.on('animationcomplete', function () {
            spriteStart.destroy();

            let spriteMiddle = this.add.sprite(400, 350, 'middle').setScale(0.8);
            // spriteMiddle.play({ key: 'walkMiddle', repeat: 3 });
            addSprite(spriteMiddle, 'walkMiddle', 3);

            

            spriteMiddle.on('animationcomplete', function () {
                spriteMiddle.destroy();

                let spriteFinish = this.add.sprite(400, 350, 'finish').setScale(0.8);
                // spriteFinish.play({ key: 'walkFinish', repeat: 1 });
                addSprite(spriteFinish, 'walkFinish', 1);

                this.tweens.add({
                    targets: spriteFinish,
                    y: 100,
                    x: 300,
                    scale: 0.1,
                    duration: 2000,

                });



                spriteFinish.on('animationcomplete', function () {
                    spriteFinish.destroy();

                    spriteMiddle = this.add.sprite(300, 100, 'middle').setScale(0.1);
                    // spriteMiddle.play({ key: 'walkMiddle', repeat: 0 });
                    addSprite(spriteMiddle, 'walkMiddle', 0);

                    spriteMiddle.stop();



                }, this);

            }, this);

        }, this);

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: [ Example ]
};

const game = new Phaser.Game(config);


