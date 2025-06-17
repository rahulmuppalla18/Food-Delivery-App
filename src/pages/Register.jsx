import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';

const Register = () => {
  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={(e) => e.preventDefault()}>
                <div className="form__group">
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="form__group">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="form__group">
                  <input type="password" placeholder="Password" required />
                </div>
                <button type="submit" className="addToCart__btn">
                  Signup
                </button>
              </form>
              <Link to="/login">
                Already have an account? Login
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Register