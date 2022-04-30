namespace SpriteKind {
    export const Dryads = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Dryads, function (sprite, otherSprite) {
    controller.moveSprite(Andrew, 0, 0)
    Andrew.setPosition(55, 62)
    if (Dryad_time_no1 == 0) {
        Dryad_time_no1 += 1
        Dryad1.sayText("A human?! HOW COME! I THOUGHT THIS WORLD IS FAIR!!", 4000, true)
        pause(4200)
        Andrew.sayText("Uh...Hi! Im Andrew, Whats your name? And do you know where we are?", 4000, true)
        pause(4200)
        Dryad1.sayText("I want no business with you. At all. Please leave cruel human.", 4000, true)
        pause(4200)
        Andrew.sayText("Perhaps you have mistaken me for someone else-", 2000, true)
        pause(2200)
        Dryad1.sayText("LEAVE. JUST LEAVE", 4000, true)
        controller.moveSprite(Andrew)
    } else {
        Dryad1.sayText("LEAVE. JUST LEAVE", 4000, true)
        controller.moveSprite(Andrew)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    scene.cameraShake(8, 10000)
    controller.startLightAnimation(light.sparkleAnimation, 1000)
})
let Dryad1: Sprite = null
let Andrew: Sprite = null
let Dryad_time_no1 = 0
Dryad_time_no1 = 0
Andrew = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
Andrew.setPosition(160, 120)
scene.cameraFollowSprite(Andrew)
Dryad1 = sprites.create(img`
    . . . . . . e . 5 . . . . . . . 
    . . . . . f e 5 e f f . . . . . 
    . . . . f 1 5 e 5 1 7 f . . . . 
    . . . f 1 7 7 7 7 7 1 7 f . . . 
    . . . f 7 7 f f f f 7 1 f . . . 
    . . . f 7 f f e e f f 7 f . . . 
    . . f 7 f e f e e f e f 7 f . . 
    . . f 7 f e 7 e e 7 e f 7 f . . 
    . . f 7 7 f e e e e f 7 7 f . . 
    . f 7 7 f 7 f f f f 7 f 7 7 f . 
    . . f f e 7 7 7 7 7 7 e f f . . 
    . . f e e f 7 7 7 7 f e e f . . 
    . . . f f 7 7 7 7 7 7 f f . . . 
    . . . f 7 7 7 7 7 7 7 7 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Dryads)
let DOOR = sprites.create(assets.image`myImage`, SpriteKind.Projectile)
DOOR.y = 250
Andrew.sayText("Wha-? How? Oh!", 5000, true)
pause(5200)
Andrew.sayText("Hi player! My name is Andrew, and the last thing I remember is going to sleep..", 5000, true)
pause(5200)
Andrew.sayText("I AM NOT ABLE TO MOVE ON MY OWN?! PLAYER, PLEASE HELP ME MOVE, USE THE BUTTONS!", 5000, true)
controller.moveSprite(Andrew)
pause(5200)
Andrew.sayText("I am confused, lets look around for someone...", 5000, true)
