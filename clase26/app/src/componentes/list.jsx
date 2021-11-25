const list = ["Tomas","Perro","Lola","Luz"]

const List = ()=>{
    return(
      <div>{list.map((el,i)=><div key={i}>{el}</div>)}</div>
    )
  }
  
export default List;