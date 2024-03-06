import { Button, Dialog, DialogContent } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReadMoreReact from 'read-more-react';
const CurrentOpeningInnerPdf = () => {

  const [data, setData] = useState([]);

  

  const domain = process.env.REACT_APP_API_DOMAIN;

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);



  useEffect(() => {
    // Function to fetch data

    const fetchData = async () => {
      try {
        const response = await axios.get(`${domain}/content`);
        setData(response.data); // Set the fetched data into state
        console.log(response.data); // Set the fetched data into state

      } catch (error) {
        console.error("Error fetching data:", error);

      }
    };

    // Call the fetch data function
    fetchData();
  }, []); // Empty dependency array to ensure this effect runs only once


  return (
    data && data.map((item) => (
      <div className='col-lg-4' key={item.id}>
        <div className='single-service-wrap'>
          <div className='details'>
            <h5>{item.designation}</h5>
            <p>
              {item.summary}
              <br />
              <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => { setIsEditDialogOpen(true) }}>Read more</span>
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

        <Dialog open={isEditDialogOpen} onClose={() => setIsEditDialogOpen(false)}>
          <DialogContent>
            <>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
              <Button onClick={() => { setIsEditDialogOpen(false) }}>Close</Button>
            </>
          </DialogContent>

        </Dialog>
      </div>

    ))
  );
};

export default CurrentOpeningInnerPdf;
