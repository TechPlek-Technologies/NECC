import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const InvestorsDynamicInnverPdf = ({ id }) => {

    const domain = process.env.REACT_APP_API_DOMAIN;
    // let { reportName, id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${domain}/uploads/pdfFiles/sections/${id}`
                );
                setData(response.data);
                console.log(response.data);
                const fileUrl = `${domain}/pdf/${data[0].pdfFileName}`;
                const response1 = await axios.head(fileUrl);
                console.log(response1);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

 

        // Call the fetch data function
        fetchData();
    }, []);

    return (
        <div className="tagcloud">
            {data && data?.map((item) => (
                
                    <Link key={item.id}
                        to={`${domain}/pdf/${item.pdfFileName}`}
                        target="_blank" rel="noopener noreferrer">
                        <FaRegFilePdf className='list-Investors2' />{item.name}{" "}
                    </Link>
            ))}
        </div>
    );
};

export default InvestorsDynamicInnverPdf;