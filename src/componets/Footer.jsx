export default function Footer() {
	return (
		<section className="footer">
			<div className="footer--information">
				<div className="company--name">
					CASH SPLASH
				</div>

				<div className="social--media">
					<a href="https://www.facebook.com/kuylsibanda" target="_blank" rel="noopener noreferrer">
						<img src="./icons/facebook.svg" alt="Facebook" className="social--media--icon" />
					</a>
					<a href="https://www.instagram.com/kuyl.dev" target="_blank" rel="noopener noreferrer">
						<img src="./icons/instagram.svg" alt="Instagram" className="social--media--icon" />
					</a>
					<a href="https://www.tiktok.com/@luckysib.dev" target="_blank" rel="noopener noreferrer">
						<img src="./icons/tiktok.svg" alt="TikTok" className="social--media--icon" />
					</a>
					<a href="https://www.twitter.com/KuylSib_dev" target="_blank" rel="noopener noreferrer">
						<img src="./icons/twitter.svg" alt="Twitter" className="social--media--icon" />
					</a>
				</div>
			</div>

			<div className="legal--stuff">
				<div>
					&copy; Copyright CASH SPLASH Pty Ltd.
				</div>
				<div>This is a demo website.</div>
				<div>
					All rights reserved. CASH SPLASH is not a registered entity.
				</div>
				<div>
					Privacy: POPIA Act of 2020 Compliance
				</div>
			</div>
		</section>

	)
}