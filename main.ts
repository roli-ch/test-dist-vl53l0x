Rangefinder.init()
let pin1 = 10
console.log("init")
basic.forever(function on_forever() {
    serial.writeLine("-------")
    serial.writeLine("Distanz")
    serial.writeNumber(Rangefinder.distance())
    serial.writeString("" + "\r\n")
    pin1 = pins.digitalReadPin(DigitalPin.P1)
    serial.writeValue("pin1", pin1)
    pause(100)
})
