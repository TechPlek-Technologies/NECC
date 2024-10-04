import { useEffect, useState } from "react";
import ContactInnerBranchSearch from "./ContactInnerBranchSearch";
import ContactInnerMapSelection from "./ContactInnerMapSelection";
import axios from "axios";

const ContactInnerBranch = () => {
  const [location, setLocation] = useState({
    country: "",
    state: "",
    city: "",
    branch: "",
  });

  const [filteredData, setFilteredData] = useState([]);

  const updateLocation = (newLocation) => {
    setLocation({ ...location, ...newLocation });
  };

  const [map, setMap] = useState("");
  const [targetid, setTargetid] = useState(0);
  const domain = process.env.REACT_APP_API_DOMAIN;
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(`${domain}/branch`);
        console.log(response);
        setData(response.data); // Set the fetched data into state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, []);

  return (
    <div
      className="service-area style-2 pd-bottom-80"
      style={{ background: "#EFEDF5" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="section-title text-center">
              {/* <h4 className='subtitle'>SERVICES</h4> */}
              <h2 className="title" style={{ color: "black" }}>
                BRANCH LOCATOR
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <ContactInnerBranchSearch
            location={location}
            updateLocation={updateLocation}
            data={data}
            setFilteredData={setFilteredData}
            setMap={setMap}
            setTargetid={setTargetid}
          />
        </div>
        <div className="row">
          <ContactInnerMapSelection
            data={filteredData}
            map={map}
            filteredData={filteredData}
            setMap={setMap}
            setTargetid={setTargetid}
            targetid={targetid}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInnerBranch;

// <div >

// <div>
//        <ContactInnerMapDetails/>
//      </div>

//    </div>
