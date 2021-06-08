import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router,  Switch,  Route, Link } from "react-router-dom";


function App() {
  return (
    <>
      <Container className='app-container' fluid={true}>
        <div className='app-title-wrapper'>
          <div className='app-title-container'>
            <Row>
              <Col>
                <div className='app-title-box'>
                  <p className='app-title'>
                    MTHR'S MLK
                  </p>
                  <p className='app-provider'>
                    LNSC X DGTL MLK
                  </p>
                  <p className='app-info'>
                    Straight from your mom's fuck'n titty
                  </p>
                  <p className='app-comingsoon'>
                    Coming Soon
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
