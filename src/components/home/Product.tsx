import { Component } from 'solid-js';

interface IProduct {
  title: string;
  img: string;
  desc: string;
  link: string;
}

interface Props {
  product: IProduct;
}

const imgStyle = { width: '200px', height: '200px', objectFit: 'cover' };

export const Product: Component<Props> = (props) => (
  <div class="card_container">
    <div class="card_image">
      <img src={props.product.img} style={imgStyle} />
    </div>
    <div class="card_text">
      <div class="card_text_title">
        <h3>{props.product.title}</h3>
      </div>

      <div class="card_text_desc">{props.product.desc}</div>
      <div>
        <div class="card_text_more">
          <a href={props.product.link} target="_blank">
            Link
          </a>
        </div>
      </div>
    </div>
  </div>
);
