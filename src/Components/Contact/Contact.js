import React, { useContext, Fragment } from 'react'
import { Col, Row } from 'react-flexbox-grid'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'
import './contact.css'
import VisibilitySensor from 'react-visibility-sensor'
import { contactSection, socialNetworks } from '../../techfolio'
import { ScrollContext } from '../../Context/scroll'
import { isMobile } from 'react-device-detect'
import Heading from '../common/Heading'
import contact from "../../assets/imgs/contact.png"
function Contact() {
  const { scrollChange } = useContext(ScrollContext)
  const { github, linkden, twitter } = socialNetworks
  const contactList = contactSection.contactList.map((contact, i) => {
    return (
      <Col xs={12} key={i}>
        <h2 className="contact_section_contact">
          <img
            draggable="false"
            className="emoji"
            alt="💠"
            src="https://twemoji.maxcdn.com/v/13.0.0/72x72/1f4d2.png"
          />
          {contact}
        </h2>
      </Col>
    )
  })
  return (
    <Fragment>
      {isMobile && (
        <Heading heading={'Contact'} style={{ marginBottom: '60px' }} />
      )}
      <section className="section section7" id="contactSection" name="contact">
        <div className="site-container">
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible) {
                scrollChange('contact')
              }
            }}
          >
            <Row around="xs" middle="xs" center="xs">
              <Col lg={6} xs={12}>
                <Flip left>
                  {' '}
                  <img
                    src={contact}
                    alt="contact"
                    className="portfolio_skill_section_img"
                    style={{
                      maxWidth: '100%',
                    }}
                  />{' '}
                </Flip>
              </Col>
              <Col lg={6} xs={12}>
                <Fade bottom cascade>
                  <Row around="xs">
                    <Col xs={12}>
                      <h2 className="contact_section_tagline">
                        {contactSection.contactTagline}
                      </h2>
                    </Col>
                    <Col xs={12}>
                      <ul className="social-networks spin-icon">
                        {linkden && (
                          <li>
                            <a
                              href={linkden}
                              className="icon-linkedin social-network-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              LinkedIn
                            </a>
                          </li>
                        )}
                        {twitter && (
                          <li>
                            <a
                              href={twitter}
                              className="icon-twitter social-network-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Twitter
                            </a>
                          </li>
                        )}
                        {github && (
                          <li>
                            <a
                              href={github}
                              className="icon-github social-network-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GitHub
                            </a>
                          </li>
                        )}
                      </ul>
                    </Col>
                    {contactList}
                  </Row>
                </Fade>
              </Col>
            </Row>
          </VisibilitySensor>
        </div>
      </section>
    </Fragment>
  )
}

export default Contact
