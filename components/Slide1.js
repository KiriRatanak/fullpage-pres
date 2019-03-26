import React from 'react'
import ReactDom from 'react-dom'
import ReactFullpage from '@fullpage/react-fullpage'

const Slide1 = ({SEL}) => (
    <ReactFullpage.Wrapper >
        <div className={SEL}>Hello World</div>
    </ReactFullpage.Wrapper>
)
       

export default Slide1