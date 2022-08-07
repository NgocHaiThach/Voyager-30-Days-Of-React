import React, { useState } from 'react'
import user_img from '../../assets/images/user-img.png';
import user_asabe from '../../assets/images/asabe.jpeg';
import './Ex3.css';

export default function Ex3() {
    const SkillItem = ({ name }) => {
        return (<span className='skill-item'>{name}</span>)
    }
    const [toggleMode, setToggleMode] = useState(false);

    const bgColorDark = {
        backgroundColor: '#141927',
        color: 'white',
        padding: '20px',
        borderBottom: '1px solid #fff'
    }
    const bgColorWhite = {
        backgroundColor: 'white',
        color: 'black',
        padding: '20px',

    }

    const bgColorAqua = {
        backgroundColor: '#7be5fa',
        color: 'black',
    }

    return (
        <div className="container-ex3">
            <div className="top__header-ex3" style={toggleMode ? bgColorDark : bgColorAqua}>
                <h2>Welcome to 30 Days Of React</h2>
                <span>Getting started React</span>
                <span>Javascript Library </span>
                <span>Asabeneh Libbrary</span>
                <span>Oct 7, 2020</span>
            </div>
            <div style={toggleMode ? bgColorDark : bgColorWhite}>
                <div className="header-ex3">
                    <img src={user_asabe} alt="user image" className="imager_user-ex3" />
                    <div className='user-name-ex3' >
                        <span className="name-ex3">ASABENEH YETAYEH</span>
                        <i className="fa-solid fa-circle-check check-icon"></i>
                    </div>
                </div>
                <p className="des-ex3">Senior Developer, Finland</p>

                <p className="title-ex3">SKILLS</p>
                <div>
                    <span className='skill-item'>Data Analys</span>
                    <SkillItem name='HTML' />
                    <SkillItem name='css' />
                    <SkillItem name='MongoDB' />
                </div>
                <div className="time">
                    <i className="fa-solid fa-clock icon-time"></i>
                    <span>Joinedon Aug 30, 2020</span>
                </div>

                <button onClick={() => setToggleMode(!toggleMode)} className='btn-tonggle'>Toggle Mode</button>
            </div>
        </div>
    )
}

