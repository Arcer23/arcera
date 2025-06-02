import React from 'react'
import { BeginButton, Container, Left, LeftCaption, LeftDescription, LeftHeader, LeftHeading, LeftImg, LeftImgDiv, Numbers, Right, RightParagraph, RightSections, Section } from './Features.styled'
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
            <LeftImg >
            <Link href="#contact-form" passHref><BeginButton>Let&apos;s Begin</BeginButton></Link>
                    </LeftImg>
            <Right>
            <RightSections>
  <Numbers>
    <h2>100%</h2>
    <p>Client Satisfaction</p>
  </Numbers>
  <RightParagraph>
    We take pride in achieving 100% satisfaction by delivering high-quality academic support tailored to each student’s needs.
  </RightParagraph>
</RightSections>

<RightSections>
  <Numbers>
    <h2>85%</h2>
    <p>Improved Grades</p>
  </Numbers>
  <RightParagraph>
    Students we've helped have seen up to 85% improvement in their grades through our expert project and thesis support.
  </RightParagraph>
</RightSections>

<RightSections>
  <Numbers>
    <h2>10+</h2>
    <p>Projects Delivered</p>
  </Numbers>
  <RightParagraph>
    From research papers to final-year projects, Arcera has successfully completed over 10 academic tasks for students across the globe.
  </RightParagraph>
</RightSections>

            </Right>
        </Container>
    </Section>
  )
}

export default Features