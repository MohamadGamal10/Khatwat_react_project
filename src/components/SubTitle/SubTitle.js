import React from 'react';
import '../SubTitle/subtitle.css';

function SubTitle(props) {
  return (
    <div className='mx-auto'>
    <h3 className='subTitle'>{props.title}</h3>
    <div className='line'></div>
</div>
  )
}

export default SubTitle;