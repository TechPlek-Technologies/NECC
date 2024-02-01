import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReadMoreReact from 'read-more-react';
const CurrentOpeningInnerPdf = ({id}) => {
    const data2 = [
      {
        id: 1,
        name: "123",
        page: "Corporate Information",
        description: "The candidate should be capable enough to manage the Branch with profitability and should be preferably from Transport industry. The incumbent should preferably be a graduate with effective communication skills and should be in the age group of 25-40 years.",
        emailSubject:"submit your resume",
        section: "12345",
        pdfFileName: "e-del-Request-format.pdf",
        pdfFilePath: "./uploads/e-del-Request-format.pdf",
        createdAt: "2024-01-31T09:41:18.000Z",
        updatedAt: "2024-01-31T09:41:18.000Z",
        eventID: 1,
      },
      {
        id: 2,
        name: "1234",
        page: "Corporate Information",
        description: "The candidate should be capable enough to manage the Branch with profitability and should be preferably from Transport industry. The incumbent should preferably be a graduate with effective communication skills and should be in the age group of 25-40 years.",
        section: "12345",
        pdfFileName: "e-del-Request-format.pdf",
        pdfFilePath: "./uploads/e-del-Request-format.pdf",
        createdAt: "2024-01-31T10:13:27.000Z",
        updatedAt: "2024-01-31T10:13:27.000Z",
        eventID: 1,
      },
      {
        id: 3,
        name: "12345",
        page: "Corporate Information",
        description: "The candidate should be capable enough to manage the Branch with profitability and should be preferably from Transport industry. The incumbent should preferably be a graduate with effective communication skills and should be in the age group of 25-40 years.",
        section: "12345",
        pdfFileName: "e-del-Request-format.pdf",
        pdfFilePath: "./uploads/e-del-Request-format.pdf",
        createdAt: "2024-01-31T10:13:27.000Z",
        updatedAt: "2024-01-31T10:13:27.000Z",
        eventID: 1,
      },
    ];
    return (
        data2.map((item) => (
            <div className='col-lg-4' key={item.id}>
       <div className='single-service-wrap'>
          <div className='details'>
          <h5>{item.name}</h5>
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
  