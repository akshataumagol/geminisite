import React, { useContext, useState } from "react";
import "../main/Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} />
            </div>
            <div className="main-container">
                {!showResult ? <>


                    <div className="greet">
                        <p><span>Hello Akshata</span></p>
                        <p>How can I Help you today? </p>
                    </div>


                    <div className="cards">
                        <div className="card">
                            <p>Suggest beautiful places to see an Upcoming road trip </p>
                            <img src={assets.compass_icon} />
                        </div>

                        <div className="card">
                            <p>Tips for creating a calm and relaxing environment</p>
                            <img src={assets.bulb_icon} />
                        </div>

                        <div className="card">
                            <p>Packing essentials for different types of trips</p>
                            <img src={assets.message_icon} />
                        </div>

                        <div className="card">
                            <p>Simple ways to incorporate sustainability into daily life</p>
                            <img src={assets.code_icon} />
                        </div>
                    </div>
                </>
                    :<div className="result">

                        <div className="result-title">
                            <img src={assets.user_icon} />
                            <p>{recentPrompt} </p>
                        </div>

                        <div className="result-data">
                            <img src={assets.gemini_icon} />
                            {loading?
                        <div className="loader">
                            <hr/>
                            <hr/>
                            <hr/>

                        </div>:    
                      
                            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Enter a Prompt"></input>
                        <div>
                            <img src={assets.gallery_icon} />
                            <img src={assets.mic_icon} />
                            {input? <img onClick={() => onSent()} src={assets.send_icon} />:null}
                        </div>

                    </div>
                    <p className="bottom-info">CopyRigh @ || Solvonext </p>
                </div>
            </div>
        </div>

    )
}
export default Main

