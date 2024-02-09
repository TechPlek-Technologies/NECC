import { Link } from "react-router-dom";
const CorporateInformationInnerPdf1 = ({id}) => {
    const vicePresident = [
      {
            serial: 1,
            name: "Mr. Manoj Kumar Jain",
            designation: "123123",
            pageID: 1,
        
      },
     {
                serial: 2,
                name: "Mr. Ashutosh Dubey",
                designation: "123123",
                pageID: 1,
            
        },
        {
            serial: 3,
            name: "Mr. Saurav Upadhyay",
            designation: "123123",
            pageID: 1,

        },
    ];
      return (
        vicePresident.map((item) => (
            <>
            <ul className=' list-inner-wrap list-corporateInfo' id={item.id} >
            <li> <Link>
            {item.name}
            </Link></li>
         
          </ul> </>))
      );
    };

    export default CorporateInformationInnerPdf1;