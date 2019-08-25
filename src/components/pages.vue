<template>
    <div data-aos="zoom-in">
    <section height='150px' class="hero  is-default is-bold" id="particles-js1">  
    
</section>

    </div>
</template>

<script>

export default {
            
   
    mounted () {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },
  methods: {
    initParticlesJS () {
      /* eslint-disable */
      particlesJS('particles-js1', {
  "particles": {
    "number": {
      "value": 55,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#16130f"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.23,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2.9,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 35,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 85,
      "color": "#1e0909",
      "opacity": 0.4,
      "width": 2.8409763488718935
    },
    "move": {
      "enable": true,
      "speed": 11.048241356724029,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 3235.556397326323,
        "rotateY": 3156.640387635437
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulsed"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 0,
        "duration": 0.5594047932999286,
        "opacity": 0.6473112608184889,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
})
    }
  }
    

}
</script>
