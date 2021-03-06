import React from 'react'

import { Row, Col } from 'react-flexbox-grid'

function Footer() {
  return (
    <footer>
      <div className="content">
        <Row center="xs" middle="xs">
          <Col xs={4}></Col>
          <Col xs={8} className="techfolio_copyright">
            copyright ©{new Date().getFullYear()} Crafted by Damilare.
          </Col>
        </Row>
      </div>
    </footer>
  )
}

export default Footer
