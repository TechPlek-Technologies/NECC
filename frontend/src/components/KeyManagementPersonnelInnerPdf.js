const PresidentComponent = ({description}) => {
   
      return (
        <div>
          
            <div  className="service-details-wrap"
              dangerouslySetInnerHTML={{
                __html: description,
              }}>
              
            </div>
         
        </div>
      );
    };

    export default PresidentComponent;