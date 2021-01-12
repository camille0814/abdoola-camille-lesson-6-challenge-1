while (true) {
    if (input.soundLevel() > 150) {
        light.setAll(color.rgb(255, 0, 255))
    } else {
        light.clear()
    }
    
}
