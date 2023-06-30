customElements.define(
  "init-welcome",
  class InitWelcome extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });

    constructor() {
      super();
    }

    connectedCallback() {
      this.render();
    }

    addStyles() {
      const style = document.createElement("style");

      style.innerHTML = `
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			font-family: 'Poppins', sans-serif;
		}

		body {
			width: 100vw;
			height: 100vh;
		}
		
		.main {
			height: 100%;
			width: 100%;
			display:flex;
			justify-content: center;
			align-items: center;
		}
		
		.complete-draw {
			display: flex;
			
			width: 100%;
			height: 100%;
		}
		
		@media (min-width: 499px) {
			.complete-draw {
				width: 80%;
				height: 90%;
				justify-content: space-between;
			}
		}
		
		.draw {
			background: white;
		}
		
		.left-corner {
			width: 25%;
			height: 110px;
			align-self: self-start;
		}
		
		.right-corner {
			display: flex;
			align-items: flex-end;
			
			animation: slideBottomUnder500 1.5s;
		}
		
		@media (min-width: 499px) {
			.left-corner {
				width: initial;
				height: initial;
				display: flex;
				flex-direction: row-reverse;
				animation: leftZone 1.5s;
		
			}
			.right-corner {
				width: initial;
				height: initial;
				
				animation: rightZone 1.5s;
			
			}
		}
		
		.top {
			width: 100px;
			height: 10px;
			border-radius: 0 0 10px 0;
		
		}
		
		.rigth {
			width: 100px;
			height: 5px;
		
		}
		
		@media (min-width: 499px) {
			.top, .rigth {
				width: 250px;
				height: 14px;
			}
		
			.rigth {
				border-radius: 10px 0 0 0;
			}
		}
		
		.left {
			width: 10px;
			height: 100px;
			border-radius: 0 0 10px 0;
		}
		
		.bottom {
			width: 100px;
			height: 5px;
		}
		
		@media (min-width: 499px) {
			.left, .bottom {
				width: 14px;
				height: 250px;
			}
		
			.bottom {
				border-radius: 10px 0 5px 0;
			}
		}
		
		@keyframes slideBottomUnder500 {
			0% {
				transform: translate(500px);
			}	
		
			100% {
				transform: translate(0);
		
			}
		}
		
		@keyframes leftZone {
			0% {
				transform: translate(130px, 130px);
			}
		
			100% {
				transform: translate(0, 0);
		
			}
		}
		
		@keyframes rightZone {
			0% {
				transform: translate(-130px, -130px);
		
			}
		
			100% {
				transform: translate(0, 0);
			
			}
		}
		
		@keyframes contentDelay {
			100% {
				visibility: visible;
				opacity: 1;
			
			}
		}
		
		@keyframes gradient {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
		@keyframes a {
			0%,16.667%,100% {
				opacity: 1;
			}
			33.333%,83.333% {
				opacity: 0;
			}
		}
		@keyframes a2 {
			0%,100% {
				opacity: 0;
			}
			33.333%,50% {
				opacity: 1;
			}
			16.667%,66.667% {
				opacity: 0;
			}
		}
		@keyframes a3 {
			0%,50%,100% {
				opacity: 0;
			}
			66.667%,83.333% {
				opacity: 1;
			}
		}
		
		.main_content {
			display: flex;
			justify-content: center;
			
			background: #bfbfbf10;
			visibility: hidden;
			opacity: 0;
			
			position: absolute;
			top: 7%;
			left: 12%;
			right: 12%;
			bottom: 7%;
			
			animation: contentDelay 2s 1.5s forwards;
		}
		
		.welcome {
			color: white;
			margin-top: 30%;
			height:fit-content;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		
		.welcome_title {
			color: #FFFFFF;
			height:fit-content;
			font-size: 25px;
		}
		
		.h1_arrow {
			background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
			background-size: 300%;
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
			animation: gradient 6s ease infinite;
		}
		
		.welcome_nav {
			display: flex;
			justify-content: center;
			  height: fit-content;
			  font-size: 8px;
			width: 100%;
		  }

		.welcome_nav ul {
			display: flex;
			justify-content: space-between;
			width: 54%;
		}

		.welcome_nav li {
			display: flex;
			justify-content: center;
			list-style: none;
			flex-grow: 1;
			transition: all 0.54s;
		}

		.welcome_nav li:hover {
			color: white;
			flex-grow: 1.35;
		}

		.welcome_nav li a {
			color: #ffffffb1;
			text-decoration: none;
		}

		.welcome_nav li a:hover {
			color: #ffffff;
		}

		.nav_li_separator {
			font-size: 1.08em;
		}
		
		@media (min-width: 499px) {
		
			.welcome {
				width: 100%;
				margin-top: 15%;
				font-weight: bold;
			
			}
		
			.welcome_title {
				font-size: 85px;
				letter-spacing: -4px;
				line-height: 1.3;
			}
			.animated_span {
				position: relative;
			}
		
			.animated_span::before {
				animation-name: var(--animation, a);
				animation-duration: 8s;
				animation-iteration-count: infinite;
				background: linear-gradient(90deg, var(--start-color), var(--end-color));
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				position: absolute;
				content: var(--content);
				opacity: 1;
			}
			.welcome_nav {
				font-size: 25px;
				line-height: 2;
			}
		
			.nav_li_separator {
					margin:0 10px;
			}
		}
		`;
      this.shadow.appendChild(style);
    }

    render() {
      this.shadow.innerHTML = `

      		<div class="main">
      			<div class="complete-draw">

      				<div class="left-corner">
      					<div class="draw top"></div>
      					<div class="draw left"></div>
      				</div>

      				<div class="main_content">
      					<div class="welcome">
							<nav class="welcome_nav">
								<ul>
									<li><a href="#">Welcome</a></li>
									<li class="nav_li_separator">-</li>
									<li><a href="#">About Us</a></li>
									<li class="nav_li_separator">-</li>
									<li><a href="#">Projects</a></li>
									<li class="nav_li_separator">-</li>
									<li><a href="#">Contact</a></li>
								</ul>
							</nav>
							<h1 class="welcome_title"><span class="animated_span" style="--start-color:#007CF0; --end-color:#00DFD8; --content: 'Plan';">Plan</span> <span class="h1_arrow">►</span> <span class="animated_span" style="--start-color:#7928CA; --end-color:#FF0080; --content: 'Develop'; --animation:a2;">Develop</span> <span class="h1_arrow">►</span> <span class="animated_span" style="--start-color:#FF4D4D; animation-name:a3; --end-color:#F9CB28; --content: 'Deploy'; --animation: a3">Deploy</span></h1>
      					</div>
      				</div>

      				<div class="right-corner">
      					<div class="draw rigth"></div>
      					<div class="draw bottom"></div>
      				</div>
      			</div>
      		</div>

      		`;

      this.addStyles();
    }
  }
);
