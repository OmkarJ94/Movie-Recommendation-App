import React from 'react'

const Loading = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "8px" }}>
            <button className="btn btn-primary" type="button">
                <span className="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>
    )
}

export default Loading