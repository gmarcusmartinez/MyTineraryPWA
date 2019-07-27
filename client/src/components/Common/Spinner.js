import React from 'react'

const Spinner = () => {
  return (
    <div className="center" style={{ marginTop: '50vmin' }}>
      <div className="preloader-wrapper big active loader">
        <div className="spinner-layer spinner-blue">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Spinner
