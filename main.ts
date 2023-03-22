radio.onReceivedNumber(function (receivedNumber) {
    你出拳 = receivedNumber
    while (我出拳 == 0) {
        basic.showString("?")
        basic.pause(3000)
        if (你出拳 == 1) {
            我出拳 = 2
            basic.showIcon(IconNames.SmallSquare)
            radio.sendNumber(我出拳)
        } else if (你出拳 == 2) {
            我出拳 = 3
            basic.showIcon(IconNames.Square)
            radio.sendNumber(我出拳)
        } else if (你出拳 == 3) {
            我出拳 = 1
            basic.showIcon(IconNames.Scissors)
            radio.sendNumber(我出拳)
        }
    }
    basic.pause(1000)
    比輸贏()
    basic.pause(3000)
    設定初值()
})
input.onButtonPressed(Button.A, function () {
    if (我出拳 == 0) {
        我出拳 = 1
        basic.showIcon(IconNames.Scissors)
        radio.sendNumber(我出拳)
    }
})
function 設定初值 () {
    basic.showArrow(ArrowNames.East)
    我出拳 = 0
    你出拳 = 0
}
function 比輸贏 () {
    if (我出拳 == 你出拳) {
        basic.showIcon(IconNames.Duck)
    } else if (我出拳 == 1 && 你出拳 == 3) {
        basic.showIcon(IconNames.Happy)
    } else if (我出拳 == 2 && 你出拳 == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (我出拳 == 3 && 你出拳 == 2) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (我出拳 == 0) {
        我出拳 = 3
        basic.showIcon(IconNames.Square)
        radio.sendNumber(我出拳)
    }
})
input.onButtonPressed(Button.B, function () {
    if (我出拳 == 0) {
        我出拳 = 2
        basic.showIcon(IconNames.SmallSquare)
        radio.sendNumber(我出拳)
    }
})
let 我出拳 = 0
let 你出拳 = 0
radio.setGroup(50)
設定初值()
basic.forever(function () {
	
})
