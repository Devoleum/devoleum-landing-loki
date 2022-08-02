import { Component } from 'solid-js';
import {
  Collab,
  DevoleumIntro,
  Divider,
  FeaturesDetails,
  Footer,
  HeadPress,
  Hero,
  Team,
} from '../../components';

export const Home: Component = () => {
  return (
    <div>
      <a id="home" />
      <Hero color="#a2ba24" />
      <HeadPress color="antiquewhite" />
      <a id="about" />
      <DevoleumIntro color="#a2ba24" />
      <Collab color="#f6f6f6" />
      <a id="features" />
      <FeaturesDetails color="#fff" />
      <a id="team" />
      <Team color="#f6f6f6" />
      <a id="donate" />
      <Footer />
    </div>
  );
};
