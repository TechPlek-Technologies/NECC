const CodeOfConductInnerPdf = ({id}) => {
    const vicePresident = [
      {
            serial: 1,
            name: "Philosophy",
            designation: "123123",
            summary: "A Graduate in arts from Delhi University and Masters in Arts from Rajasthan University",
            pageID: 1,
            description: "<p>sdf d ag</p><ul><li>ewrqwer</li><li>1231</li><li><br></li></ul>",
            pdfFileName: "e-del-Request-format.pdf",
            pdfFilePath: "./uploads/e-del-Request-format.pdf",
        
      },
      {
        
            serial: 2,
            name: "Applicability",
            designation: "123123",
            summary: "A Graduate in arts from Delhi University and Masters in Arts from Rajasthan University",
            pageID: 2,
            description: "<p>sdf d ag</p><ul><li>ewrqwer</li><li>1231</li><li><br></li></ul>",
            pdfFileName: "e-del-Request-format.pdf",
            pdfFilePath: "./uploads/e-del-Request-format.pdf",
        
      },
      {
        
        serial: 3,
        name: "Quality of Services",
        designation: "123123",
        summary: "A Graduate in arts from Delhi University and Masters in Arts from Rajasthan University",
        pageID: 3,
        description: "<p>sdf d ag</p><ul><li>ewrqwer</li><li>1231</li><li><br></li></ul>",
        pdfFileName: "e-del-Request-format.pdf",
        pdfFilePath: "./uploads/e-del-Request-format.pdf",
    
  },
    ];
      return (
        <div>
          {vicePresident.map((president) => (
            <div key={president.id} className="service-details-wrap">
              <b>{president.name}</b>
              <div dangerouslySetInnerHTML={{ __html: president.description }} />
            </div>
          ))}
        </div>
      );
    };

    export default CodeOfConductInnerPdf;