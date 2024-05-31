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
             
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

 

        // Call the fetch data function
        fetchData();
    }, []);

    const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return (
        <div className="tagcloud">
            {sortedData && sortedData?.map((item) => (
                
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