<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Logo from "./components/Logo.vue"
import CurtainAnimation from "./components/CurtainAnimation.vue"
import Topbar from "./components/Topbar.vue"
import Footer from "./components/Footer.vue"
import Project from "./components/Project.vue"
import Language from "./components/PLanguage.vue"

import "./vivus.min.js";
import Typed from "./typed/typed.js"

let svgItems = ["./src/assets/terminal.svg", "./src/assets/controller.svg", "./src/assets/journal.svg"]

window.addEventListener("load", function (event) {

	let svgDiv = document.getElementById("item-svg");

	let lastDrawn;

	var options = {
		strings: ["a programmer.", "a game developer.", "a student."],
		typeSpeed: 100,
		backSpeed: 100,
		startDelay: 4500,
		smartBackspace: true,
		showCursor: true,
		backDelay: 700,
		preStringTyped: (arrayPos) => {
			svgDiv.innerHTML = ""
			lastDrawn = new Vivus("item-svg", { duration: 100, file: svgItems[arrayPos], type: "sync" });
		},
		onStringTyped: (arrayPos) => {
			if (arrayPos != svgItems.length - 1)
				lastDrawn.play(-1);
			else {
				let downArrow = document.getElementById("down-arrow");
				downArrow.setAttribute("style", "")
				downArrow.classList.add("fade-in");
			}
		},
	};

	new Typed('#typed', options);

});
</script>

<template>

	<Topbar></Topbar>

	<CurtainAnimation></CurtainAnimation>
	<Logo></Logo>

	<div class="first-page">
		<h2>Julian O'Grady</h2>
		<div class="devider"></div>

		<div class="typed-container">
			<p style="margin-right: 10px;">I'm</p><p id="typed"></p>
		</div>
	</div>
	<div id="item-svg"></div>
	<img id="down-arrow" src="./assets/down-arrow.svg" style="display:none;">

	<div class="content" id="about-me">
		<h2>About me</h2>
		<div class="devider"></div>
		<p>Hello, my name is Julian. I am a software engineer & game developer and am currently studying dramatic arts.</p>
	</div>

	<div class="content" id="experience">
		<h2>Experience</h2>
		<div class="devider"></div>
		<p>
			I have done a lot of programming work in my own time; because of this I have become proficient in using many development environments. I have experience using Visual Studio, VSCode, Sublime Text, Neovim, Unity, Pycharm, GoLand, and Intellij Idea.
		</p>
	</div>

	<div class="content" id="languages">
		<h3>Programming Languages</h3>

		<div class="devider"></div>

		<div id="language-wrapper">
			<Language icon="devicon-go-original-wordmark" name="Golang"></Language>
			<Language icon="devicon-python-plain" name="Python"></Language>
			<Language icon="devicon-javascript-plain" name="Javascript"></Language>
			<Language icon="devicon-typescript-plain" name="Typescript"></Language>
			<Language icon="devicon-c-plain" name="C"></Language>
			<Language icon="devicon-lua-plain" name="Lua"></Language>
			<Language icon="devicon-java-plain" name="Java"></Language>
			<Language icon="devicon-kotlin-plain" name="Kotlin"></Language>
			<Language icon="devicon-csharp-plain" name="C#"></Language>
			<Language icon="devicon-nodejs-plain" name="Node"></Language>
			<Language icon="devicon-vuejs-plain" name="Vuejs"></Language>
			<Language icon="devicon-rust-plain" name="Rust"></Language>
		</div>
	</div>

	

	<div id="projects">
		<h2>Projects</h2>
		<div class="devider"></div>
	</div>

	<div id="project-wrapper">
		<Project title="Pumpkin Spice" img="./src/assets/pumpkin-spice.png"
			href="https://um1.itch.io/pumpkin-spice-post-jam">A solo rythmn game made in 3 days for the Cozy Fall Jam
			2021 in which it placed 8th overall and 2nd for presentation.</Project>
		<Project title="It Spreads" img="./src/assets/it-spreads.jpg" href="https://um1.itch.io/it-spreads">A solo
			puzzle game made in a week for the UW Games Institute virtual game jam where it jointly won the people's
			choice award.</Project>
		<Project title="Wave Reader" img="./src/assets/wave-reader.png" href="https://github.com/Umi-L/wave-reader/">An
			epub reader made using Ionic, Angularjs, EPUB.js, and the dropbox api.</Project>
		<Project title="Hue-nx" img="./src/assets/hue-nx.jpg" href="https://github.com/Umi-L/hue-nx">A port of the
			mobile game "I Love Hue" to the nintendo switch using the love potion framework.</Project>
		<Project title="Slather" img="./src/assets/slather.png"
			href="https://github.com/Umi-L/slather-client/tree/master">A slither.io clone made to learn websocket using
			typescript & nodejs for the backend and typescript & canvas for the frontend.</Project>
	</div>

	<Footer></Footer>
</template>

<style>
@import './assets/variables.css';

#typed{
	color: var(--background-color);
	background-color: var(--secondary-color);
}

.typed-cursor{
	color: var(--secondary-color);
	background-color: var(--secondary-color);
	font-size: 1.5em;
	align-items: center;
	display: flex;

	margin-top: 24px;
	margin-bottom: 24px;

	width: 0.7em;
}

p {
	color: var(--primary-color);
}

h2, h3 {
	color: var(--secondary-color);
}

.stop-scroll {
	overflow-y: hidden;
}

@keyframes bob {

	0%,
	100% {
		transform: translate(-50%, 0px);
	}

	50% {
		transform: translate(-50%, -10px);
	}
}

@keyframes fade-in {
	0% {
		opacity: 0%;
	}

	100% {
		opacity: 100%;
	}
}

body {
	margin: 0%;

	overflow-x: hidden;
	font-family: 'Roboto', sans-serif;

	background-color: var(--background-color);
}

.first-page {
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	width: 60%;
}

#project-wrapper {
	display: flex;

	flex-wrap: wrap;
	flex-direction: row;

	justify-content: center;
}

#language-wrapper {
	display: flex;

	flex-wrap: wrap;
	flex-direction: row;

	justify-content: left;
	
}

#projects {
	font-size: 2em;

	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: column;
}

.content {
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	width: 60%;
	margin-bottom: 100px;
}

.typed-container{
	display: flex;
	flex-direction: row;
}


.underlined {
	border-bottom: 1px solid rgb(195, 195, 195);
}

.first-page h2 {
	font-size: 3em;
}

.first-page p {
	font-size: 1.5em;
	height: 1.5em
}

.content h2 {
	font-size: 3em;
}

.content h3 {
	display: block;
    font-size: 2.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.content p {
	font-size: 1.5em;
	line-height: 1.3em;
}


.devider {
	width: 10%;
	border-bottom: 1px var(--primary-color) solid;
}

#down-arrow {
	position: absolute;
	top: 90%;
	left: 50%;
	width: 70px;

	transform: translateX(-50%);

	color: var(--separator-color);

	filter: invert();
}

.fade-in {
	animation: fade-in 2s ease-out forwards, bob 1s ease-in-out infinite;
}

path{
	fill: var(--secondary-color) !important;
	stroke: var(--secondary-color) !important;
}


@media screen and (min-width: 750px) {
	#item-svg {
		width: 25%;
		position: absolute;
		top: 50vh;
		right: 20vw;

		transform: translate(50%, -50%);
	}
}

@media not screen and (min-width: 750px) {
	#item-svg {
		display: none;
	}

	.devider {
		width: 100px;
	}
}
</style>
