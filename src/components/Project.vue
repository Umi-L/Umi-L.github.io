<script>
export default {
    props: ['title', 'img', 'href'],
    created() {
        this.$nextTick(() => {
            if (this.$refs.container) {
                this.$refs.container.onclick = () =>{
                    window.open(this.href, '_blank').focus();
                }
            }
        });
    },
    methods: {
        
    }
}

</script>

<template>
    <XyzTransition
    appear-visible
    duration="1"
    mode="in-out"
    xyz="fade down"
    >
    <div class="project-container" ref="container">
        <img class="project-banner" :src="img" alt="">

        <h3>{{ title }}</h3>
        <div class="project-devider"></div>


        <p><slot></slot></p>
    </div>
    </XyzTransition>
</template>

<style>
    .project-container{
        border: 1px var(--primary-color) solid;
        border-radius: 7px;

        height: fit-content;
        width: 40%;

        margin: 2%;

        overflow: hidden;
        padding: 0%;

        transition: 0.2s;
    }

    .project-container:hover{
        transform: translate(0px, -5px);
        cursor: pointer;

        background-color: var(--secondary-color);
        border-color: var(--secondary-color);
    }

    .project-container:hover > p{
        color: var(--background-color);
    }
    .project-container:hover > h3{
        color: var(--background-color);
    }
    .project-container:hover > .project-devider{
        border-color: var(--background-color);
    }

    @media (orientation:portrait){
        .project-container{
            width:80%;
        }
    }

    h3{
        margin-left: 5%;
        font-size: 1.3em;
    }

    .project-container p{
        margin-left: 5%;
        margin-right: 5%;
        font-size: 1.2em;
    }

    .project-devider{
        margin-left: 5%;
        width: 20%;
        border-bottom: 1px var(--primary-color) solid;
        height: 1px;
    }

    .read-more{
        text-align: right;
        margin-top:auto;
    }

    .project-banner{
        width: 100%;
    }

    img{
        filter: grayscale();
        transition-duration: 0.5s;
    }

    .project-container:hover > img{
        filter: none;
    }

    @keyframes fade-in-project {
        0%{
            opacity: 0%;
        }
        100%{
            opacity: 100%;
        }
    }
</style>
