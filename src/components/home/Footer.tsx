import { Component, JSXElement } from 'solid-js';
import { Facebook, Github, Instagram, Linkedin, Twitter } from '../../icons';

const SocialIcon: Component<{ icon: JSXElement; url: string }> = (props) => (
  <a
    href={props.url}
    rel="noreferrer noopener"
    target="_blank"
    class="social-icon"
    style={{ width: '40px', height: '40px' }}
  >
    <div style={{ display: 'block', position: 'relative', width: '100%', height: '100%' }}>
      {props.icon}
    </div>
  </a>
);

export const Footer: Component = () => {
  return (
    <div>
      <section class="footer">
        <SocialIcon url="https://github.com/Devoleum" icon={<Github />} />
        <SocialIcon url="https://www.instagram.com/devoleum" icon={<Instagram />} />
        <SocialIcon url="https://www.facebook.com/Devoleum" icon={<Facebook />} />
        <SocialIcon url="https://www.linkedin.com/company/18328810" icon={<Linkedin />} />
        <SocialIcon url="https://twitter.com/devoleum" icon={<Twitter />} />
      </section>
      <div style={{ 'font-size:': '0.6em', 'word-break:': 'break-all ', 'text-align:': 'center' }}>
        <div>Donate to</div>
        <div>ETH: 0xbf8d0d4be61De94EFCCEffbe5D414f911F11cBF8</div>
        <div>ALGO: 5N22O3PIXAGNAGHBFSU6HQ22KGI4D3XEBACEFODVH3UOKCA4C2IBRD4ZDE</div>
        <br />
        <br />
      </div>
    </div>
  );
};
