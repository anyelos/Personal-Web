import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"
import LogosBox from "../components/LogosBox"
import Tips from "../components/Tips"
import Section from "../components/Section"
import InfoSection from "../components/InfoSection"

const Hero = styled.div`
  height: 1000px;
`

const HeroGroup = styled.div`
  margin: 0;
  max-width: 500px;
  padding: 180px 150px 20px 150px;

  @media (max-width: 640px) {
    padding: 150px 20px;
    max-width: 400px;
  }
`
const Title = styled.h1`
  margin: 0;
  font-size: 72px;
  font-weight: 800;
  color: black;
  line-height: 1.2;
  opacity: 0;
  animation: HeroAnimation;
  animation-duration: 3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  /* 
  background: linear-gradient(50deg, #8532a5 20%, #c95bf2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */

  @media (max-width: 640px) {
    font-size: 60px;
  }
`

const Subtitle = styled.p`
  color: rgb(0, 0, 0);

  font-size: 26px;
  line-height: 1.5;
  animation: HeroAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;

  @media (max-width: 640px) {
    font-size: 20px;
  }
`
const Image = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
`

const Button = styled.a`
  font-size: 17px;
  font-weight: 600;
  color: white;
  background: white;
  /* background: #a72cd6; */
  padding: 12px 30px;
  position: absolute;
  border-radius: 8px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-items: center;
  cursor: pointer;

  :hover {
    background: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }
`

const Text = styled.div`
  margin: 100px 0 20px 0;
  max-width: 400px;
`

const ButtonLogo = styled.img``

const Line = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 50%;
`

const StyledLink = styled.a``

const IndexPage = () => (
  <Layout>
    <Hero>
      <SEO title="Home" />

      <Image src={require("../images/Union.png")} />
      <HeroGroup>
        <Title>Hi! I'm Angel</Title>
        <Subtitle>
          I'm a Developer that loves pretty & clean code, with experience
          working across the stack, totally in love with the buzz that comes
          from building and shipping products. Did I mention I love JavaScript?
        </Subtitle>
        <Subtitle>
          React, SwiftUI & React Native are my current flavours of choice.{" "}
        </Subtitle>
        <Button href="/page-2">
          <ButtonLogo src={require("../images/Chat.png")} width="30" />
          <StyledLink>Playground</StyledLink>
        </Button>

        <Text>
          <Subtitle>
            {" "}
            Constantly remind yourself of how little you truly know, and of how
            mysteriours the world remains. Make creativity rather than comfort
            your goal and you will ensure far more success for the future.
          </Subtitle>
          <Line></Line>
          {/* <p>
            Think of yourself as your own Zen Master. Such Masters would often
            beat their pupils and deliberately lead them to points of maximum
            doubt and inner tension, knowing such moments often precede
            enlightenment
          </p> */}
        </Text>
      </HeroGroup>
    </Hero>
    <BottomImage src={require("../images/BottomRec.png")} />
    <Logos>
      <Tools>Favorite Tools</Tools>

      <LogoBox>
        <LogosBox
          title="Figma"
          text="A better way to design. Design, prototype, and gather feedback all in one place with Figma."
          image={require("../images/logo-figma.png")}
        />
        <LogosBox
          title="React js"
          text="A JavaScript library for building user interfaces."
          image={require("../images/logo-react.png")}
        />
        <LogosBox
          title="Xcode"
          text="Xcode 11 includes everything you need to create amazing apps and to bring your apps to even more devices."
          image={require("../images/logo-xcode.png")}
        />
        <LogosBox
          title="Swift"
          text="Swift is a powerful and intuitive programming language for iOS, macOS, tvOS, and watchOS."
          image={require("../images/logo-swift.png")}
        />
        <LogosBox
          title="Framer X"
          text="Bring your creative ideas to life with Framer X, the best tool for interactive design."
          image={require("../images/logo-framerx.png")}
        />
        <LogosBox
          title="Flutter"
          text="Flutter is Google's UI toolkit for crafting beautiful, natively compiled applications for mobile, web, and desktop."
          image={require("../images/flutter-logo.png")}
        />
      </LogoBox>
    </Logos>
    <Section
      image={require("../images/Reading.png")}
      title="Mastering a field"
      text="It is not a matter of studying a subject for twenty years, and then emerging as a Master. The time that leads to mastery is dependent on the intensity of our focus."
      subtitle="The key, then, to attaining this higher level of intelligence is to make our years of study qualitatively rich. We don't simply absorb information, we internalize it and make it our own by finding some way to put this knowledge to practical use."
    />

    <Image5 src={require("../images/Rectangle 5.png")} />
    <TipsGroup>
      <Tips />
    </TipsGroup>
    {/* <InfoSection /> */}
  </Layout>
)

export default IndexPage

const TipsGroup = styled.div`
  margin: 0 auto;
  padding: 0 50px 100px 50px;

  @media (max-width: 375px) {
    padding: 0 5px 50px 5px;
  }
`

const Image5 = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
`

const Tools = styled.h2`
  margin: 0px 20px 50px 20px;
  font-size: 60px;
  text-align: center;
  font-weight: 700;
  background: linear-gradient(104deg, #000000 0%, #d667ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const BottomImage = styled.img`
  position: absolute;
  width: 80%;
  z-index: -1;
`

const Logos = styled.div`
  margin: 0 auto;
  padding: 0 50px 20px 50px;

  @media (max-width: 375px) {
    padding: 0 20px 80px 20px;
    margin: 0 auto;
  }
`

const LogoBox = styled.div`
  margin: 0 auto;
  max-width: 800px;

  background: white;
  padding: 20px 50px;
  grid-gap: 20px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 40px 0px 30px rgba(0, 0, 0, 0.009);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;

  @media (max-width: 820px) {
    padding: 20px 20px 40px 20px;
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 375px) {
    max-width: 300px;
    padding: 20px 10px 40px 10px;
    grid-template-columns: repeat(1, 1fr);
  }
`
