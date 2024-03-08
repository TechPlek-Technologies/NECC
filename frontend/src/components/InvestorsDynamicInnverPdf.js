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
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        // Call the fetch data function
        fetchData();
    }, []);

    return (
        <div>
            {data && data?.map((item) => (
                <div key={item.id} className="service-details-wrap">
                   
                    {<Link key={item.id}
                        to={`${domain}/pdf/${item.pdfFileName}`}
                        target="blank">
                        <FaRegFilePdf className='list-Investors2' />{item.name}{" "}
                    </Link>}
                </div>
            ))}
        </div>
    );
};

export default InvestorsDynamicInnverPdf;