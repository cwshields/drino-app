import React from 'react';
import '../../assets/scss/profileCard.scss';
import { Card } from 'react-bootstrap';
import profileImg from '../../assets/images/profile-img.png';

export default function Error500() {
  return (
    <div className="profile-card">
      <div className="Card">
        <Card>
          <Card.Header className="card-header">
            Joseph Smith
            <div className="card-header-subtext">Founder & CEO</div>
            <div className="img-wrap">
              <img className="profile-img" src={profileImg} alt="Profile Image"/>
            </div>
          </Card.Header>
          <Card.Body className="card-body">
            <Card.Title>
              jsmith1@drino.com
            </Card.Title>
            <Card.Text>
              "Lorem ipsum dolor sit amet et consectetur adipisicing elit. Quo, debitis iste tenetur sunt velit corrupti."
            </Card.Text>
            <Card.Text className="links">
            <i class="mr-10 fab fa-facebook-square"></i><i class="fab mr-10 fa-github"></i><i class="fab fa-twitter"></i>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}