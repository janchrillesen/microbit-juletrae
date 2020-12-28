basic.showIcon(IconNames.Happy)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
basic.pause(2000)
music.playTone(523, music.beat(BeatFraction.Whole))
for (let index = 0; index < 22; index++) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
    basic.pause(300)
    maqueen.motorStop(maqueen.Motors.M2)
}
basic.forever(function () {
	
})
