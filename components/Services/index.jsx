import Link from "next/link";
import { motion } from "framer-motion";
import {
  ServiceContent,
  ServicesText,
  ServiceNavImage,
  ServiceHeading,
  ServiceList,
  ServiceDetails,
  HorizontalLine,
  Span,
  ServiceTitle,
  ServiceLink,
  Service,
  ServiceIndex,
  ServiceDescription,
  Section,
  Container,
  ServiceLinkContainer,
  ServiceTextMainContainer,
  ArrowIcon,
  ServiceImage,
  WhatWeDo,
  ServiceHeader,
  ServiceHeadingDiv,
  ContactButton,
} from "./Services.styled";

const Services = () => {
  return (
    <Section id="services">
      <Container>
        <ServiceHeader>
          <WhatWeDo>What We do</WhatWeDo>
          <ServiceHeadingDiv>
            <ServiceHeading>Services We Offer</ServiceHeading>
            <Link href='#contact-us'>
             <ContactButton>Contact Us</ContactButton>
            </Link>
          </ServiceHeadingDiv>
        </ServiceHeader>

        <ServiceContent>
          <ServiceList>

            <Service
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6,delay:0.5}}
              viewport={{ once: true}}
            >
              <ServiceImage
               alt="Web Development Icon"
                initial={{ opacity: 0 ,x:-130}}
                whileInView={{ opacity: 1,x:0 }}
                transition={{duration:0.7,delay:0.8}}
                viewport={{ once: true}}
                src="/images/website development.svg"></ServiceImage>
           
                <ServiceTitle>
                Assignment Help
                </ServiceTitle>
              
              <ServiceDetails>
              Reliable assistance to finish your assignments accurately and on time.
              </ServiceDetails>
              

            </Service>

            <Service
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6,delay:0.6}}
              viewport={{ once: true}}
            >
              <ServiceImage
              alt="App Development Icon"
                initial={{ opacity: 0 ,x:-130}}
                              whileInView={{ opacity: 1,x:0 }}
                              transition={{duration:0.7,delay:0.8}}
                              viewport={{ once: true}}
                src="/images/app development.svg"></ServiceImage>
              
                <ServiceTitle>
                Project Assistance
                </ServiceTitle>
              
              <ServiceDetails>
              Comprehensive help to plan, research, and execute your academic projects efficiently.
              </ServiceDetails>             
              
            </Service>

            <Service
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6,delay:0.7}}
              viewport={{ once: true}}
            >
              <ServiceImage
              alt="Digital Marketing Icon"
                initial={{ opacity: 0 ,x:-130}}
                whileInView={{ opacity: 1,x:0 }}
                transition={{duration:0.7,delay:0.8}}
                viewport={{ once: true}}
                src="/images/digital marketing.svg"></ServiceImage>
              
                <ServiceTitle>
                Thesis Writing Support
                </ServiceTitle>
              
              <ServiceDetails>
                <p>Guidance and writing assistance to structure, research, and polish your thesis.

</p>   
              </ServiceDetails>
              
            </Service>

          </ServiceList>

        </ServiceContent>

      </Container>
    </Section>
  );
};

export default Services;
