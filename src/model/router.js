import Home from "../components/Home";
  
let router = [
    {
        path:'/',
        component:Home,
        exact:true

    },{
        path:'/news',
        component:News 
    },{
        path:'/user',
        component:User
    }
]
export default router;