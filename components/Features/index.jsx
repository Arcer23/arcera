import React from 'react'
import { 
  BeginButton, Container, Left, LeftCaption, LeftDescription, LeftHeader, LeftHeading, 
  LeftImg, Numbers, Right, RightParagraph, RightSections, Section 
} from './Features.styled'
import Link from 'next/link'

function Features() {
  return (
    <Section>
      <Container>
        <Left>
          <LeftHeader>
            <LeftCaption>Why Us</LeftCaption>
            <LeftHeading>Still unsure?</LeftHeading>
            <LeftDescription>Here are 3 reasons you should partner with us!</LeftDescription>
          </LeftHeader>
        </Left>

        <LeftImg>
          <Link href="#contact-form" passHref>
            <BeginButton>Lets Begin</BeginButton>
          </Link>
        </LeftImg>

        <Right>
          <RightSections>
            <Numbers>
              <h2>100%</h2>
              <p>Client Satisfaction</p>
            </Numbers>
            <RightParagraph>
              We take pride in delivering 100% satisfaction by providing tailored digital solutions that meet your business needs.
            </RightParagraph>
          </RightSections>

          <RightSections>
            <Numbers>
              <h2>85%</h2>
              <p>Increased Performance</p>
            </Numbers>
            <RightParagraph>
              Our clients have experienced up to 85% growth in online engagement and business performance after partnering with us.
            </RightParagraph>
          </RightSections>

          <RightSections>
            <Numbers>
              <h2>10+</h2>
              <p>Projects Delivered</p>
            </Numbers>
            <RightParagraph>
              Arcera has successfully delivered over 10 high-impact projects, helping businesses grow their digital presence worldwide.
            </RightParagraph>
          </RightSections>
        </Right>
      </Container>
    </Section>
  )
}

export default Features
