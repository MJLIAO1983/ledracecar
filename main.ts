input.onButtonPressed(Button.A, function () {
    range_red.showColor(neopixel.colors(NeoPixelColors.Black))
    redCount += 1
    range_red = strip.range(redCount * 3, 3)
    range_red.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.AB, function () {
    blueCount = 0
    redCount = 0
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    range_red.showColor(neopixel.rgb(255, 0, 0))
    range_blue.showColor(neopixel.rgb(0, 0, 255))
    range_red = strip.range(redCount * 3, 3)
    range_blue = strip.range(blueCount * 3, 3)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "car1") {
        range_red.showColor(neopixel.colors(NeoPixelColors.Black))
        redCount += 1
        range_red = strip.range(redCount * 3, 3)
        range_red.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (receivedString == "car2") {
        range_blue.showColor(neopixel.colors(NeoPixelColors.Black))
        blueCount += 1
        range_blue = strip.range(blueCount * 3, 3)
        range_blue.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
input.onButtonPressed(Button.B, function () {
    range_blue.showColor(neopixel.colors(NeoPixelColors.Black))
    blueCount += 1
    range_blue = strip.range(blueCount * 3, 3)
    range_blue.showColor(neopixel.colors(NeoPixelColors.Blue))
})
let range_blue: neopixel.Strip = null
let range_red: neopixel.Strip = null
let blueCount = 0
let redCount = 0
let strip: neopixel.Strip = null
radio.setGroup(1)
strip = neopixel.create(DigitalPin.P0, 300, NeoPixelMode.RGB)
redCount = 0
blueCount = 0
range_red = strip.range(0, 3)
range_blue = strip.range(0, 3)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
range_red.showColor(neopixel.rgb(255, 0, 0))
range_blue.showColor(neopixel.rgb(0, 0, 255))
strip.show()
basic.forever(function () {
    if (redCount >= 100) {
        redCount = 0
    }
    if (blueCount >= 50) {
        blueCount = 0
    }
})
