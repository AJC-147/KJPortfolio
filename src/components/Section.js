import React from 'react';
import styled from 'styled-components';
import { Section } from 'react-scroll-section';
import PropTypes from 'prop-types';

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;

  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
`;

const Heading = styled.h2`
  box-sizing: border-box;
  margin: 0px;
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;


const DefaultBackground = () => <div />;

//----------------------------------------------------------------------//
//------------------------Dont Edit Text Below--------------------------//
//----------------------------------------------------------------------//

const Container = ({ id, children, Background = DefaultBackground }) => (
  <Section id={id} style={{ position: 'relative' }}>
    <Background />
    <SectionContainer>{children}</SectionContainer>
  </Section>
);

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  Background: PropTypes.func,
};

const Header = ({ name }) => (
    <Heading>
        {name}
    </Heading>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
};

//----------------------------------------------------------------------//

const LandingComp = ({ id, children }) => (
  <Section id={id} style={{ position: 'relative' }}>

    <SectionContainer>{children}</SectionContainer>
  </Section>
);

LandingComp.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  Background: PropTypes.func,
};

const ScrollingComp = ({ name, icon = '', label = '' }) => (
    <Heading color="secondaryDark" mb={4}>
      <LinkAnimated selected>
        {name}
        {icon && (
          <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
            {icon}
          </span>
        )}
      </LinkAnimated>
    </Heading>
);

ScrollingComp.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default {
  Container,
  Header,
  LandingComp,
  ScrollingComp,
};
