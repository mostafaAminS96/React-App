// import ListItem from "./ListItem";

import { useDispatch } from "react-redux";
import { deleteFromCart } from "../Redux/slices/cartSlice";


function Cart({data}) {

  const dispatch = useDispatch()
  const deleteProduct = ()=> {
    // console.log(data);
    dispatch(deleteFromCart({data}))
  }


    return (
    <>
      <div className="card" style={{ width: "18rem"}}>
        <img
            src={data.thumbnail}
            className="card-img-top"
            alt="Skyscrapers"
        />        
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-title">{data.description}</p>
          <button className="btn btn-danger" onClick={deleteProduct}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
