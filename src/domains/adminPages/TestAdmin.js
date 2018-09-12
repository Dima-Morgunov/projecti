import React, {Component} from 'react';
import axios from  "axios"
import AdminPanel from  '../adminPages/AdminPanel'
import LoginAdminPage from "./LoginAdminPage";

 class TestAdmin extends Component{


     state = {
          isLogin: true,
     };

     onSubmit = (data) => {
         console.log(data)
         axios.post(`url`, data)
             .then(result => localStorage.setItem(`token`, result.data.token))
             .then(() => this.setState({isLogin : true}))
     }

     render(){
         const { isLogin } = this.state;

         return(
             <div>
                 {/*{isLogin ?
                     <AdminPanel />
                     :
                     <LoginAdminPage submit={this.onSubmit}/>}
                 */}
                 <AdminPanel />
             </div>
         )

     }
 }

export default TestAdmin

