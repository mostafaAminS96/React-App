import { useSelector } from "react-redux"
import Cart from "./Cart";



function ProductCart() {

    const data = useSelector(state => state.cartReducer.cart)
    // console.log(data);

  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginTop: '40px', height: ''}}>
    {data.map(value => {return <div key={value.id}> <Cart data={value} key={value.id} /> </div>
    })}
  </div>
  </>
  )
}

export default ProductCart