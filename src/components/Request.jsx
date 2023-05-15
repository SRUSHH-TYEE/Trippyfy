import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import axios from 'axios';

const Request = () => {
  const userInfo = localStorage.getItem("userInfo");
  const name = userInfo ? userInfo.fname : "user";

  // handling modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <Card style={{ margin: "4rem", marginTop: "6rem" }}>
        <Card.Body>
          <Card.Title style={{fontSize:"1.5rem"}}>Dear {name},</Card.Title>
          <Card.Text style={{fontSize:"1.2rem"}}>
            Your request has not yet been approved by authentication authority.
            kindly wait till authority approve the request or contact authentication
            authority of your company.
          </Card.Text>
          <Link to='/'>
          <Button variant="primary">Back to homepage</Button>
          </Link>
          <Button variant="warning" className="mx-2" onClick={handleShow}>Upload Document</Button>
        </Card.Body>
      </Card>

      {/* MODAL FOR UPLODING DOCUMENT */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <Button type="submit" variant="warning">Upload</Button>
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Request;
