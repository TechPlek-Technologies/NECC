const CorporateSocialResponsibilityPdf = ({id}) => {
    const data2 = [
      {
        id: 1,
        name: "CSR-Policy",
        pdfFileName: "e-del-Request-format.pdf",
        pdfFilePath: "./uploads/e-del-Request-format.pdf",
        createdAt: "2024-01-31T09:41:18.000Z",
        updatedAt: "2024-01-31T09:41:18.000Z",
        eventID: 1,
      },
      {
        id: 2,
        name: "Reports on CSR undertaken by the Company 2021-2022",
        pdfFileName: "e-del-Request-format.pdf",
        pdfFilePath: "./uploads/e-del-Request-format.pdf",
        createdAt: "2024-01-31T10:13:27.000Z",
        updatedAt: "2024-01-31T10:13:27.000Z",
        eventID: 1,
      },
    ];
    return (
      <div className="tagcloud">
        {data2.map((item) => (
          <a
            key={item.id}
            href={item.pdfFilePath}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.name}
          </a>
        ))}
      </div>
    );
  };
  
  export default CorporateSocialResponsibilityPdf;
  