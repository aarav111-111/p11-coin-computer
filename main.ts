input.onButtonPressed(Button.A, function () {
    userChoice = "Heads"
    my_var = 1
})
input.onButtonPressed(Button.AB, function () {
    if (my_var == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(100)
        if (Math.randomBoolean() == true) {
            coinFaceValue = "Heads"
            basic.showString("Heads")
            basic.showIcon(IconNames.Skull)
        } else {
            coinFaceValue = "Tails"
            basic.showString("Tails")
            basic.showIcon(IconNames.Duck)
        }
        basic.pause(1000)
        basic.clearScreen()
        if (coinFaceValue == userChoice) {
            basic.showString("WIN")
            score += 1
        } else {
            basic.showString("LOSE")
            score = 0
        }
        my_var = 0
        basic.showString("Score")
        basic.showNumber(score)
    }
})
input.onButtonPressed(Button.B, function () {
    userChoice = "Tails"
    my_var = 1
})
let my_var = 0
let score = 0
let userChoice = ""
let coinFaceValue = ""
coinFaceValue = ""
userChoice = ""
score = 0
