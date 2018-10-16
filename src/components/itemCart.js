import React from "react";

const CartItem = (props) => {
    var key = 0
    var pickedItem = props.shopping.map(item => {
        return (
            <div key={++key} className="row">
                <div className="col-6" key={item.id}><b>{item.title}</b> </div>
                <div className="col-2" key={item.price}>${item.price}</div>
            </div>
        )
    })
    return (
        pickedItem
    )
}
export default CartItem;