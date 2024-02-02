const NewspaperPublicationInnerPdf = ({id}) => {
    const data2 = [
      {
        serial: 1,
        name: "Sh. Shyam Lal Yadav",
        designation: "123123",
        pageID: 1,
        pdfFileName: "e-del-Request-format.pdf",
        pdfFilePath: "./uploads/e-del-Request-format.pdf",
    
  },
  {
    serial: 2,
    name: "Sh. Shyam Lal Yadav",
    designation: "123123",
    pageID: 2,
    pdfFileName: "e-del-Request-format.pdf",
    pdfFilePath: "./uploads/e-del-Request-format.pdf",

},
    ];
    return (
      <div className='tagcloud'>
      {data2.map((item) => (
      <a key={item.id} href={item.pdfFilePath} target="_blank" rel="noopener noreferrer">
          {item.name}
      </a>
      ))}
  </div>
    );
  };
  
  export default NewspaperPublicationInnerPdf;
  