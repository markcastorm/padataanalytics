

import Home from "../pages/Home/Home";


const routes = [
    {
       
        children: [
            {
                path: '/',
                element: <Home/>
            }
            
        ]
    }
]


export default routes;