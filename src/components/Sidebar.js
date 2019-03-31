import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Image, Flex, Box, Text } from 'rebass';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ClosedPanel = styled.div`
  z-index: 5;
  position: fixed;
  left: 0;
  height: 100vh;
  width: 65px;
  max-height: 100vh;
  max-width: 65px;
  background-color: ${props => props.theme.colors.secondaryLight};
  border-right: ${props => props.theme.colors.primaryLight} 2px solid;
  box-shadow: 5px 0px 9px -10px #000000;
  overflow: hidden;
`;

const OpenPanel = styled.div`
  z-index: 15;
  position: fixed;
  left: 0;
  height: 100vh;
  width: 405px;
  background-color: ${props => props.theme.colors.secondaryLight};
  border-right: ${props => props.theme.colors.primaryLight} 2px solid;
  box-shadow: -10px 0px 25px #000000;
  overflow: hidden;
`;

const Shadow = styled.div`
  z-index: -1;
  position: fixed;
  right: 0px;
  background-color: rgba(0,0,0,0.5);
  width: calc(100vw - 405px);
  height: 100vh;
`;

const Name = styled.h1`
  z-index: 10;
  position: fixed;
  left: 0;
  margin 0 auto;
  font-size: 50px;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  text-orientation: upright;
  background-color: ${props => props.theme.colors.primary};
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: rgba(255,255,255,0.5) -3px 0px 3px;
`;

const Open = styled.div`
  z-index: 10;
  position: fixed;
  left: 42px;
  top: 50%;
  height: 45px;
  width: 45px;
  transform: rotate(45deg);
  background-color: ${props => props.theme.colors.secondaryLight};
  border-top: ${props => props.theme.colors.primaryLight} 2px solid;
  border-right: ${props => props.theme.colors.primaryLight} 2px solid;
  /* box-shadow: -10px 0px 25px #000000; */
`;

const Info = styled.div`

  position: relative;
  left 63px;
  width: 315px;
  height: 90vh;
  border-left: ${props => props.theme.colors.primaryLight} 2px solid;

`;

const Fullname = styled.h2`

  font-size: 30px;
  padding-left: 10px;
`;

const Title = styled.h4`

  font-size: 20px;
  padding-left: 10px;
`;

const Company = styled.h4`

  font-size: 20px;
  padding-left: 185px;
`;

const Location = styled.h3`

  font-size: 25px;
  padding-left: 10px;
`;

const Bio = styled.p`

  font-size: 18px;
  padding-left: 10px;
`;

const Skills = styled.h5`

  font-size: 20px;
  padding-left: 10px;
`;

const Email = styled.h6`

  font-size: 15px;
  padding-left: 10px;
`;

const Phone = styled.h6`

  font-size: 15px;
  padding-left: 10px;
`;

const Resume = styled.p`

  font-size: 15px;
  padding-left: 10px;
`;

const LinkedIn = styled.p`

  font-size: 15px;
  padding-left: 10px;
`;

const Sidebar = () => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        contentfulInfo {
            name
            fullName
            jobTitle
            company
            location
            longBio {
              internal {
                mediaType
                content
              }
            }
            skills
            email
            phoneNumber
            resume {
              file {
                url
              }
            }
            linkedIn
          }
      }
    `}
    render={data => {
      const { name, fullName, jobTitle, company, location, longBio, skills, email, phoneNumber, resume, linkedIn } = data.contentfulInfo;
      const bioContent = `${longBio.internal.content}`;
      const resumeFile = `${resume.file.url}`;
      const nameLetters = `${name}`;

      return (
        <div>
        <ClosedPanel>
          <Name>{nameLetters}</Name>
          <Open />
        </ClosedPanel>

        <OpenPanel>
          <Info>

            <Fullname>{fullName}</Fullname>
            <Title>{jobTitle}</Title>
            <Company>{company}</Company>
            <Location>{location}</Location>
            <Bio>{bioContent}</Bio>
            <Skills>{skills}</Skills>
            <Email>{email}</Email>
            <Phone>{phoneNumber}</Phone>
            <Resume>{resumeFile}</Resume>
            <LinkedIn>{linkedIn}</LinkedIn>
          </Info>

          <Shadow />
        </OpenPanel>

        </div>
      );
    }}
  />
);

Sidebar.propTypes = {

};

export default Sidebar;
