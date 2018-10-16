import React from "react";

const Card = (props) => {
    var bookList = props.searched.map(item => {
        return <button className="itemlist" onClick={() => props.choose(item)} key={item.id} > <b>{item.title}</b> Written by: {item.author}</button >
    })
    return bookList
}
export default Card;