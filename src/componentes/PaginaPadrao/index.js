// import Banner from "componentes/Banner";
// import { Outlet } from "react-router-dom";

// export default function PaginaPadrao() {
//     return(
//         <main>
//             <Banner/>
//             <Outlet/>
//         </main>
//     )
// }

import React from 'react'
import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

const PaginaPadrao = () => {
  return (
    <main>
        <Banner />

        <Outlet />
    </main>
  )
}

export default PaginaPadrao