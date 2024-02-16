<template>
    <canvas id="canvas" ref="canvas"></canvas>
</template>

<script setup>
import { ref, onMounted } from "vue";

const canvas = ref(null);
const particles = []

class Particle {
    constructor() {
        this.size = Math.ceil(Math.random() * 10);
        this.x = Math.floor(Math.random() * document.documentElement.offsetWidth);
        this.y = -this.size;
        this.speedY = Math.random() * 2;
        this.color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%, 0.2)`
    };
    draw(context) {
        context.beginPath()
        context.shadowColor = this.color;
        context.shadowBlur = this.size;
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.stroke();
        context.fill();
        context.closePath();
    };
    update() {
        this.y += this.speedY
    }
}

const id = ref(0)
setInterval(() => {
    particles.push(new Particle(id.value))
}, 1000)

onMounted(() => {
    canvas.value.width = document.documentElement.offsetWidth;
    canvas.value.height = document.documentElement.offsetHeight;
    const ctx = canvas.value.getContext("2d");

    function animation() {
        requestAnimationFrame(animation)
        ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

        particles.map((particle, index) => {
            particle.draw(ctx)
            particle.update()

            if (particle.y > document.documentElement.offsetHeight) {
                particles.splice(index, 1)
            }
        })
    }


    animation()
});
</script>

<style scoped>
#canvas {
    position: absolute;
    inset: 0;
    z-index: -1;
    /* opacity: 0.5; */
    background-color: hsl(100, 100%, 50%, .2);
}
</style>