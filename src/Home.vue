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

	document.onscroll = () => {
		document.querySelectorAll("*[onscroll]").forEach((element) => {
			if (element.getBoundingClientRect().top < (window.innerHeight / 2)) {
				element.classList.add("xyz-in");
				element.classList.remove("xyz-out");
			}
			else{
				element.classList.add("xyz-out");
				element.classList.remove("xyz-in");
			}
		});
	}

	document.onscroll();



});

function calculateAge(birthday) { // birthday is a date
   var ageDifMs = Date.now() - birthday;
   var ageDate = new Date(ageDifMs); // miliseconds from epoch
   return Math.abs(ageDate.getUTCFullYear() - 1970);
 }

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

	<XyzTransitionGroup class="content" id="about-me" xyz="fade left" duration="1" onscroll>
		<h2 key="1">About me</h2>
		<div class="devider" key="2"></div>
		<p key="3">Hello, my name is Julian. I am a {{ calculateAge(new Date("January 17, 2007")) }} year old software engineer & game developer and am currently studying dramatic arts.</p>
	</XyzTransitionGroup>

	<XyzTransitionGroup class="content" id="experience" xyz="fade right"  duration="1" onscroll>
		<h2 key="1">Experience</h2>
		<div class="devider" key="2"></div>
		<p key="3">
			I have done a lot of programming work in my own time; because of this I have become proficient in using many development environments. I have experience using Visual Studio, VSCode, Sublime Text, Neovim, Pycharm, GoLand, and Intellij Idea.
		</p>
	</XyzTransitionGroup>

	<XyzTransitionGroup class="content" id="languages" xyz="fade left" duration="1" onscroll>		
		<h3 key="1">Programming Languages</h3>

		<div class="devider" key="2"></div>

		<XyzTransitionGroup key="3" xyz="fade up stagger" duration="0.1" id="language-wrapper" appear-visible >
			<Language icon="devicon-go-original-wordmark" name="Golang" key="1"></Language>
			<Language icon="devicon-python-plain" name="Python" key="2"></Language>
			<Language icon="devicon-javascript-plain" name="Javascript" key="3"></Language>
			<Language icon="devicon-typescript-plain" name="Typescript" key="4"></Language>
			<Language icon="devicon-c-plain" name="C" key="5"></Language>
			<Language icon="devicon-lua-plain" name="Lua" key="6"></Language>
			<Language icon="devicon-java-plain" name="Java" key="7"></Language>
			<Language icon="devicon-kotlin-plain" name="Kotlin" key="8"></Language>
			<Language icon="devicon-csharp-plain" name="C#" key="9"></Language>
			<Language icon="devicon-rust-plain" name="Rust" key="12"></Language>
		</XyzTransitionGroup>
	</XyzTransitionGroup>

	<XyzTransitionGroup class="content" id="frameworks" xyz="fade right" duration="1" onscroll>		
		<h3 key="1">Frameworks</h3>

		<div class="devider" key="2"></div>

		<XyzTransitionGroup key="3" xyz="fade up stagger" duration="0.1" id="language-wrapper" appear-visible >
			<Language icon="devicon-vuejs-plain" name="Vuejs" key="1"></Language>
			<Language icon="devicon-nodejs-plain" name="Node" key="2"></Language>
			<Language icon="devicon-ionic-original" name="Ionic" key="3"></Language>
			<Language icon="devicon-unity-original" name="Unity" key="4"></Language>
			<Language icon="devicon-socketio-original" name="Socket.io" key="5"></Language>
			<Language icon="devicon-discordjs-plain" name="Discord.js" key="5"></Language>
		</XyzTransitionGroup>
	</XyzTransitionGroup>

	<XyzTransitionGroup class="content" id="frameworks" xyz="fade left" duration="1" onscroll>		
		<h3 key="1">Tools</h3>

		<div class="devider" key="2"></div>

		<XyzTransitionGroup key="3" xyz="fade up stagger" duration="0.1" id="language-wrapper" appear-visible >
			<Language icon="devicon-blender-original" name="Blender" key="1"></Language>
			<Language icon="devicon-ubuntu-plain" name="Ubuntu" key="2"></Language>
			<Language icon="devicon-raspberrypi-line" name="Raspberry Pi" key="3"></Language>
			<Language icon="devicon-npm-original-wordmark" name="NPM" key="4"></Language>
			<Language icon="devicon-linux-plain" name="Linux" key="5"></Language>
			<Language icon="devicon-inkscape-plain" name="Inkscape" key="6"></Language>
			<Language icon="devicon-git-plain" name="Git" key="7"></Language>
			<Language icon="devicon-github-original" name="Git" key="8"></Language>
			<Language icon="devicon-gimp-plain" name="Gimp" key="9"></Language>
			<Language icon="devicon-canva-original" name="Canva" key="10"></Language>
			<Language icon="devicon-arduino-plain" name="Arduino" key="11"></Language>

		</XyzTransitionGroup>
	</XyzTransitionGroup>

	

	<XyzTransitionGroup id="projects" xyz="fade up" duration="1" onscroll>		
		<h2 key="1">Projects</h2>
		<div class="devider" key="2"></div>
	</XyzTransitionGroup>

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
		<Project title="Open Mario Maker" img="./src/assets/open-mario-maker.png"
			href="https://github.com/Umi-L/open-mario-maker">A mario maker recreation on desktop using ebitengine and golang.</Project>
		<Project title="Dusk Example Project" img="./src/assets/dusk-example.png"
			href="https://github.com/Umi-L/dusk-example-project">A Gameboy Advance tech demo written in c with the DuSK library.</Project>
	</div>

	<Footer></Footer>
</template>

<style>
@import './assets/variables.css';

#typed{
	color: var(--background-color);
	background-color: var(--secondary-color);

	padding-left: 2px;
	padding-right: 2px;
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
	margin-bottom: 1em;
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
