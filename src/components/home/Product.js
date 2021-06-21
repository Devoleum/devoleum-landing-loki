import LocalizedStrings from 'localized-strings';

const strings = new LocalizedStrings({
	en: {
		by: 'by',
		more: 'Read more'
	},
	it: {
		by: 'di',
		more: 'Scopri di più'
	}
});

const imgStyle = { width: '200px', height: '200px', objectFit: 'cover' };
const Product = ({ product, fullText = false }) => (
	<div className="card_container">
		<div className="card_image">
			<img src={product.img} style={imgStyle} />
		</div>
		<div className="card_text">
			<div className="card_text_title"><h3>{product.title}</h3></div>
			{product.merchant && (
				<div>
					{strings.by}{' '}
					<span className="card_text_merch">
						{product.merchant}
					</span>
					<br />
				</div>
			)}

			<div className="card_text_desc">
				{product.desc}
			</div>
			<div>
				<div className="card_text_more">
					<a href={product.link} target="_blank">
                Link
					</a>
				</div>
			</div>
		</div>
	</div>
);

export default Product;
