
import Link from 'next/link';
import{Container,FooterTitles, Section} from './Footer.styled'

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
    return (
      <Section>
      <Container>
        <FooterTitles>&copy; {year} All Rights Reserved</FooterTitles>
        <FooterTitles>Designed And Developed By <strong><Link href="https://www.facebook.com/pranish.kadel.2025/">pranish</Link></strong></FooterTitles>
        <Link href="mailto:hello@intelpik.com"><FooterTitles>pranishkadel1@gmail.com</FooterTitles></Link>
      </Container>
      </Section>
    )
  }
  
  export default Footer
