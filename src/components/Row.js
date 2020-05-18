import React from "react"
import "../styles/row.css"

function Row (props) {
    const price = "$" + props.flight.price
    return (
        <tr className="row-design" >
          <td className="data-center">{props.flight.company}</td>
          <td className="data-center">{props.flight.startTime}</td>
          <td className="data-center">{props.flight.arriveTime}</td>
          <td className="data-center">{price}</td>
        </tr>
    )
}

export default Row;