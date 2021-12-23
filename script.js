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
        const startAnimation = this.anims.create({
            key: 'walkStart',
            frames: this.anims.generateFrameNumbers('start', {start: 0, end: 4}),
            frameRate: 4,
        });

        let middleAnimation = this.anims.create({
            key: 'walkMiddle',
            frames: this.anims.generateFrameNumbers('middle', {start: 0, end: 4}),
            frameRate: 4,
        });

        const finishAnimation = this.anims.create({
            key: 'walkFinish',
            frames: this.anims.generateFrameNumbers('finish', {start: 0, end: 4}),
            frameRate: 4,
        });

        const spriteStart = this.add.sprite(400, 350, 'start').setScale(0.4);

        spriteStart.play({ key: 'walkStart', repeat: 1 });

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
            spriteMiddle.play({ key: 'walkMiddle', repeat: 3 });

            this.tweens.add({
                targets: spriteMiddle,

            });

            spriteMiddle.on('animationcomplete', function () {
                spriteMiddle.destroy();

                const spriteFinish = this.add.sprite(400, 350, 'finish').setScale(0.8);
                spriteFinish.play({ key: 'walkFinish', repeat: 1 });

                this.tweens.add({
                    targets: spriteFinish,
                    y: 100,
                    x: 300,
                    scale: 0.1,
                    duration: 2000,

                });



                spriteFinish.on('animationcomplete', function () {
                    spriteFinish.destroy();




                    let middleAnimation = this.anims.create({
                        frames: this.anims.generateFrameNumbers('middle', {start: 0, end: 1}),
                        frameRate: 1,
                    });

                    spriteMiddle = this.add.sprite(300, 100, 'middle').setScale(0.1);
                    spriteMiddle.play({ key: 'walkMiddle', repeat: 0 });

                    this.tweens.add({
                        targets: spriteMiddle,
                    });
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


// -----------

// class Example extends Phaser.Scene
// {
//     constructor ()
//     {
//         super();
//     }

//     preload ()
//     {
//         this.load.image('poo', 'assets/sprites/poo.png');
//         this.load.spritesheet('mummy', 'assets/animations/mummy37x45.png', { frameWidth: 37, frameHeight: 45 });
//     }

//     create ()
//     {
//         const mummyAnimation = this.anims.create({
//             key: 'walk',
//             frames: this.anims.generateFrameNumbers('mummy'),
//             frameRate: 16
//         });

//         const sprite = this.add.sprite(50, 300, 'mummy').setScale(4);

//         sprite.play({ key: 'walk', repeat: 7 });

//         this.tweens.add({
//             targets: sprite,
//             x: 750,
//             duration: 8800,
//             ease: 'Linear'
//         });

//         sprite.on('animationrepeat', function () {

//             const poop = this.add.image(sprite.x - 32, 300, 'poo').setScale(0.5);

//             this.tweens.add({
//                 targets: poop,
//                 props: {
//                     x: {
//                         value: '-=64', ease: 'Power1'
//                     },
//                     y: {
//                         value: '+=50', ease: 'Bounce.easeOut'
//                     }
//                 },
//                 duration: 750
//             });

//         }, this);
//     }
// }

// const config = {
//     type: Phaser.AUTO,
//     parent: 'phaser-example',
//     width: 800,
//     height: 600,
//     pixelArt: true,
//     scene: [ Example ]
// };

// const game = new Phaser.Game(config);
