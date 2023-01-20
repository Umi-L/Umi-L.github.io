<template>
    <div id="topbar">
        <div class="name">
            <h2>Julian O'Grady</h2>
        </div>
        <div class="nav-container">
            <ul>
                <li><a href="#about-me">about</a></li>
                <li><a href="#experience">experience</a></li>
                <li><a href="#projects">projects</a></li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style>

    #topbar{
        top:0%;
        position: absolute;
        width: 100%;
        height: 72px;
        background-color: white;
        border-bottom: 1px solid rgb(195, 195, 195);

        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .name{
        margin-left: 5%;
        width: fit-content;
        padding-left: 10px;
        padding-right: 10px;
    }

    .outlined{
        outline: 1px solid rgb(195, 195, 195);
    }

    @media screen and (min-width: 530px) {
        .nav-container{
            display:flex;
            flex-direction: row;
            height: 100%;
            margin-right: 5%;
        }
    }

    @media not screen and (min-width: 530px) {
        .nav-container{
            display: none;
        }
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        margin-top: auto;
        margin-bottom: auto;
    }   
    li{
        float:left;
        text-align: center;
        padding: 0px 16px;
    }

    li a{
        text-decoration: none;
        color: black;
        transition: 0.1s;
    }
    a:hover{
        color: rgb(63, 63, 63);
        border-bottom: 2px solid black
    }
</style>