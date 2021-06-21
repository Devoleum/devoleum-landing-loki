import { SocialIcon } from 'react-social-icons';

export function Footer() {
	return (
		<div>
			<section className="footer">
				<SocialIcon url="https://github.com/Devoleum" />
				<SocialIcon url="https://www.instagram.com/devoleum" />
				<SocialIcon url="https://www.facebook.com/Devoleum" />
				<SocialIcon url="https://www.linkedin.com/company/18328810" />
				<SocialIcon url="https://twitter.com/devoleum" />
			</section>
			<div align="center">
				<div>
					Donate to
				</div>
				<div>
            ETH: 0x0F4cC51fd25E7E9954BBcc33efCB2A36B7Ab8904
				</div>
				<div>
            ALGO: 5N22O3PIXAGNAGHBFSU6HQ22KGI4D3XEBACEFODVH3UOKCA4C2IBRD4ZDE
				</div>
				<br />
				<br />
			</div>
		</div>
	);
}
