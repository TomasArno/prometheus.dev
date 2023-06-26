const logo = require('../../assets/prometheus-logo.png');

customElements.define(
	'init-welcome',
	class InitWelcome extends HTMLElement {
		shadow = this.attachShadow({ mode: 'open' });

		constructor() {
			super();
		}

		connectedCallback() {
			this.render();
		}

		addStyles() {
			const style = document.createElement('style');

			style.innerHTML = `
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
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

			.main_content {
				display: flex;
				justify-content: center;
    			align-items: center;

				background: #bfbfbf12;
				visibility: hidden;
				opacity: 0;

				position: absolute;
				top: 7%;
				left: 12%;
				right: 12%;
				bottom: 7%;

				animation: contentDelay 2s 1.5s forwards;
			}

			.logo {
				width: 9vmin;
				height: 9vmin;
			}

			.welcome {
				color: white;
				font-size: 9vmin;
			}`;

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
						<img class="logo" src="${logo}" />
						<h1 class="welcome">prometheus</h1>
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
