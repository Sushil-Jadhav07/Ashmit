import CounterUp from "@/components/elements/CounterUp"


export default function Funfacts() {
    return (
        <>

        <section className="counter-one">
            <div className="container">
                <div className="counter-one__inner">
                    <div className="counter-one__bg float-bob-y"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/counter-one-bg.png)' }} ></div>
                    <ul className="counter-one__count-list list-unstyled">
                        <li>
                            <div className="counter-one__icon">
                                <span className="icon-icon-years-experience"></span>
                            </div>
                            <div className="counter-one__count count-box">
                                    <CounterUp end={10} />
                            </div>
                            <p className="counter-one__text">Years of Experience</p>
                        </li>
                        <li>
                            <div className="counter-one__icon">
                                <span className="icon-icon-team-members"></span>
                            </div>
                            <div className="counter-one__count count-box">
                                <CounterUp end={89} />
                            </div>
                            <p className="counter-one__text">Team members</p>
                        </li>
                        <li>
                            <div className="counter-one__icon">
                                <span className="icon-icon-successful-project"></span>
                            </div>
                            <div className="counter-one__count count-box">
                                    <CounterUp end={789} />
                                <span>+</span>
                            </div>
                            <p className="counter-one__text">Successful Projects</p>
                        </li>
                        <li>
                            <div className="counter-one__icon">
                                <span className="icon-icon-satisfied-clients"></span>
                            </div>
                            <div className="counter-one__count count-box">
                                    <CounterUp end={650} />
                                <span>+</span>
                            </div>
                            <p className="counter-one__text">Satisfied Clients</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    
            

        </>
    )
}
