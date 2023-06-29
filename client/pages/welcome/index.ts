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
      		}

      		.header {
      			height: 60px;
      			background-color: rgba(240, 240, 240, 0.200);
      			border-bottom: rgba(245,238,230,.5);
      			display:flex;
      			justify-content: space-between;
      			align-items:center;
      		}

      		.ul_nav {
      			list-style:none;
      			display: flex;
      			column-gap: 12px;
      			margin: 0 20px 0 0;
      		}

      		.li_nav {
      			font-size: 30px;
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
      				border-radius:  10px 0 5px 0;
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
      			height:fit-content;
      			font-size: 8px;
      		}

      		li {
      			list-style: none;
      			float:left;
      		}

      		li a {
      			color: #DAD7D7;
      			text-decoration: none;

      		}

      		.nav_li_separator {
      			margin:0 5px;
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
      				line-height: 1;
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
      // <header class="header">
      // 	<img src="https://picsum.photos/40/40" alt="logo.png">
      // 	<nav class="nav">
      // 		<ul class="ul_nav">
      // 			<li class="li_nav">Welcome</li>
      // 			<li class="li_nav">Projects</li>
      // 			<li class="li_nav">About Us</li>
      // 		</ul>
      // 	</nav>
      // </header>

      this.shadow.innerHTML = `

      		<div class="main">
      			<div class="complete-draw">
      				<div class="left-corner">
      					<div class="draw top"></div>
      					<div class="draw left"></div>
      				</div>
      				<div class="main_content">
      					<div class="welcome">
      						<h1 class="welcome_title">Plan <span class="h1_arrow">></span> Develop <span class="h1_arrow">></span> Deploy</h1>
      						<nav class="welcome_nav"><ul><li><a href="welcome">Welcome</a><span class="nav_li_separator">|</span></li><li><a href="about-us">About Us</a><span class="nav_li_separator">|</span></li><li><a href="projects">Projects</a><span class="nav_li_separator">|</span></li><li><a href="contact">Contact</a></li></ul></nav>
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