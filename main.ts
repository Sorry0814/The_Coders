namespace SpriteKind {
    export const Dryads = SpriteKind.create()
    export const Door = SpriteKind.create()
    export const Canopy = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Canopy, function (sprite, otherSprite) {
    controller.moveSprite(Andrew, 0, 0)
    Andrew.setPosition(159, 55)
    if (Canopy_time == 0) {
        Canopy_time += 1
        Door2 = sprites.create(assets.image`myImage`, SpriteKind.Door)
        DOOR.y = 250
        controller.moveSprite(Andrew)
    } else {
        Olivia.sayText("LEAVE. JUST LEAVE", 4000, true)
        controller.moveSprite(Andrew)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level2`)
    scene.cameraShake(2, 500)
    Olivia.destroy()
    Andrew.setPosition(160, 120)
    controller.moveSprite(Andrew, 0, 0)
    pause(500)
    controller.moveSprite(Andrew)
    Canopy = sprites.create(img`
        . . . . . f f 7 7 f f . . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 7 7 7 7 7 7 f . . 
        . . f 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 e 7 7 e e 7 7 e 7 7 f . 
        . f 7 7 f f e e e e f f 7 7 f . 
        . f 7 7 f b 7 e e 7 b f 7 7 f . 
        . f 7 7 e 1 7 e e 7 1 e 7 7 f . 
        f f 7 7 f e e e e e e f 7 7 f f 
        f 7 7 f f f e e e e f f f 7 7 f 
        . f e e f 8 9 6 6 9 8 f e e f . 
        . . e 4 6 9 8 9 8 6 9 8 4 e . . 
        . . e f 9 9 8 9 9 8 6 9 f e . . 
        . . . f f 9 9 9 8 9 6 f f . . . 
        . . . . . f f 6 9 f f . . . . . 
        `, SpriteKind.Canopy)
    Canopy.setPosition(180, 55)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Dryads, function (sprite, otherSprite) {
    controller.moveSprite(Andrew, 0, 0)
    Andrew.setPosition(55, 62)
    if (Dryad_time_no1 == 0) {
        Dryad_time_no1 += 1
        DOOR = sprites.create(assets.image`myImage`, SpriteKind.Door)
        DOOR.y = 250
        Olivia.sayText("A human?! HOW COME! I THOUGHT THIS WORLD IS FAIR!!", 4000, true)
        pause(4200)
        Andrew.sayText("Uh...Hi! Im Andrew, Whats your name? And do you know where we are?", 4000, true)
        pause(4200)
        Olivia.sayText("I want no business with you. At all. Please leave cruel human.", 4000, true)
        pause(4200)
        Andrew.sayText("Perhaps you have mistaken me for someone else-", 2000, true)
        pause(2200)
        Olivia.sayText("LEAVE. JUST LEAVE", 4000, true)
        controller.moveSprite(Andrew)
    } else {
        Olivia.sayText("LEAVE. JUST LEAVE", 4000, true)
        controller.moveSprite(Andrew)
    }
})
let Canopy: Sprite = null
let DOOR: Sprite = null
let Door2: Sprite = null
let Canopy_time = 0
let Olivia: Sprite = null
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
Olivia = sprites.create(img`
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
Andrew.sayText("Wha-? How? Oh!", 5000, true)
pause(5200)
Andrew.sayText("Hi player! My name is Andrew, and the last thing I remember is going to sleep..", 5000, true)
pause(5200)
Andrew.sayText("I AM NOT ABLE TO MOVE ON MY OWN?! PLAYER, PLEASE HELP ME MOVE, USE THE BUTTONS!", 5000, true)
controller.moveSprite(Andrew)
pause(5200)
Andrew.sayText("I am confused, lets look around for someone...", 5000, true)
