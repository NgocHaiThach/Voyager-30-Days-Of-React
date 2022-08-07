import React from 'react';
import html5 from '../../assets/images/html5.png'
import css3 from '../../assets/images/css3.png'
import js from '../../assets/images/js.png'
import react from '../../assets/images/react.png'

export default function Ex1() {
  const styleImg = {
    width: '180px',
    height: '200px',
    margin: '15px',
  }

  const styleDivImg = {
    minWidth: '250px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: '0 65px',
  }
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Front End Technologies</h3>
      <div style={styleDivImg}>
        <img style={styleImg} src={html5} alt="HTML5" />
        <img style={styleImg} src={css3} alt="css3" />
        <img style={styleImg} src={js} alt="js" />
        <img style={styleImg} src={react} alt="react" />
      </div>
    </div>
  )
}
