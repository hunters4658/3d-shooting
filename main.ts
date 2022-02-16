namespace SpriteKind {
    export const targeting = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    laser = true
    target.setImage(img`
        . . . . 2 2 2 2 2 2 2 . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 . . . . . 2 2 2 2 2 
        2 2 2 2 . . . . . . . 2 2 2 2 
        2 2 2 2 . . . . . . . 2 2 2 2 
        2 2 2 2 . . . . . . . 2 2 2 2 
        2 2 2 2 . . . . . . . 2 2 2 2 
        2 2 2 2 . . . . . . . 2 2 2 2 
        2 2 2 2 2 . . . . . 2 2 2 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . 2 2 2 2 2 2 2 . . . . 
        `)
    pause(200)
    target.setImage(assets.image`myImage`)
    laser = false
})
sprites.onOverlap(SpriteKind.targeting, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (laser == true) {
        otherSprite.destroy()
    }
})
let laser = false
let target: Sprite = null
target = sprites.create(assets.image`myImage`, SpriteKind.targeting)
controller.moveSprite(target, 100, 100)
target.setStayInScreen(true)
