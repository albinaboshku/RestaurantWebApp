import React, { Component } from "react";
import "./orderForm.css";
import { Container, Row, Col } from "reactstrap";

class orderForm extends Component {
  state = {
    name: "",
    adress: "",
    city: "",
    postalcode: "",
    phonenumber: "",
  };
  nameHandler = (e) => {
    this.setState({ name: e.target.value });
  };
  phoneHandler = (e) => {
    this.setState({ phone: e.target.value });
  };
  houseHandler = (e) => {
    this.setState({ rruga: e.target.value });
  };
  localityHandler = (e) => {
    this.setState({ locality: e.target.value });
  };
  postalcodeHandler = (e) => {
    this.setState({ postalcode: e.target.value });
  };
  landHandler = (e) => {
    this.setState({ city: e.target.value });
  };
  render() {
    var checkOut = {
      name: this.state.name,
      phone: this.state.phone,
      rruga: this.state.rruga,
      locality: this.state.locality,
      city: this.state.city,
      postalcode: this.state.postalcode,
    };
    return (
      <div className="OrderForm">
        {/* <p className="OrderFormHead">Fill Delivery Details</p>
        <form id="orderForm">
          <div className="form__container">
            <Container>
              <Row>
                <Col xs="4" xl="4">
                  <legend>
                    <p>Name</p>
                  </legend>
                </Col>
                <Col xs="8" xl="8">
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.nameHandler}
                    id="CustomerName"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="4" xl="4">
                  <legend>
                    <p>Address</p>
                  </legend>
                </Col>
                <Col xs="8" xl="8">
                  <input
                    type="text"
                    value={this.state.rruga}
                    onChange={this.houseHandler}
                    id="rruga"
                  />
                </Col>
              </Row>

              <Row>
                <Col xs="4" xl="4">
                  <legend>
                    <p>City</p>
                  </legend>
                </Col>
                <Col xs="8" xl="8">
                  <input
                    type="text"
                    value={this.state.city}
                    onChange={this.landHandler}
                    id="city"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="4" xl="4">
                  <legend>
                    <p>Postal Code</p>
                  </legend>
                </Col>
                <Col xs="8" xl="8">
                  <input
                    type="text"
                    value={this.state.postalcode}
                    onChange={this.postalcodeHandler}
                    id="postalcode"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="4" xl="4">
                  <legend>
                    <p>Phone Number</p>
                  </legend>
                </Col>
                <Col xs="8" xl="8">
                  <input
                    type="text"
                    value={this.state.phone}
                    onChange={this.phoneHandler}
                    id="Number"
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <button
            type="button"
            onClick={() =>
              this.props.place({
                checkOut,
              })
            }
          >
            Place Order
          </button>
        </form>

        <p className="OrderFormNotice">
          *Pagesa do bëhet sapo të merrni porosinë :{" "}
        </p> */}
      </div>
    );
  }
}

export default orderForm;
