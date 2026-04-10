<script>
	import github from "/images/general/github.webp?enhanced";
	import monkey from "/images/monkeytype.png?enhanced";
</script>

<section class="bottom-nav">
	<div class="nav-wrap">
		<nav class="nav-bar">
			<ul class="nav-list">
				<li class="nav-item">
					<a
						href="https://github.com/thelinuxguy-ssh"
						class="nav-item__link"
						target="_blank"
						><img
							src={github}
							loading="eager"
							alt="Github Icon"
							class="image"
						/></a
					>
					<div class="nav-item__tooltip">
						<div>Github</div>
					</div>
				</li>
				<li class="nav-item">
					<a
						href="https://monkeytype.com/profile/TheLinuxGuy-ssh"
						class="nav-item__link"
						target="_blank"
						><img
							src={monkey}
							loading="eager"
							alt="Monkeytype Icon"
							class="image"
							style="border-radius: 0.1em"
						/></a
					>
					<div class="nav-item__tooltip">
						<div>Monkeytype</div>
					</div>
				</li>
			</ul>
		</nav>
	</div>
</section>

<style>
	.bottom-nav {
		padding: var(--container-padding);
		justify-content: center;
		align-items: center;
		display: flex;
		position: fixed;
		bottom: 0.95em;
		left: 50%;
		transform: translateX(-50%);
		z-index: 99999999 !important;
	}
	@media screen and (max-width: 1024px) {
		.bottom-nav {
			left: 5em;
		}
	}

	.nav-wrap {
		z-index: 100;
		pointer-events: none;
		justify-content: center;
		align-items: flex-end;
		display: flex;
		transition: 0.4s ease-in-out;
	}
	/* .nav-wrap.scrolled {
	inset: 1em;
  } */

	.nav-list {
		flex-flow: row;
		justify-content: left;
		align-items: center;
		margin-bottom: 0;
		padding-left: 0;
		display: flex;
		font-size: 1.2em;
		height: 3em;
		transition: 0.2s ease-in-out;
	}

	.nav-item {
		justify-content: center;
		align-items: center;
		width: 2.5em;
		transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
		display: flex;
		position: relative;
		outline: 0;
	}

	.nav-item:hover {
		width: 3.5em;
	}

	/* .nav-item.sibling-close {
	width: 2.9em;
  }
  
  .nav-item.sibling-far {
	width: 2.7em;
  } */

	.nav-item__link {
		z-index: 1;
		pointer-events: auto;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		padding-left: 0.5em;
		padding-right: 0.5em;
		display: flex;
		position: relative;
	}

	.image {
		object-fit: contain;
		width: 100%;
	}

	.nav-item__tooltip {
		z-index: 0;
		background-color: var(--color-neutral-100);
		opacity: 0;
		color: #fff;
		font-family: Pro, Arial;
		white-space: nowrap;
		border-radius: 0.25em;
		padding: 0.4em 0.5em;
		font-size: 1em;
		transition:
			transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
			opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
		position: absolute;
		top: 0;
		transform: translate(0, -80%);
		font-weight: 400;
	}

	.nav-item:hover .nav-item__tooltip {
		opacity: 1;
		transform: translate(0px, -140%);
	}
</style>
