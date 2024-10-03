/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Peter Zerbinos
 * Created on: Sep 2024
 * This program shows many colours on 1 LED
*/

//setup
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showIcon(IconNames.Happy)

//turn on RGB LED & display text x7 after A button clicked
//red
input.onButtonPressed(Button.A, function() {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.showString("Red")
    basic.pause(1000)
    basic.clearScreen()
})
//blue
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.showString("Red")
    basic.pause(1000)
    basic.clearScreen()
})
//green
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.showString("Red")
    basic.pause(1000)
    basic.clearScreen()
})
//magenta
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.showString("Red")
    basic.pause(1000)
    basic.clearScreen()
})
//Yellow
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.showString("Red")
    basic.pause(1000)
    basic.clearScreen()
})
//Cyan
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.showString("Red")
    basic.pause(1000)
    basic.clearScreen()
})
//White
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.showString("Red")
    basic.pause(1000)
    basic.clearScreen()
})

//end
