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
      const style = document.createElement("style"); //HACER FIRST MOBILE

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
				justify-content:space-between;
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
					width: 60%;
					height: 90%;

					justify-content: space-between;
				}
			}

			.draw {
				background: white;
			}

			.left-corner {
				display: flex;
				flex-direction: row-reverse;
			}
			
			.right-corner {
				
				display: flex;
				align-items: flex-end;
				align-self: self-end;
				
				animation: slideBottomUnder500 1.5s;
			}
			
			@media (min-width: 499px) {
				.left-corner {
					height: 320px;
					animation: leftZone 1.5s;
					
				}
				.right-corner {
					height: 320px;
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
				border-radius: 5px 0 10px 0;
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
					transform: translate(50%);

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
