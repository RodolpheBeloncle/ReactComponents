import React from "react";


const TotalCommand = ({cartTotal})=> {
    return(
    <p>
    Total des dépenses : <em>{cartTotal} €</em>
  </p>
    )
}

export default TotalCommand;