import React from "react"; //Con el fragment agrupo pero desoues no se agrupa en el html
import InternalA from "./componentes/internal_a";
import InternalAB from "./componentes/internal_b";
import Users from "./componentes/users/users";
const App = ()=> ( //con () solo puedo devolver jsx
  <> 
    <div>
      App
    </div>
    <div>
      App
    </div>
    <InternalA/>
    <InternalAB/>
    <Users></Users>
  </>
)







export default App;
