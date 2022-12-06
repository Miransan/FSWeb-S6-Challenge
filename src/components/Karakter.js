// Karakter bileşeniniz buraya gelecek

import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Accordion, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import KarakterProperty from "./KarakterProperty";
import KarakterTitle from "./KarakterTitle";

const Container = styled.div`
  width: 100vw;
  margin-top: 5%;
  text-align: center;
`;

const AccordionDiv = styled.div`
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
`;

function Karakter() {
  const [characters, setCharacters] = useState(null);
  const [showFilms, setShowFilms] = useState(false);

  useEffect(() => {
    axios("https://swapi.dev/api/people/").then((response) => {
      console.log(response.data);
      setCharacters(response.data);
    });
  }, []);

  return (
    <Container>
      <KarakterTitle />

      {characters === null ? (
        <div>Loading...</div>
      ) : (
        <AccordionDiv className="mt-4">
          <Accordion defaultActiveKey="0">
            {characters.map((character, index) => (
              <Accordion.Item eventKey={index}>
                <KarakterProperty krktr={character} />
              </Accordion.Item>
            ))}
          </Accordion>
        </AccordionDiv>
      )}
    </Container>
  );
}

export default Karakter;