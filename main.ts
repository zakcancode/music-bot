input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
    music.stopAllSounds()
    music.setBuiltInSpeakerEnabled(false)
})
input.onSound(DetectedSound.Loud, function () {
    music.setBuiltInSpeakerEnabled(true)
    basic.showIcon(IconNames.Duck)
    while (true) {
        for (let index = 0; index < 2; index++) {
            music.playTone(220, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(220, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Whole))
        }
        music.playTone(220, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    music.setBuiltInSpeakerEnabled(true)
    basic.showIcon(IconNames.Duck)
    while (true) {
        for (let index = 0; index < 2; index++) {
            music.playTone(220, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(220, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Whole))
        }
        music.playTone(220, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onSound(DetectedSound.Quiet, function () {
    music.setBuiltInSpeakerEnabled(true)
    basic.showIcon(IconNames.Duck)
    while (true) {
        for (let index = 0; index < 2; index++) {
            music.playTone(220, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(220, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Whole))
        }
        music.playTone(220, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
basic.showIcon(IconNames.SmallDiamond)
basic.clearScreen()
basic.showIcon(IconNames.Diamond)
basic.clearScreen()
