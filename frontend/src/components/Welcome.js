import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Welcome = () => (
  <Jumbotron>
    <h1>Random Images</h1>
    <p>Zeige ein zufälliges Bild passend zum Suchbegriff an.</p>
    <p>
      <Button variant="dark" href="https://unsplash.com" traget="_blank">
        Unsplash.com
      </Button>
    </p>
  </Jumbotron>
);

export default Welcome;
