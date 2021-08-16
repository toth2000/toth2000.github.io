import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Head from 'next/head';

// import Timeline from '../components/TimeLine/TimeLine';

const Home = () => {
  return (
    <>
      <Head>
        <title>Tothagata's Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        {/* <Timeline /> */}
        <Acomplishments />
      </Layout>
    </>
  );
};

export default Home;
