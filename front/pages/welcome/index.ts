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
				display:flex;
				justify-content: center;
				align-items: center;
			}

			.complete-draw {
				width: 700px;
				height: 700px;

				display: flex;
    			justify-content: space-between;
			}

			.draw {
				border-radius:1px;
				background: white;
			}

			.left-corner {
				height: 320px;
				
				display: flex;
				flex-direction: row-reverse;
				
				animation: leftZone 1.5s;
			}
			
			.right-corner {
				height: 320px;

				display: flex;
				align-items: flex-end;
				align-self: self-end;
				
				animation: rightZone 1.5s;
			}
			
			.top {
				width: 300px;
				height: 20px;
				
			}
			.left {
				width: 20px;
				height: 300px;
			}
			.rigth {
				width: 300px;
				height: 20px;
			}
			.bottom {
				width: 20px;
				height: 300px;
			}

			@keyframes leftZone {
				0% {
					transform: translate(190px, 190px);
					
				}
				
				100% {
					transform: translate(0, 0);
					
				}
			}
			
			@keyframes rightZone {
				0% {
					transform: translate(-190px, -190px);
					
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
