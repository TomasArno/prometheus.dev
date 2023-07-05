customElements.define(
	'init-welcome',
	class InitWelcome extends HTMLElement {
		// shadow = this.attachShadow({ mode: 'open' });

		constructor() {
			super();
		}

		connectedCallback() {
			this.render();
		}

		render() {
			const componentEl = document.querySelector('init-welcome');

			componentEl.innerHTML = `
      		<main id="welcome" class="main">

      			<div class="complete-draw">

      				<div class="left-corner">
      					<div class="draw top"></div>
      					<div class="draw left"></div>
      				</div>

      				<div class="main_content">
      					<div class="welcome">
							<nav class="welcome_nav">
								<ul>
									<li><a href="#welcome">Welcome</a></li>
									<li class="nav_li_separator">-</li>
									<li><a href="#about">About Us</a></li>
									<li class="nav_li_separator">-</li>
									<li><a href="#projects">Projects</a></li>
									<li class="nav_li_separator">-</li>
									<li><a href="#contact">Contact</a></li>
								</ul>
							</nav>
							<h1 class="welcome_title"><span class="animated_span" style="--start-color:#007CF0; --end-color:#00DFD8; --content: 'Plan';">Plan</span> <span class="h1_arrow">></span> <span class="animated_span" style="--start-color:#7928CA; --end-color:#FF0080; --content: 'Develop'; --animation:a2;">Develop</span> <span class="h1_arrow">></span> <span class="animated_span" style="--start-color:#FF4D4D; animation-name:a3; --end-color:#F9CB28; --content: 'Deploy'; --animation: a3">Deploy</span></h1>
						</div>
      				</div>

      				<div class="right-corner">
      					<div class="draw rigth"></div>
      					<div class="draw bottom"></div>
      				</div>
      			</div>
      		</main>
			
			<section id="about" class="about-us">
				
			</section>
			<section id="projects" class="projects">
				
			</section>
			<section id="contact" class="contact">
				
			</section>
			`;
		}
	}
);
