import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReadMoreReact from 'read-more-react';

const jobsData = [
    {
      title: "Branch Manager/ Supervisors",
      description: "The candidate should be capable enough to manage the Branch with profitability and should be preferably from Transport industry. The incumbent should preferably be a graduate with effective communication skills and should be in the age group of 25-40 years.",
      emailSubject: "Post your resume for the post of Branch Manager/ Supervisors",
    },
    {
      title: "Marketing Executives",
      description: "Preferably should have some experience in sales and marketing. The candidate should have a strong flair for marketing and good communication skills and convincing power.",
      emailSubject: "Post your resume for the post of Marketing Executives",
    },
    {
      title: "Operations Executives",
      description: "The Candidate should be capable enough to perform all operational activities and maintain a high level of service. He should have an experience in a similar post for a minimum of 2 years.",
      emailSubject: "Post your resume for the post of Operations Executives",
    },
    {
      title: "Account Executives",
      description: "The Candidate should be a graduate in commerce with 1-2 years of experience.",
      emailSubject: "Post your resume for the post of Account Executives",
    },
    {
      title: "Data Entry Operators",
      description: "The Candidate should have basic knowledge of the Windows operating system.",
      emailSubject: "Post your resume for the post of Data Entry Operators",
    },
  ];

const CurrentOpeningInner = () => {
  return (
    <>
      {/* service area start */}
      <div className='service-area style-2 pd-top-115 pd-bottom-80'>
        <div className='container'>
          <div class="heading text-center mb-50">
              <h2 class="heading__title">CURRENT OPENINGS</h2>
          </div>

          <div className='row'>
            {jobsData.map((job, index) => (
                <div className='col-lg-4' key={index}>
                <div className='single-service-wrap'>
                    <div className='details'>
                    <h5>{job.title}</h5>
                    <p>
                        <ReadMoreReact text={job.description} />
                    </p>
                    <div className='btn-wrap'>
                        <Link className='read-more-text' to={`mailto:resume@neccgroup.com?subject=${encodeURIComponent(job.emailSubject)}`}>
                        Submit Resume{" "}
                        <span>
                            <FaArrowRight />
                        </span>
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default CurrentOpeningInner;
