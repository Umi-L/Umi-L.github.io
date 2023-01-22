<template>
    <div id="left-curtain"></div>
    <div id="right-curtain"></div>
</template>

<script>
    window.addEventListener("load", function(event) {
        document.querySelector("body").classList.add("stop-scroll");


        const left = document.getElementById('left-curtain');
        const right = document.getElementById('right-curtain');

        left.addEventListener('animationend', () => {
            left.remove();
        });

        right.addEventListener('animationend', () => {
            right.remove();
            this.document.querySelector("body").classList.remove("stop-scroll");
        });
    });
</script>

<style>

    @keyframes left-pull {
        0%{
            left:0%;
            border-right: 1px solid var(--separator-color);
        }

        10%{
            border-right: 1px solid var(--separator-color);
        }

        100%{
            left:-100%;
        }
    }

    @keyframes right-pull {
        0%{
            right: 0%;
            border-left: 1px solid var(--separator-color);
        }

        10%{
            border-left: 1px solid var(--separator-color);
        }

        100%{
            right: -100%;
        }
    }

    #left-curtain{
        left:0%;
        width:50%;
        height: 100%;
        background-color: var(--background-color);
        position: fixed;
        animation: left-pull 1s ease-in 2s;
        animation-fill-mode: forwards;  
    }
    #right-curtain{
        right:0%;
        width:50%;
        height: 100%;
        background-color: var(--background-color);
        position: fixed;
        animation: right-pull 1s ease-in 2s;
        animation-fill-mode: forwards;  
    }

    .left-anim{
        animation: left-pull 1s ease-in 1s;
    }

    .right-anim{
        animation: right-pull 1s ease-in 1s;
    }
</style>