import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
import {
  Avatar,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const BannerFour = () => {
  const [state, setState] = useState({
    nav1: null,
    nav2: null,
  });

  var { slider1, slider2 } = useRef();
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [cnmtRequest, setCnmtRequest] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setState({
      nav1: slider1,
      nav2: slider2,
    });
  }, []);

  const GetConsignmentDetail = () => {
    setLoading(true);
    axios
      .post("https://tracking.neccgroup.com/Tracking.ashx", {
        interface: "RestAPI",
        method: "GetConsignmentDetail",
        parameters: {
          VNO: trackingNumber,
        },
        token: "NECC",
      })
      .then((response) => {
        console.log("Response:", response.data);
        if (response.data) {
          const value = JSON.parse(response.data.Value);
          // Extract cnmtDetail from the response
          const cnmtDetail = value.cnmtDetail;
          setData(cnmtDetail);
          setLoading(false);
        }
        // Handle response data
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Unsuccessful request, Try again");
      });
  };
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const handleInputChange = (event) => {
    setTrackingNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    // Implement your submission logic here
    event.preventDefault();
    GetConsignmentDetail();
    setIsEditDialogOpen(true);
    // You can add your logic to submit the tracking number here
  };

  return (
    <>
      {/* header start */}
      <div className="home-area home-v2 ">
        <div className="header-slider header-slider2">
          <Slider
            {...settings}
            asNavFor={state.nav2}
            ref={(slider) => (slider1 = slider)}
            autoplay={true}
            autoplaySpeed={2000}
            pauseOnHover={false}
          >
            <div>
              <div
                className="header-bg background"
                style={{
                  backgroundImage: "url('/assets/img/banner/1.webp')",
                }}
              ></div>
            </div>

            <div>
              <div
                className="header-bg background1"
                style={{
                  backgroundImage: "url('/assets/img/banner/8.webp')",
                }}
              ></div>
            </div>

            <div>
              <div
                className="header-bg background2"
                style={{
                  backgroundImage: "url('/assets/img/banner/2 (1).webp')",
                }}
              ></div>
            </div>

            <div>
              <div
                className="header-bg background3"
                style={{
                  backgroundImage: "url('/assets/img/banner/4 (1).webp')",
                }}
              ></div>
            </div>

            <div>
              <div
                className="header-bg background4"
                style={{
                  backgroundImage: "url('/assets/img/banner/3.webp')",
                }}
              ></div>
            </div>
          </Slider>
        </div>

        <div className="header-bg">
          <div className="container">
            <div className="row header-height justify-content-start">
              <div className="col-lg-4">
                <div className="header-inner-wrap">
                  <div className="header-inner1">
                    {/* header inner */}
                    <h1 className="title animated slideInRight">
                      Experience Excellence in Logistics{" "}
                    </h1>
                    <div className="btn-wrapper style-02 animated fadeInUpBig">
                      <form onSubmit={handleSubmit}>
                        <input
                          className="single-input-inner1"
                          type="text"
                          placeholder="Enter tracking number"
                          value={trackingNumber}
                          onChange={handleInputChange}
                        />
                        <br />
                        <button
                          type="submit"
                          onClick={() => GetConsignmentDetail()}
                          className="boxed-btn1"
                        >
                          Track Shipment
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* //.header inner */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Dialog
          maxWidth="lg"
          open={isEditDialogOpen}
          onClose={() => setIsEditDialogOpen(false)}
        >
          <DialogContent
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {loading ? (
              <CircularProgress />
            ) : (
              <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Consignment Number</TableCell>
                  <TableCell>Booking Date</TableCell>
                  <TableCell>From Station</TableCell>
                  <TableCell>To Station</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Payment Mode</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => {
                  return (
                    <TableRow hover key={data.id}>
                     
                      <TableCell>{item.CNNO}</TableCell>
                      <TableCell>{item.VDATE}</TableCell>
                      <TableCell>{item.FROMSTATION}</TableCell>
                      <TableCell>{item.TOSTATION}</TableCell>
                      <TableCell>{item.STATUS}</TableCell>
                      <TableCell>{item.PAYMODE}</TableCell>
                     
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            )}
            <Button
              onClick={() => {
                setIsEditDialogOpen(false);
              }}
            >
              Close
            </Button>
          </DialogContent>
        </Dialog>
      </div>
      {/* header end */}
    </>
  );
};

export default BannerFour;
