import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import {
  Container,
  FlexContainer,
  ColorSpan,
  colors
} from '../components/Theme'
import Person from '../components/Person'
import info from '../data'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        dalton: file(relativePath: { eq: "staff/advisors/dalton.jpg" }) {
          ...staffImage
        }
        megan: file(relativePath: { eq: "staff/advisors/megan.png" }) {
          ...staffImage
        }
        vikram: file(relativePath: { eq: "staff/advisors/vikram.jpg" }) {
          ...staffImage
        }
        alan: file(relativePath: { eq: "staff/advisors/alan.jpg" }) {
          ...staffImage
        }
        nick: file(relativePath: { eq: "staff/advisors/nick.jpg" }) {
          ...staffImage
        }
        mingjie: file(relativePath: { eq: "staff/advisors/mingjie.png" }) {
          ...staffImage
        }
        will: file(relativePath: { eq: "staff/advisors/will.jpg" }) {
          ...staffImage
        }
        mark: file(relativePath: { eq: "staff/advisors/mark.jpg" }) {
          ...staffImage
        }
        annie: file(relativePath: { eq: "staff/advisors/annie.jpg" }) {
          ...staffImage
        }
      }
    `}
    render={data => (
      <Container paddingTop="10px">
        <h2>
          <ColorSpan color={colors.accent}>Advisors</ColorSpan>
        </h2>
        <FlexContainer>
          <Person
            details={info.advisors.dalton}
            image={data.dalton.childImageSharp.fluid}
          />
          <Person
            details={info.advisors.megan}
            image={data.megan.childImageSharp.fluid}
          />
          <Person
            details={info.advisors.vikram}
            image={data.vikram.childImageSharp.fluid}
          />
          <Person
            details={info.advisors.alan}
            image={data.alan.childImageSharp.fluid}
          />
          <Person
            details={info.advisors.nick}
            image={data.nick.childImageSharp.fluid}
          />
          <Person
            details={info.advisors.mingjie}
            image={data.mingjie.childImageSharp.fluid}
          />
          <Person
            details={info.advisors.will}
            image={data.will.childImageSharp.fluid}
          />
          <Person
            details={info.advisors.mark}
            image={data.mark.childImageSharp.fluid}
          />
          <Person
            details={info.advisors.annie}
            image={data.annie.childImageSharp.fluid}
          />
        </FlexContainer>
      </Container>
    )}
  />
)
