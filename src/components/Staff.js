import React from 'react'

import Advisors from '../components/Advisors'
import Directors from '../components/Directors'
import {
  StyledOutboundLink,
  StyledHeading,
  Container
} from '../components/Theme'

export default () => (
  <>
    <Container>
      <StyledHeading>Our Team</StyledHeading>
      <p>
        Last year, we ran{' '}
        <StyledOutboundLink href="https://cincyhacks.com">
          CincyHacks
        </StyledOutboundLink>
        , Cincinnati’s largest high school hackathon. This year, we’re kicking
        it up a notch: we’re bringing in leaders from{' '}
        <StyledOutboundLink href="https://camp.masonhackclub.com">
          Mason Hack Camp
        </StyledOutboundLink>
        ,{' '}
        <StyledOutboundLink href="https://hackchicago.io">
          Hack Chicago
        </StyledOutboundLink>
        ,{' '}
        <StyledOutboundLink href="https://mcdonoghhacks.org">
          McDonogh Hacks
        </StyledOutboundLink>
        , and{' '}
        <StyledOutboundLink href="https://www.codeday.org/dc">
          CodeDay
        </StyledOutboundLink>{' '}
        to run an event for 300 high school programmers, hackers, and designers.
      </p>
    </Container>
    <Directors />
    <Advisors />
  </>
)
