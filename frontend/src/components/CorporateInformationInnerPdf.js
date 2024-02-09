const CorporateInformationInnerPdf = ({id}) => {
    const vicePresident = [
      {
            serial: 1,
            name: "Sh. Shyam Lal Yadav",
            summary: "Mr. Sunil Kumar Jain (DIN: 00010695) is Chairman & Managing Director",
            pageID: 1,
      },
      {
        
            serial: 2,
            name: "Mr. Utkarsh Jain",
            summary: "A Graduate in arts from Delhi University and Masters in Arts from Rajasthan University",
            pageID: 2,
      },
    ];
      return (
        <div>
          {vicePresident.map((president) => (
            <div key={president.id} className="service-details-wrap">
              <b>{president.name}</b>
              <p>{president.summary}</p>
            </div>
          ))}
        </div>
      );
    };

    export default CorporateInformationInnerPdf;