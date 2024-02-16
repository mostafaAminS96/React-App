import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../Redux/slices/cartSlice";

function ProductDetail() {

const getState = useLocation();
const data = getState.state;

const dispatch = useDispatch();
const addProduct = ()=> {
  dispatch(addToCart(data))
}


  return (
    <React.Fragment>
      <div>
        <div className="col">
          <div className="card h-100">
            <img
              src={data.thumbnail}
              className="card-img-top"
              alt="Hollywood Sign on The Hill"
            />
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p
                className="card-text"
                style={{ overflow: "scroll", height: "50px" }}
              >
                {data.description}
              </p>
              <button className="btn btn-primary" onClick={addProduct}>Add to CART</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductDetail;
