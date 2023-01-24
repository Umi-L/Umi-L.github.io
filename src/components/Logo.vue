<template lang="">
    <div id="logo"></div>
</template>


<script>
    import "../vivus.min.js";

    function assets(){
        if (window.location.hostname == "localhost")
            return "./src/assets/"
        else
            return "/assets/"
    }

    window.addEventListener("load", function(event) {

        let logo = document.getElementById("logo");

        new Vivus("logo", {duration:70, file:assets() + "logo.svg", type:"sync"}, callback);

        function callback(){
            logo.setAttribute("class", "flyOff");
            logo.onanimationend = ()=>{
                console.log("done")
                logo.remove();
            }
        }
    });
</script>


<style>
    @keyframes flyUp {
        0%{
            top: 50%;
        }

        100%{
            top: -20%;
        }
    }

    .flyOff{
        animation-name: flyUp;
        animation-duration: 0.3s;
        animation-timing-function: ease-in;
        animation-delay: 0.5s;
    }

    #logo{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        width: 20%;
    }
</style>