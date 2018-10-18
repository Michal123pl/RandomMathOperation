const particlesOptions = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#FFA181'
    },
    shape: {
      type: 'polygon',
      polygon: {
        nb_sides: 6
      }
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0
      }
    },
    size: {
      value: 60,
      random: true
    },
    line_linked: {
      enable: false
    }
  }
}

export default particlesOptions;