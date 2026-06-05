// Test Rangefinder VL53L0XV2
// Infrarot Distanzmesser
// pfr / 5.6.2026

Rangefinder.init()
let pin1 = 0
let dist = 1
let distStr = "xx"
pause(1000)
console.log("init")

basic.forever(function on_forever() {
    //dist = VL53L0X.readSingleDistance()
    //distStr = VL53L0X.stringDistance()
    dist = Rangefinder.distance()
    if (dist < 2000) {
        serial.writeLine("-------")
        serial.writeValue("time ", input.runningTime() / 1000)
        serial.writeValue("distanz", dist)
        serial.writeLine(distStr)
        //serial.writeString("" + "\r\n")
        pin1 = pins.digitalReadPin(DigitalPin.P1)
        serial.writeValue("pin1", pin1)
    }
    
    pause(1)
})
