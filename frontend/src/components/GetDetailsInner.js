import React, { useState } from "react";

const GetDetailsInner = () => {


  const [inputFields, setInputFields] = useState([]);

  // Function to handle button click
  const handleButtonClick = () => {
    setInputFields([...inputFields, <div className='col-lg-11' key={inputFields.length}>
      <div className='single-input-inner style-border'>
        <input type='text' placeholder='Query Details' />
      </div>
    </div>]);
  };


  return (
    <>
    <div className='request-quote-area pd-top-100'>
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
                   
                    <a className='btn btn-base w-100' href='#'>
                      GET STATUS
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default GetDetailsInner;
