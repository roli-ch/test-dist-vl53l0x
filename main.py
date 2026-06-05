Rangefinder.init()
print("init")

def on_forever():
    serial.write_line("Distanz")
    serial.write_number(Rangefinder.distance())
    serial.write_string("" + ("\r\n"))
    pause(100)
basic.forever(on_forever)
