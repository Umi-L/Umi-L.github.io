<template>
    <div class="social-buttons">
        <ul>
            <li><a target="_blank" href="https://twitter.com/Julian_Ogradyy" class="fa fa-twitter"></a></li>
            <li><a target="_blank" href="https://github.com/Umi-L" class="fa fa-github"></a></li>
            <li><a target="_blank" href="mailto:julianogrady07@gmail.com" class="fa fa-envelope"></a></li>
            <li><a target="_blank" href="https://um1.itch.io/" class="fa-brands fa-itch-io"></a></li>
        </ul>
    </div>
</template>

<script>

</script>

<style>

    .social-buttons{
        font-size: 1.5em;

        margin-top: 200px;
        border-top: 1px solid var(--separator-color);
        width: 100%;
        height: 72px;

        display:flex;
        flex-direction: row;
        justify-content: center;
    }

    .social-buttons ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        margin-top: auto;
        margin-bottom: auto;
    }   
    .social-buttons li{
        float:left;
        text-align: center;
        padding: 0px 16px;
    }

    .social-buttons li a{
        text-decoration: none;
        color: var(--primary-color);
        transition: 0.1s;
    }

    .social-buttons li a:hover{
        color: var(--secondary-color);
    }
</style>