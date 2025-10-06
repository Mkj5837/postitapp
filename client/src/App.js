import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap"; //importing the reactstarp components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SharePosts from "./Components/SharePost";
import Profile from "./Components/Profile";
import Register from "./Components/Register";

const App = () => {
  return (
    <>
      <Container fluid>
        <Router>
          <Col>
            <Row>
              <Header />
            </Row>
          </Col>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Col>
            <Row>
              <Footer />
            </Row>
          </Col>
        </Router>
      </Container>
    </>
  );
};

export default App;
