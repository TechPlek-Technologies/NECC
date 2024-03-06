import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReadMoreReact from 'read-more-react';
const CurrentOpeningInnerPdf = ({id}) => {


    const data2 = [
      {
        id: 1,
        name: "123",
        designation:"abc",
        page: "Corporate Information",
        description: "The candidate should be capable enough to manage the Branch with profitability and should be preferably from Transport industry. The incumbent should preferably be a graduate with effective communication skills and should be in the age group of 25-40 years.",
        emailSubject:"submit your resume",
        eventID: 1,
      },
      {
        id: 2,
        name: "1234",
        designation:"abc",
        page: "Corporate Information",
        description: "The candidate should be capable enough to manage the Branch with profitability and should be preferably from Transport industry. The incumbent should preferably be a graduate with effective communication skills and should be in the age group of 25-40 years.",
        eventID: 1,
      },
      {
        id: 3,
        name: "12345",
        designation:"abc",
        page: "Corporate Information",
        description: "The candidate should be capable enough to manage the Branch with profitability and should be preferably from Transport industry. The incumbent should preferably be a graduate with effective communication skills and should be in the age group of 25-40 years.",
        eventID: 1,
      },
    ];
    
    
    return (
        data2.map((item) => (
            <div className='col-lg-4' key={item.id}>
       <div className='single-service-wrap'>
          <div className='details'>
          <h5>{item.designation}</h5>
          <p>
              <ReadMoreReact text={item.description} />
          </p>
          <div className='btn-wrap'>
              <Link className='read-more-text' to={`mailto:resume@neccgroup.com?subject=${encodeURIComponent(item.emailSubject)}`}>
              Submit Resume{" "}
              <span>
                  <FaArrowRight />
              </span>
              </Link>
          </div>
          </div>
          </div>
   </div>))
    );
  };
  
  export default CurrentOpeningInnerPdf;
  