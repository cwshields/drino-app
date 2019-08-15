import React from 'react';
import '../../assets/scss/profileCard.scss';
import { Card } from 'react-bootstrap';
import profileImg from '../../assets/images/profile-img.png';

export default function ProfileCard(props) {
  return (
    <div className="profile-card">
      <div className="Card">
        <Card>
          <Card.Header className="card-header">
            Chase Shields {props.firstName}{props.lastName}
            <div className="card-header-subtext">Founder & CEO</div>
            <div className="img-wrap">
              <img className="profile-img" src={profileImg} alt="ProfileImage"/>
            </div>
          </Card.Header>
          <Card.Body className="card-body">
            <Card.Title>
              cshields@drino.com
            </Card.Title>
            <Card.Text>
              "Lorem ipsum dolor sit amet et consectetur adipisicing elit. Quo, debitis vitae earum iste tenetur sunt velit corrupti."
            </Card.Text>
            <Card.Text className="links">
            <i className="mr-10 fab fa-facebook-square"></i><i className="fab mr-10 fa-github"></i><i className="fab fa-twitter"></i>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}