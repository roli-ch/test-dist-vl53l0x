Rangefinder.init()

def on_forever():
    serial.write_number(Rangefinder.distance())
    serial.write_string("" + ("\r\n"))
basic.forever(on_forever)
