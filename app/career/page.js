"use client";
import Layout from "@/components/layout/Layout";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { client } from "../client";
import { toast, ToastContainer } from "react-toastify";
import emailjs from '@emailjs/browser';

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [resume, setResume] = useState("");
  const [message, setMessage] = useState("");
  const [careerEntries, setCareerEntries] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "formfield"]{ job_description, experience, apply }`)
      .then((data) => setCareerEntries(data))
      .catch(console.error);
  }, []);

  // console.log(careerEntries);

  const sendMessage = async () => {
    console.log(resume);
    const doc = {
      _type: "career",
      name: name,
      email: email,
      number: phone,
      qualifications: qualifications,
      resume: {
        _type: "file",
        asset: {
          _type: "reference",
          _ref: resume?._id,
        },
      },
      message: message,
    };
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_USER_ID;

    client
      .create(doc)
      .then((result) => {
       
          const emailParams = {
            from_name: name,
            email: email,
            qualifications: qualifications,
            phone:phone,
            resume:resume?.name || "No resume uploaded",
          };
    
          const res =  emailjs.send(serviceID, templateID, emailParams, userID).then((res) => {
            alert("Message Sent successfully");
            setName("")
        setEmail("");
        setPhone("");
        setQualifications("");
        setResume("");
        setMessage("");
          }).catch((error) => {
            alert("Failed to send message");
            console.error(error);
          });
    
      
       
        
    
        
      })
      .catch((error) => {
        toast.error("Failed to send message");
        console.error(error);
      });

      
      
    
    // router.push('/')


  };
  const handleupload = (e) => {
    const { type, name } = e.target.files[0];
    client.assets
      .upload("file", e.target.files[0], {
        contentType: type,
        filename: name,
      })
      .then((document) => {
        setResume(document);
      })
      .catch((error) => {
        // console.log("Image upload error", error);
      });
  };
  return (
    <>
      <Layout headerStyle={4} footerStyle={3} breadcrumbTitle="Career">
        <section className="contact-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="services-four__left">
                  <div className="section-title-three-text-left">
                    <div className="section-title-three__tagline-box">
                      <p className="section-title-three__tagline">
                        JOIN THE TEAM
                      </p>
                    </div>
                    <h2 className="contact-page__sub-title text-center">
                      Ashmit & Associate is always looking for self - driven,
                      passionate and skilled individuals. If you would like to
                      be a part of our team, please fill the form below:
                    </h2>
                  </div>
                </div>
              </div>

              <div class=" pb-5 ">
                <h2 class="text-center mb-3">Explore Career Opportunities</h2>
                <p class="text-center text-muted mb-4">
                  We're looking for talent that's ready to make an impact.
                </p>

                <div class="row career-header border rounded text-center flex justify-center">
                  <div class="col-4 flex justify-center p-1">Position</div>
                  <div class="col-3 flex justify-center p-1">Experience</div>
                  <div class="col-5 flex justify-center p-1">Apply Now</div>
                </div>

                {careerEntries?.map((item, index) => (
                <div key={index} class="row career-row text-center flex justify-center ">
                  <div class="col-4 flex justify-center">{item?.job_description}</div>
                  <div class="col-3 flex justify-center">{item?.experience}</div>
                  <div class="col-5 flex justify-center ">
                  <a href={item?.apply} target="_blank" class="apply-btn">Apply Now</a>
                  </div>
                </div>
                ))}
                

                
              </div>

              

              <div className="mt-5 col-xl-12 col-lg-12">
                <div className="contact-page__left bg-white p-4 rounded shadow-sm">
                  <h3 className="contact-page__title mb-3 text-center">
                    Get in Touch
                  </h3>

                  <div
                    className="contact-page__form contact-form-validated"
                  >
                    <div className="row">
                      <div className="col-12 mb-3">
                        <label htmlFor="name" className="form-label">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={name}
                          name="name"
                          onChange={(e) => setName(e.target.value)}
                          id="name"
                          className="form-control"
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3 ">
                        <label htmlFor="email" className="form-label">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          placeholder="e.g: your@email.com"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3 px-2">
                        <label htmlFor="phone" className="form-label">
                          Phone Number *
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="form-control"
                          placeholder="+91 xxxx xxxxx"
                          required
                        />
                      </div>
                      <div className="col-12 mb-3 ">
                        <label htmlFor="qualifications" className="form-label">
                          Qualifications
                        </label>
                        <input
                          type="text"
                          id="qualifications"
                          value={qualifications}
                          onChange={(e) => setQualifications(e.target.value)}
                          className="form-control"
                          placeholder="B.Tech, M.Tech"
                        />
                      </div>

                      {/* Message field */}
                      <div className="col-12 mb-3">
                        <label htmlFor="message" className="form-label">
                          Message <span>(Optional)</span>
                        </label>
                        <textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="form-control"
                          placeholder="Type here..."
                          style={{ height: "150px" }}
                        ></textarea>
                      </div>

                      <div className="col-12 mt-5 text-center">
                        <label htmlFor="resume" className="form-label">
                          Resume
                        </label>
                        <input
                          accept=".pdf"
                          type="file"
                          name="resume"
                          onChange={handleupload}
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="col-12 mt-5 text-center">
                        <button
                          onClick={sendMessage}
                         
                          className="career-btn"
                        >
                          SEND MESSAGE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*News One Start*/}
        {/*
        <section className="news-one">
          <div className="container">
            <div className="row">
              {/*News One Single Start
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="news-one__single">
                  <div className="news-one__img-box">
                    <div className="news-one__img">
                      <img src="assets/images/blog/news-1-1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="news-one__content">
                    <div className="news-one__content-top">
                      <p className="news-one__sub-title">INBOUND MARketing</p>
                      <h3 className="news-one__title">
                        <Link href="news-details">
                          We would love to share a similar experience
                        </Link>
                      </h3>
                      <p className="news-one__text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry...
                      </p>
                    </div>
                    <div className="news-one__person-and-date">
                      <div className="news-one__person">
                        <div className="news-one__person-img">
                          <img
                            src="assets/images/blog/news-one-person-img.jpg"
                            alt=""
                          />
                        </div>
                        <div className="news-one__person-text">
                          <p>by John Carry on</p>
                        </div>
                      </div>
                      <div className="news-one__date">
                        <p>
                          <span className="icon-icon-calendar"></span>Oct 01,
                          2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*News One Single End*/}

        {/*News One Single Start*
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="500ms"
              >
                <div className="news-one__single">
                  <div className="news-one__img-box">
                    <div className="news-one__img">
                      <img src="assets/images/blog/news-1-5.jpg" alt="" />
                    </div>
                  </div>
                  <div className="news-one__content">
                    <div className="news-one__content-top">
                      <p className="news-one__sub-title">INBOUND MARketing</p>
                      <h3 className="news-one__title">
                        <Link href="news-details">
                          What activities are done in the development?
                        </Link>
                      </h3>
                      <p className="news-one__text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry...
                      </p>
                    </div>
                    <div className="news-one__person-and-date">
                      <div className="news-one__person">
                        <div className="news-one__person-img">
                          <img
                            src="assets/images/blog/news-one-person-img-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="news-one__person-text">
                          <p>by John Carry on</p>
                        </div>
                      </div>
                      <div className="news-one__date">
                        <p>
                          <span className="icon-icon-calendar"></span>Oct 01,
                          2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*News One Single End*/}
        {/*News One Single Start
              <div
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="600ms"
              >
                <div className="news-one__single">
                  <div className="news-one__img-box">
                    <div className="news-one__img">
                      <img src="assets/images/blog/news-1-6.jpg" alt="" />
                    </div>
                  </div>
                  <div className="news-one__content">
                    <div className="news-one__content-top">
                      <p className="news-one__sub-title">INBOUND MARketing</p>
                      <h3 className="news-one__title">
                        <Link href="news-details">
                          What is the most important thing in a designing?
                        </Link>
                      </h3>
                      <p className="news-one__text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry...
                      </p>
                    </div>
                    <div className="news-one__person-and-date">
                      <div className="news-one__person">
                        <div className="news-one__person-img">
                          <img
                            src="assets/images/blog/news-one-person-img-3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="news-one__person-text">
                          <p>by John Carry on</p>
                        </div>
                      </div>
                      <div className="news-one__date">
                        <p>
                          <span className="icon-icon-calendar"></span>Oct 01,
                          2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*News One Single End
            </div>
          </div>
        </section>
        */}
        {/*News One End*/}
        <ToastContainer />
      </Layout>
    </>
  );
}
