import React from 'react';
import './Background.scss'

function Background(props) {
    return (
        <div className="bg">
            <div className="main-container" style={{}}>
                <div className="row head">
                    <div className="header">
                        <div className="title name">Mark <br/> Sena</div>
                        <div className="title sub-title">Software Engineer/Web Developer</div>
                    </div>
                </div>
                <div className="row body">
                    <div className="content">
                        <div className="sub-header">
                            Introduction
                        </div>
                        <div className="description">
                        I'm Mark Sena, orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <div className="content">
                        <div className="sub-header">
                            Experience
                        </div>
                        <div className="description">
                            
                        </div>
                    </div>
                </div>
                <div className="row footer">
                </div>
            </div>  
        </div>
    );
}

export default Background;