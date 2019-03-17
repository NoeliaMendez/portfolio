import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'
import { config, useSpring } from 'react-spring'
import { ChildImageSharp } from '../types'

type PageProps = {
  data: {
    aboutus: ChildImageSharp
  }
}

const About: React.FunctionComponent<PageProps> = ({data:{aboutus}}) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const imagesAnimation = useSpring({ config: config.slow, delay: 800, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout>
      <SEO title="About | Noelia Mendez Arquitecta" desc="Apasionada de la arquitectura y el diseño de interiores. En el diseño encuentro la oportunidad de mejorar, refrescar e innovar espacios. Amante de la naturaleza, siento inquietud por la arquitectura sostenible teniendo muy en cuenta el medio ambiente en el desarrollo de mis proyectos." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <Img
          key={aboutus.childImageSharp.fluid.src}
          fluid={aboutus.childImageSharp.fluid}
        />
        <p>
        Apasionada de la arquitectura y el diseño de interiores. En el diseño encuentro la oportunidad de mejorar, refrescar e innovar espacios. Amante de la naturaleza, siento inquietud por la arquitectura sostenible teniendo muy en cuenta el medio ambiente en el desarrollo de mis proyectos.
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About

export const query = graphql`
query AboutUsQuery {
  aboutus: file(sourceInstanceName: { eq: "images" }, name: { eq: "about-us" }) {
    childImageSharp {
      fluid(quality: 95, maxWidth: 1200) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`