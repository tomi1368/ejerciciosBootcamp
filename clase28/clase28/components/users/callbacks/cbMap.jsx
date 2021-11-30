import react from "react"

/**
 * This callback is iterable data.
 * @callback cbPairs
 * @returns {items components} // <li>items<li/>
 */

const mapCb = (el,index)=> <li key={index}>{`${el.nombre},${el.edad}`}</li>


export default mapCb