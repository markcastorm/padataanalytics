

import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Ourwork from "../pages/Ourwork/Ourwork";
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
            },
            {
                path: '/ourwork',
                element: <Ourwork/>
            }
            
        ]
    }
]


export default routes;