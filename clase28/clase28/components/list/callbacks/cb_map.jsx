import react from "react"

/**
 * This callback is iterable data.
 * @callback cbPairs
 * @returns {items components} // <li>items<li/>
 */

const mapCb = (el,index)=> <li key={index}>{el}</li>


export default mapCb