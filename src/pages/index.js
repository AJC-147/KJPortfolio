import React from 'react';
import Layout from '../components/Layout'; //needs to be modded
import Sidebar from '../components/Sidebar'; //new
import Landing from '../sections/Landing';  //needs to be modded
// import Scrolling from '..sections/Scrolling'; //new
import Projects from '../sections/Projects'; //needs to be modded
import About from '../sections/About';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <Landing />
    <About />
    <Projects />
  </Layout>
);

export default IndexPage;
