import React from 'react'

const spinner=()=> {
    return (
      <center>
        <div className="spinner-border text-info my-4" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      </center>
    )
}

export default spinner
