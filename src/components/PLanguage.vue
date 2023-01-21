<!-- BlogPost.vue -->
<script>
export default {
    props: ['icon', 'name'],
    data(){
        return {
            hovering: false
        }
    },
    methods: {
        // hoverStart(){
        //     if (!this.hovering){
        //         this.$refs.icon.classList.add("colored")
        //     }

        //     this.hovering = true
        // },
        // hoverEnd(){
        //     if (this.hovering){
        //         this.$refs.icon.classList.remove("colored")
        //     }

        //     this.hovering = false
        // }
    },
}


</script>

<template>
    <div class="lang-container" :onmouseover=hoverStart :onmouseleave=hoverEnd>
        <i :class="icon + ' icon'" ref="icon"></i>
        <p class="small-font">{{ name }}</p>
    </div>
</template>

<style>
    .lang-container{

        border: 1px var(--primary-color) solid;
        border-radius: 7px;

        height: 10%;
        width: 10%;

        margin: 2%;
        padding: 1%;

        overflow: hidden;

        transition: 0.2s;

        display: flex;
        flex-direction: column;
        align-items: center;

        min-width: 58px;
    }

    .icon {
        font-size:calc(30px + 3vw);
        transition-duration: 0.2s;

        color: var(--primary-color);
    }

    .lang-container:hover > .icon{

        transform:scale(1.1);
        color: var(--background-color);


    }

    .lang-container:hover > p{

        transform:scale(1.1);
        color: var(--background-color);

    }

    .lang-container:hover{
        background-color: var(--secondary-color);
        border-color: var(--secondary-color);
    }

    p{
        transition-duration: 0.3s;
    }

    .small-font{
        font-size: 0.8em !important;
    }
</style>
