import React from 'react'
import Adimg from "../img/ad.png"
export default function Ad(props) {
    if (!props.adState) {
        return null;
    }

    return (
    <div className="ading">
       <img src={Adimg} />
    </div>
    )
}
