import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";

const Request = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const name = userInfo ? userInfo.fname : "user";

  // handling modal
  const [show, setShow] = useState(false);
  const [showUploaded, setShowUploaded] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("")

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async(e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/upload_proof', {
        method: 'PATCH',
        headers: {
          'auth-token': localStorage.getItem('token'),
          // 'Content-Type': 'multipart/form-data'
        },
        body: formData
      });
      
      console.log(response)
      const data = await response.json();
    
      if (data.status === "success") {
        setShowUploaded(true);
        console.log(data)
        setUrl(data.url)
        console.log(url)
      }
    
      console.log(data);
      console.log('Hyy');
    } catch (error) {
      console.log(error);
    }
    
  };

 const handleDocView=async()=>{
  window.open(url, '_blank')
 }


  return (
    <div>
      <Card style={{ margin: "4rem", marginTop: "6rem" }}>
        <Card.Body>
          <Card.Title style={{ fontSize: "1.5rem" }}>Dear {name},</Card.Title>
          <Card.Text style={{ fontSize: "1.2rem" }}>
            Your request has not yet been approved by authentication authority.
            kindly wait till authority approve the request or contact
            authentication authority of your company.
          </Card.Text>
          <Link to="/">
            <Button variant="primary">Back to homepage</Button>
          </Link>
          <Button variant="warning" className="mx-2" onClick={handleShow}>
            Upload Document
          </Button>
          {showUploaded && <Button variant="warning" className="mx-2" onClick={handleDocView}>
            View Uploaded document
          </Button>}
        </Card.Body>
      </Card>

      {/* MODAL FOR UPLODING DOCUMENT */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <input type="file" name="id_proof" onChange={handleFileChange} />
            <Button type="submit" variant="warning">
              Upload
            </Button>
          </form> */}

          <form onSubmit={handleUpload} method="patch" enctype="multipart/form-data">
                <div>
                  <input
                    type="file"
                    name="id_proof"
                    onChange={handleFileChange}
                  />
                </div>

            <div>
              <button
                type="submit"
              >
                Upload
              </button>
            </div>
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
