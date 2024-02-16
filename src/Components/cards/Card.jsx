// import React from 'react'
import './Card.css'

function Card(props) {


    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://img.freepik.com/free-psd/coffee-cup-icon-isolated-3d-render-illustration_47987-8773.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of
                    the content.
                </p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: props.color  }}>
                    {props.age}
                </a>
            </div>
        </div>
    )
}

export default Card