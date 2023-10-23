import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/navbar";
import Links from "./components/links";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Posts from "./components/posts";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Row>
          <Col xs={3}>
            <Links />
          </Col>
          <Col xs={6}>
            <Posts />
          </Col>
          <Col xs={3}>
            <Links />
          </Col>
        </Row>
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Links />
        </div> */}
      </div>
    </div>
  );
}

export default App;
