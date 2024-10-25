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

        
         {/*FAQ Two Start*/}
        <section className="faq-two">
            <div className="faq-two__shape-1 float-bob-y">
                <img src="assets/images/shapes/faq-two-shape-1.png" alt=""/>
            </div>
            <div className="faq-two__shape-2 img-bounce">
                <img src="assets/images/shapes/faq-two-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="faq-two__inner">
                    <h3 className="section__title-two">Frequently asked questions</h3>
                    <div className="accrodion-grp faq-two-accrodion" data-grp-name="faq-two-accrodion">
                        <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                            <div className="accrodion-title">
                                <h4>What activities are done in the development?</h4>
                            </div>
                            <div className="accrodion-content">
                                <div className="inner">
                                    <p>Follow these 6 steps and you’ll get your Help Scout account up and running in no
                                        time. If you'd like to get a full tour of Help Scout and all its features,
                                        attend one of our weekly live demos or take a video tour. </p>
                                </div> {/* /.inner */}
                            </div>
                        </div>
                        <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                            <div className="accrodion-title">
                                <h4>How can i use landbook When should I use a Tag?</h4>
                            </div>
                            <div className="accrodion-content" onClick={() => handleToggle(2)}>
                                <div className="inner">
                                    <p>Follow these 6 steps and you’ll get your Help Scout account up and
                                        running in no time. If you'd like to get a full tour of Help Scout and
                                        all its features, attend one of our weekly live demos or take a video
                                        tour.</p>
                                </div> {/* /.inner */}
                            </div>
                        </div>
                        <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                            <div className="accrodion-title">
                                <h4>Are social media good for the business growth?</h4>
                            </div>
                            <div className="accrodion-content">
                                <div className="inner">
                                    <p>Follow these 6 steps and you’ll get your Help Scout account up and
                                        running in no time. If you'd like to get a full tour of Help Scout and
                                        all its features, attend one of our weekly live demos or take a video
                                        tour.</p>
                                </div> {/* /.inner */}
                            </div>
                        </div>
                        <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                            <div className="accrodion-title">
                                <h4>How often should i work on the digital marketing?</h4>
                            </div>
                            <div className="accrodion-content">
                                <div className="inner">
                                    <p>Follow these 6 steps and you’ll get your Help Scout account up and
                                        running in no time. If you'd like to get a full tour of Help Scout and
                                        all its features, attend one of our weekly live demos or take a video
                                        tour.</p>
                                </div> {/* /.inner */}
                            </div>
                        </div>
                        <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                            <div className="accrodion-title">
                                <h4>What are the different types of marketing solutions?</h4>
                            </div>
                            <div className="accrodion-content">
                                <div className="inner">
                                    <p>Follow these 6 steps and you’ll get your Help Scout account up and
                                        running in no time. If you'd like to get a full tour of Help Scout and
                                        all its features, attend one of our weekly live demos or take a video
                                        tour.</p>
                                </div> {/* /.inner */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         {/*FAQ Two End*/}
            
        </>
    )
}
