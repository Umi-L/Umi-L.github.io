<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
export default {
    methods: {
        getPoints() {
            return Array(100).keys();
        },
        calcPosition() {
            return {
            top : (Math.random()*document.documentElement.getBoundingClientRect().height) + 'px',
            left: (Math.random()*document.body.scrollWidth) + 'px'
            }
        }
    },
}

</script>



<template>

<KinesisContainer id="bubbles">

    <KinesisElement :strength="20" class="dot" v-for="l in getPoints()" :style="calcPosition()"></KinesisElement>

</KinesisContainer>

</template>



<style>
    #bubbles{
        position: absolute;

        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .dot {
        height: 100px;
        width: 100px;
        background-color: #bbb;
        border-radius: 50%;

        mix-blend-mode: invert;

        position: absolute;
    }
</style>