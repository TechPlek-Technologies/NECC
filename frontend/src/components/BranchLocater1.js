const BranchLocater1 = () => {

    return (
      <>
      <div className='container pd-bottom-45'>
        <form className='blog-comment-form'>
                  <h4>BRANCH LOCATOR</h4>
                  <div className='row'>
                    <div className="col-lg-3">
                      <div className='single-select-inner'>
                        <select id="sel_state" autocomplete="off" placeholder="Select Country" className="single-select">
                          <option value="">Select Country</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className='single-select-inner'>
                      <select id="sel_state" autocomplete="off" placeholder="Select State" className="single-select">
                        <option value="">Select State</option>
                      </select>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className='single-select-inner'>
                      <select id="sel_state" autocomplete="off" placeholder="Select City" className="single-select"> 
                        <option value="">Select City</option>
                      </select>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className='single-select-inner'>
                      <select id="sel_state" autocomplete="off" placeholder="Select Branch" className="single-select">
                        <option value="">Select Branch</option>
                      </select>
                      </div>
                    </div>
                  </div>
            </form>

        <div className='row g-0 justify-content-center scroll-box'>
           <div className='col-lg-4 contact-information-wrap'>
              <div className='contact-g-map'>
                <div class="card col-lg-12 card-mg">
                  <div class="card-body">
                    <h5 class="card-title">Country</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Branch Name</h6>
                    <p class="card-text">address1</p>
                    <p class="card-text">address2</p>
                    <p class="card-text">state-pincode</p>
                  </div>
                </div>
                <div class="card col-lg-12 card-mg">
                  <div class="card-body">
                    <h5 class="card-title">Country</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Branch Name</h6>
                    <p class="card-text">address1</p>
                    <p class="card-text">address2</p>
                    <p class="card-text">state-pincode</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='contact-g-map'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28003.432807585355!2d77.21011199999997!3d28.67680800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd785160ae37%3A0xd0edb8d4ecfa9cbf!2sNorth%20Eastern%20Carrying%20Corporation%20Ltd.%20(NECC)!5e0!3m2!1sen!2sin!4v1709791237176!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
           </div>
        </div>
       </div>
      </>
    )
  };
  
  export default BranchLocater1;