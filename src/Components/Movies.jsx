import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/slices/cartSlice";

function Movies({data}) {
const nav = useNavigate();
const dispatch = useDispatch();

const showDetail = ()=>{
  nav(`/ProductDetail/${data.id}`, {state: data})
}

const [flag, setFlag] = useState(false);
let [added, setAdded] = useState([]);
const addProduct = ()=> {
  dispatch(addToCart(data))
  setFlag(!flag);
}


  return (
    <React.Fragment>
        <div >
          <div className="col">
            <div className="card h-100">
              <img
                src={data.thumbnail}
                className="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text" style={{overflow: 'scroll', height: '50px'}}>
                    {data.description}
                </p>
                <button className="btn btn-primary" onClick={showDetail}>Show Detail</button>
                {flag? <h4>added</h4>: <button className="btn btn-primary" onClick={addProduct}>Add to CART</button>}
                {/* <button className="btn btn-primary" onClick={addProduct}>Add to CART</button> */}
              </div>
            </div>
          </div>
         </div> 
    </React.Fragment>
  );
}

export default Movies;
