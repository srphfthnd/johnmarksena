import React from 'react';
import './Background.scss'

function Background(props) {
    return (
        <div className="bg">
            <div className="main-container" style={{height: "200vh"}}>
                <div className="row">
                    <div className="header">
                        <div className="title name">Mark <br/> Sena</div>
                        <div className="title sub-title">Software Engineer/Web Developer</div>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default Background;