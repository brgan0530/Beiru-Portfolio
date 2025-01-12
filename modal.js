function toggleModal() { document.getElementById('modal').classList.toggle('hidden')

    // Initialize tilt when modal opens
    if (!modal.classList.contains('hidden')) {
        VanillaTilt.init(document.getElementById('tiltCard'), {
            max: 10, // maximum tilt rotation (degrees)
            speed: 400, // Speed of the enter/exit transition
            glare: true, // whether it should have a "glare" effect
            "max-glare": 0.5, // the maximum "glare" opacity
            gyroscope: true, // whether to use gyroscope for mobile tilt
            startX: 0,      // the starting tilt on the X axis, in degrees.
            startY: 0      // the starting tilt on the Y axis, in degrees.
        });
    }

}