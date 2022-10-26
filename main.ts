let x_value = 0
let y_value = 0
input.onButtonPressed(Button.A, function () {
    x_value = 0
    y_value = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(x_value, y_value)
            x_value += 1
            basic.pause(200)
        }
        y_value += 1
        x_value = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    x_value = 0
    y_value = 0
    for (let index = 0; index < 5; index++) {
        led.plot(x_value, y_value)
        x_value += 1
        basic.pause(200)
    }
    x_value = 4
    y_value = 0
    for (let index = 0; index < 5; index++) {
        led.plot(x_value, y_value)
        y_value += 1
        basic.pause(200)
    }
    y_value = 4
    x_value = 4
    for (let index = 0; index < 5; index++) {
        led.plot(x_value, y_value)
        x_value += -1
        basic.pause(200)
    }
    x_value = 0
    y_value = 4
    for (let index = 0; index < 5; index++) {
        led.plot(x_value, y_value)
        y_value += -1
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    x_value = 0
    y_value = 0
    for (let index = 0; index < 5; index++) {
        led.plot(x_value, y_value)
        x_value += 1
        basic.pause(200)
    }
    y_value = 1
    x_value = 4
    for (let index = 0; index < 5; index++) {
        led.plot(x_value, y_value)
        x_value += -1
        basic.pause(200)
    }
    x_value = 0
    y_value = 1
    y_value += 1
    for (let index = 0; index < 5; index++) {
        led.plot(x_value, y_value)
        x_value += 1
        basic.pause(200)
    }
    y_value = 3
    x_value = 4
    for (let index = 0; index < 5; index++) {
        led.plot(x_value, y_value)
        x_value += -1
        basic.pause(200)
    }
    y_value = 4
    x_value = 0
    for (let index = 0; index < 5; index++) {
        led.plot(x_value, y_value)
        x_value += 1
        basic.pause(200)
    }
})
basic.forever(function () {
	
})
