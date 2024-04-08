const ContactInnerMapSection2 = ({ map,filteredData }) => {
  const defaultMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28003.432807585355!2d77.21011199999997!3d28.67680800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd785160ae37%3A0xd0edb8d4ecfa9cbf!2sNorth%20Eastern%20Carrying%20Corporation%20Ltd.%20(NECC)!5e0!3m2!1sen!2sin!4v1709791237176!5m2!1sen!2sin";


  const customFrame=`<iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src=${map}><a href="https://www.gps.ie/">gps devices</a></iframe>`
  
  return (
    <div className={filteredData?.length === 0 ? "col-xl-12 col-lg-12 col-md-12" : "col-xl-9 col-lg-9 col-md-9"}>
    <div className="contact-g-map">
      {map === "" ? (
        <iframe
          title="main"
          src={defaultMapSrc}
          height="450"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: customFrame }} />
      )}
    </div>
  </div>
  
  );
};

export default ContactInnerMapSection2;
