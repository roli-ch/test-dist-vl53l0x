

Rangefinder.init()
pin1 = 0
dist = 1
print("init")

def on_forever():
    global dist, pin1
    dist = Rangefinder.distance()
    serial.write_line("-------")
    serial.write_value("distanz", dist)
    serial.write_string("" + "\r\n")
    pin1 = pins.digital_read_pin(DigitalPin.P1)
    serial.write_value("pin1", pin1)
    pause(100)
basic.forever(on_forever)
