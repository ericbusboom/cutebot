basic.forever(function () {
    cuteBot.motors(100, -100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
    basic.pause(1000)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x007fff)
    basic.pause(1000)
})
