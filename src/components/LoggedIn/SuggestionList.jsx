import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const SuggestionList = ({row}) => {
  return (
    <div>
      <Card>
        <Card.Body>
          {/* NAME OF THE EMPLOYEE */}
          <Card.Title>{row.fname} {row.lname}</Card.Title>

          {/* ROLE OF THE EMPLOYEE */}
          <Card.Text>{row.role}</Card.Text>

          <Link to={"/mainChat"}>
            <Button variant="success" className="mx-2">
              Chat
            </Button>
          </Link>
          {/* <Button variant="success" className='mx-2'>Chat</Button> */}
          <Button variant="danger" className="mx-2">
            Hide
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SuggestionList;
