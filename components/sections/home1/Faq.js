'use client'
import { useState } from 'react'
 
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>


        <section className="faq-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5">
                        <div className="faq-one__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">FAQs</p>
                                </div>
                                <h2 className="section-title__title">Frequently asked questions</h2>
                            </div>
                            <div className="faq-one__img">
                                <img src="assets/images/resources/faq-one-img-1.jpg" alt=""/>
                                <div className="faq-one__shape-1 float-bob-y">
                                    <img src="assets/images/shapes/faq-one-shape-1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="faq-one__right">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion">
                            <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4><span>Q1.</span>What activities are done in the development?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Follow these 6 steps and you’ll get your Help Scout account up and
                                                running in no time. If you'd like to get a full tour of Help Scout and
                                                all its features, attend one of our weekly live demos or take a video
                                                tour.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4><span>Q2.</span>How can i use landbook When should I use a Tag?</h4>
                                    </div>
                                    <div className="accrodion-content" onClick={() => handleToggle(2)}>
                                        <div className="inner">
                                            <p>Follow these 6 steps and you’ll get your Help Scout account up and
                                                running in no time. If you'd like to get a full tour of Help Scout and
                                                all its features, attend one of our weekly live demos or take a video
                                                tour.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4><span>Q3.</span>Are social media good for the business growth?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Follow these 6 steps and you’ll get your Help Scout account up and
                                                running in no time. If you'd like to get a full tour of Help Scout and
                                                all its features, attend one of our weekly live demos or take a video
                                                tour.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4><span>Q4.</span>How often should i work on the digital marketing?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Follow these 6 steps and you’ll get your Help Scout account up and
                                                running in no time. If you'd like to get a full tour of Help Scout and
                                                all its features, attend one of our weekly live demos or take a video
                                                tour.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                    <div className="accrodion-title">
                                        <h4><span>Q5.</span>What are the different types of marketing solutions?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Follow these 6 steps and you’ll get your Help Scout account up and
                                                running in no time. If you'd like to get a full tour of Help Scout and
                                                all its features, attend one of our weekly live demos or take a video
                                                tour.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
            
        </>
    )
}
