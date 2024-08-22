import React from "react";
import Typewriter from 'typewriter-effect/';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import pic5 from './pic5.jpg';
import pic6 from './pic6.jpg';
import pic7 from './pic7.jpg';
import pic8 from './pic8.jpg';
import pic9 from './pic9.jpg';
import pic10 from './pic10.jpg';
import pic11 from './pic11.png';
import pic12 from './pic12.png';
import pic13 from './pic13.png';
import pic14 from './pic14.PNG';
import pic15 from './pic15.PNG';
import pic16 from './pic16.PNG';
import pic17 from './pic17.PNG';
import pic18 from './pic18.PNG';
import pic19 from './pic19.png';
function Page1() {
    return <>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mt-5">
                    <h1>Accelerate Your Business Growth with the Power of</h1>
                    <span style={{ color: "#89dc12", fontSize: "30px" }} className="type"><Typewriter
                        options={{
                            strings: ['AskEVA WhatsApp API'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></span>
                    <p className="pra">Leverage the power of WhatsApp with the Official API and take your business communication to new heights. Say goodbye to number blocks and try it for free today!</p>
                    <div className="tickimg">
                        <span> &#10004; No Monthly Subscription</span>
                        <span> &#10004; One time Set-up Fee</span>
                        <span> &#10004; Custom Chatbot</span>
                    </div>
                    <div className="mt-5 book">
                        <button className="demobtn">Book a Demo</button><span className="ms-5" style={{ fontWeight: "bold" }}> PLAY NOW </span><span className="ms-5"><img src={pic1} alt="askeva" /></span>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid rotateme pic2" src={pic2} alt="askeva" />
                    <img className="img-fluid pic3" src={pic3} alt="askeva" />
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-5">
                        <h1>Seamless Integrations</h1>
                        <h5 className="mb-5">Easily connect your favorite e-stores, CRMs, and Other tools</h5>
                        <img className="img-fluid imgs " src={pic5} loading="lazy" style={{ border: "1px solid #ccc" }} />
                        <img className="img-fluid imgs " src={pic6} loading="lazy" style={{ border: "1px solid #ccc" }} />
                        <img className="img-fluid imgs " src={pic7} loading="lazy" style={{ border: "1px solid #ccc" }} />
                        <img className="img-fluid imgs " src={pic8} loading="lazy" style={{ border: "1px solid #ccc" }} />
                        <img className="img-fluid imgs " src={pic9} loading="lazy" style={{ border: "1px solid #ccc" }} />
                        <img className="img-fluid imgs " src={pic10} loading="lazy" style={{ border: "1px solid #ccc" }} />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-7 col-md-6 col-lg-4 mt-5">
                        <div className="featured-item text-center pic11">
                            <div className="featured-icon">
                                <img className="img-fluid" src={pic11} />
                            </div>
                            <div className="featured-title">
                                <h5>Custom Bot</h5>
                            </div>
                            <div className="featured-desc">
                                <p>Connect all messaging platforms to your CRM and turn your chats into sales</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-7 col-md-6 col-lg-4 mt-5">
                        <div className="featured-item text-center pic11">
                            <div className="featured-icon">
                                <img className="img-fluid" src={pic12} />
                            </div>
                            <div className="featured-title">
                                <h5>Time Efficiency</h5>
                            </div>
                            <div className="featured-desc">
                                <p>AskEva responds faster than humans to automate processes through Artificial Intelligence(AI) to minimize your business efforts.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-7 col-md-6 col-lg-4 mt-5">
                        <div className="featured-item text-center pic11">
                            <div className="featured-icon">
                                <img className="img-fluid" src={pic13} />
                            </div>
                            <div className="featured-title">
                                <h5>Adaptable</h5>
                            </div>
                            <div className="featured-desc">
                                <p>AskEva WhatsApp chatbots are user-friendly and easily integrated with other platforms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="section-title">
                            <h6>Features</h6>
                            <h2>Turn Your WhatsApp Conversation into <span style={{ color: "#89dc12", fontSize: "50px" }}>Leads</span></h2>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 box">
                        <div>
                            <div>
                                <img src={pic14} />
                            </div>
                            <div>
                                <h5>Multi-access and Workflow Management</h5>
                            </div>
                            <div>
                                <p>Empower your customer support team with seamless collaboration through unlimited simultaneous logins</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 box">
                        <div>
                            <div>
                                <img src={pic15} height={30} width={40} className="mt-2" />
                            </div>
                            <div>
                                <h5 className="mt-3">Marketing Automations</h5>
                            </div>
                            <div className="p">
                                <p>Segment your customers and send targeted, automated campaigns for maximum impact.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 box">
                        <div>
                            <div>
                                <img src={pic16} />
                            </div>
                            <div>
                                <h5>Integrations</h5>
                            </div>
                            <div className="p">
                                <p>Connect your eCommerce and CRM to WhatsApp API for seamless communication with customers</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 box">
                        <div>
                            <div>
                                <img src={pic17} />
                            </div>
                            <div>
                                <h5>Chatbots</h5>
                            </div>
                            <div className="p">
                                <p>Streamline customer support with automated FAQs and smart routing rules to quickly assign conversations to team members.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mt-5">
                        <img src={pic18} />
                    </div>
                    <div className="col-lg-6 col-md-12 mt-5">
                        <div className="title-1 mb-4">
                            <h6>Whatsapp</h6>
                            <h2 className="title-2 mt-3">AI Chatbot Service Provider</h2>
                            <p className="mb-0 text">Askeva the Whatsapp Based Chatbot Service Provider. Reach
                                customers with personalized marketing campaigns through WhatsApp and boost sales.</p>
                            <p className="par1"><span>&#10004;</span>Segment your customers based on attributes and past behaviour for targeted messaging.</p>
                            <p className="par2"><span>&#10004;</span>Create Engaging & Interactive Messages with Rich Media!</p>
                            <p className="par3"><span>&#10004;</span>Track the success of your campaigns with metrics for sent, delivered, read, and replied.</p>
                            <button className="par-btn">About AskEVA</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Page1
