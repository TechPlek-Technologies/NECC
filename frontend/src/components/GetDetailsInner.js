import React, { useState } from "react";
import { Button, CircularProgress, Dialog, DialogContent, Typography } from "@mui/material";
import axios from "axios";

const GetDetailsInner = () => {

  const GetConsignmentDetail = () => {
    setLoading(true);
    axios.post('http://103.127.30.214:90/Tracking.ashx', {
      "interface": "RestAPI",
      "method": "GetConsignmentDetail",
      "parameters": {
        "VNO": trackingNumber
      },
      "token": "NECC"
    })
      .then(response => {
        console.log('Response:', response.data);
        if (response.data) {
          const value = JSON.parse(response.data.Value);
          // Extract cnmtDetail from the response
          const cnmtDetail = value.cnmtDetail;
          console.log(cnmtDetail)
          setData(cnmtDetail)
          setLoading(false);

        }
        // Handle response data
      })
      .catch(error => {
        console.error('Error:', error);
        alert("Unsuccessful request, Try again")
      });

  }

  const [inputFields, setInputFields] = useState([]);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [cnmtRequest, setCnmtRequest] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // Function to handle button click
  const handleButtonClick = () => {
    setInputFields([...inputFields, <div className='col-lg-11' key={inputFields.length}>
      <div className='single-input-inner style-border'>
        <input type='text' placeholder='Query Details' />
      </div>
    </div>]);
  };

  const handleInputChange = (event) => {
    setTrackingNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    // Implement your submission logic here
    event.preventDefault();
    GetConsignmentDetail()
    console.log('Tracking number submitted:', trackingNumber);
    setIsEditDialogOpen(true)
    // You can add your logic to submit the tracking number here
  };


  return (
    <>
    <div className='request-quote-area pd-top-130 pd-bottom-60'>
        <div className='container'>
          <div className='request-quote-inner'>
            <ul className='nav nav-pills' id='pills-tab' role='tablist'>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link active'
                  id='pills-home-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-home'
                  type='button'
                  role='tab'
                  aria-controls='pills-home'
                  aria-selected='true'
                >
                  <img src='assets/img/request-quote/1.png' alt='Transpro' />
                  GET DETAILS
                </button>
              </li>
            </ul>
            <div className='tab-content' id='pills-tabContent'>
              <div
                className='tab-pane fade show active'
                id='pills-home'
                role='tabpanel'
                aria-labelledby='pills-home-tab'
              >
                <div className='row'>
                  <div className='col-lg-12'>
                    <h6 className='subtitle mt-4'>Search By :</h6>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='single-select-inner style-border'>
                          <select className='single-select' >
                          <option value="">Select Option</option>
                          <option value="Consignment No">Consignment No</option>
                          <option value="Invoice No">Invoice No</option>
                          </select>
                        </div>
                      </div>

                     <div className='col-lg-6'>
                          <div className='single-input-inner style-border'>
                            <input type='text' placeholder='Consignment/Invoice No' />
                          </div>
                        </div>

                        <div className='col-lg-11'>
                          <div className='single-input-inner style-border'>
                            <input type='text' placeholder='Multiple Invoices' />
                          </div>
                        </div>

                     {inputFields.map((inputField, index) => (
                      <React.Fragment key={index}>{inputField}</React.Fragment>
                    ))}
                    <div className='col-lg-1'>
                      <button onClick={handleButtonClick} className="btn btn-base">Add</button>
                    </div>
                    </div>
                   
                    {/* <a className='btn btn-base w-100' href='#'>
                      GET STATUS
                    </a> */}
                     <div className='row'>
                      <div className='col-lg-12'>
                    <button onClick={() => GetConsignmentDetail()} className="btn btn-base">GET STATUS</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <Dialog open={isEditDialogOpen} onClose={() => setIsEditDialogOpen(false)}>
  <DialogContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    {loading ? (
      <CircularProgress />
    ) : (
      data.map((item, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <Typography variant="body1">CNNO: {item.CNNO}</Typography>
          <Typography variant="body1">VDATE: {item.VDATE}</Typography>
          <Typography variant="body1">FROMSTATION: {item.FROMSTATION}</Typography>
          <Typography variant="body1">TOSTATION: {item.TOSTATION}</Typography>
          <Typography variant="body1">STATUS: {item.STATUS}</Typography>
          <Typography variant="body1">CNM_MKEY: {item.CNM_MKEY}</Typography>
          <Typography variant="body1">PAYMODE: {item.PAYMODE}</Typography>
        </div>
      ))
    )}
    <Button onClick={() => { setIsEditDialogOpen(false) }}>Close</Button>
  </DialogContent>
</Dialog>
      </div>
    
    </>
  );
};

export default GetDetailsInner;
