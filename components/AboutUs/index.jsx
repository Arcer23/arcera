import {
  AboutTitle,
  About,
  AboutBelow,
  AboutImage,
  AboutContent,
  AboutDescription,
  AboutQuote,
  AboutLink,
  Section,
  Container,
  AboutContentLowerContainer,
  AboutButton,
  AboutImageDiv,
} from "./AboutUs.styled";
import Link from 'next/link'

const AboutUs = () => {
  return (
    <Section id="about-us">
      <Container>

          <AboutBelow>
            <AboutImageDiv
            >
              <AboutImage src="/images/about.jpeg" alt="Two female team members discussing project"/>
            </AboutImageDiv>
            <AboutContent>
              <AboutTitle>About US</AboutTitle>
              <AboutDescription>
              At Arcera, we understand the challenges foreign students face with projects, thesis, and assignments. Our dedicated team works closely with you to deliver customized, high-quality support that boosts your academic performance and builds your confidence. Passionate about education and excellence, we are here to help you achieve your goals — on time and with integrity.
              </AboutDescription>
              <Link href='#contact-us'>
                <AboutButton>Accelerate your Career</AboutButton>
                </Link>
            </AboutContent>
          </AboutBelow>
     
      </Container>
    </Section>
  );
};

export default AboutUs;
