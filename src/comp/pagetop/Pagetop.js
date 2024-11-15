import React from 'react'
import "./pagetop.scss"
const Pagetop = ({pagetop_text}) => {
  return (
    <>
      <div class="pagetop-parent bg-img-cover parent">
        <div class="page-top-cont cont">
            <h1 className='heading'>
                {pagetop_text}
            </h1>
        </div>
      </div>
    </>
  )
}

export default Pagetop
