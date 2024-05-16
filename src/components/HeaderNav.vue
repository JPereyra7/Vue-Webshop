<script setup lang="ts">



</script>

<template>
<div class="navBarContainer">
    <img src="/src/assets//logogo.png" class="navLogo"></img>
    <ul class="navLinksContainer">
        <li><a class="linkText" href="#">Home</a></li>
        <li><a a class="linkText" href="#">About us</a></li>
        <li><a a class="linkText" href="#">Contact</a></li>
    </ul>
</div>
</template>

<style scoped>
.navBarContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* margin-top: 1em; */
    /* gap: 25rem; */}

.navLinksContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 1em;
    list-style: none;
    margin-right: 2em;
    
}

.navLogo {
    margin-left: 1em;
    width: 170px;
}

.linkText {
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    margin-right: 2em;
}

</style>
