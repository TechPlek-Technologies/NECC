import './ContactInnerMapSection1.css';
import ContactInnerMapSection1data from './ContactInnerMapSection1data';




  
const ContactInnerMapSection1 = ({ data, setMap, map,filteredData }) => {
    return (
      <>
        {filteredData?.length !== 0 ? (
          <div className="col-xl-3 col-lg-3 col-md-3 contact-area scrollable-content">
            <ContactInnerMapSection1data data={data} setMap={setMap} />
          </div>
        ) : null}
      </>
    );
  };
  
  export default ContactInnerMapSection1;
  
