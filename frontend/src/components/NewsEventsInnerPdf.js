import {
    FaArrowRight,
  } from "react-icons/fa";
  import { Link } from "react-router-dom";
  const NewsEventsInnerPdf = ({id}) => {
  
      const data2 = [
        {
          id: 1,
          name: "123",
          page: "Corporate Information",
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
          section: "12345",
          pdfFileName: "e-del-Request-format.pdf",
          pdfFilePath: "./uploads/e-del-Request-format.pdf",
          createdAt: "2024-01-31T10:13:27.000Z",
          updatedAt: "2024-01-31T10:13:27.000Z",
          eventID: 1,
        },
      ];
      return (
        <ul className='catagory-items'>
        {data2.map((item) => (
          <li key={item.id}>
            <Link to={`/download/${item.name}`}>
              {item.name}
              <span>
                <FaArrowRight />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      );
    };
    
    export default NewsEventsInnerPdf;
    