import React, { Component } from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import clubheim from '../assets/Clubheim.jpg';

const Styles = styled.div`
  .jumbotron {
    background: url(${clubheim}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

export class Jumbotron extends Component {
  render() {
    return (
      <Styles>
        <Jumbo fluid className="Jumbo">
          <div className="overlay"></div>
          <Container>
            <h1>Willkommen!</h1>
            <p>Erfreue Dich an unserer schönen Website!</p>
          </Container>
        </Jumbo>
      </Styles>
    )
  }
}