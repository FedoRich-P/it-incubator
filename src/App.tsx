import React from 'react';
import './App.css';
import { CardBox, Card, CardImg } from './components/NewCard';
import { CardBody, CardTitle, CardText, CardBtn } from './components/CardBody';

function App() {
  return (
    <div className="App">
      <CardBox>
        <Card>
          {/* <CardImg src="./images/Rectangle.jpg" /> */}
          <CardImg src="https://s1.1zoom.ru/big3/399/339975-svetik.jpg" />
          <CardBody>
            <CardTitle>Headline</CardTitle>
            <CardText>
              Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
              ornare in venen.
            </CardText>
            <CardBtn preview={true}>See more</CardBtn>
            <CardBtn saving={true}>Save</CardBtn>
          </CardBody>
        </Card>
        <Card>
          <CardImg src="https://s1.1zoom.ru/b5050/26/357022-svetik_2560x1440.jpg" />
          <CardBody>
            <CardTitle>Title</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              eaque!
            </CardText>
            <CardBtn preview={true}>See more</CardBtn>
            <CardBtn saving={true}>Save</CardBtn>
          </CardBody>
        </Card>
      </CardBox>
    </div>
  );
}

export default App;
