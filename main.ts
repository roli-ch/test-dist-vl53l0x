Rangefinder.init()
basic.forever(function on_forever() {
    serial.writeNumber(Rangefinder.distance())
    serial.writeString("" + "\r\n")
})
