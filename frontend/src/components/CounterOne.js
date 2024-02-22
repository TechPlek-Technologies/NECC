import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const CounterOne = () => {
  return (
    <>
      {/*fact-area start*/}
      <div className='container'>
        <div
          className='fact-counter-area'
          style={{ backgroundColor: "#29176d" }}
        >
          <div className='row justify-content-center'>
            <div className='col-lg-3 col-md-6'>
              <div className='single-fact-wrap'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={2000} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>EXPERTISE</h5>
                <p>Extensive knowledge, and reliable logistics solutions.</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-fact-wrap'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={100} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>RELIABILITY</h5>
                <p>Consistent, on-time deliveries, impeccable service.</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-fact-wrap'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={450} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>TRUST</h5>
                <p>Client-centric approach, transparent communication channels.</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-fact-wrap after-none'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={80} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>EXCELLENCE</h5>
                <p>Exceptional quality, unmatched customer satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*fact-area end*/}
    </>
  );
};

export default CounterOne;
