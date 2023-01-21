<!-- BlogPost.vue -->
<script>
export default {
    props: ['icon', 'name'],
}

</script>

<template>
    <div class="lang-container">
        <i :class=icon></i>
        <p class="small-font">{{ name }}</p>
    </div>
</template>

<style>
    .lang-container{

        border: 1px black solid;
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
    }

    .lang-container::hover i{
        
    }

    i{
        font-size: 5vw;
        
    }
    .small-font{
        font-size: 0.8em !important;
    }
</style>
