

import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";


const routes = [
    {
       
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/services',
                element: <Services/>
            }
            
        ]
    }
]


export default routes;