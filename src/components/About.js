import React, { useState } from 'react'

export default function About() {
    const[dark, setMyDark] = useState({
        color: 'black',
        backgroundColor: 'white',
    })

    const [btnText, setBtnText] = useState('Enable Dark Mode')
    const  handleDarkMode = () => {
            if(dark.color === 'black') {
             setMyDark ({
                    color: 'white',
                    backgroundColor: 'black',
                    border: '1px solid  white',
                
                })
                setBtnText('Enable Light Mode')
            }   
            else {
             setMyDark ({
                    color: 'black',
                    backgroundColor: 'white',
                    
                })
                setBtnText('Enable Dark Mode')
            }
    }
  return (
    <div className='container' style={dark}>
         <h3 className=' container mx-2 fs-2'>About Us</h3>
        <div className="accordion my-3" id="accordionExample"  >
        <div className="accordion-item" >
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" style={dark} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={dark}>
            <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={dark}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={dark} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
        <div className="accordion-body" style={dark}>
            <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={dark} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
        <div className="accordion-body" style={dark}>
            <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
        </div>
        <div className="container my-2 p-3">
        <button type='button' className='btn btn-primary  }' onClick={handleDarkMode}>{btnText}</button>
        </div>
    </div>
  )
}
