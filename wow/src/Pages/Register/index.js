import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../../Services/api';

class CallerRegister extends Component {

   state = {
      name: "",
      email: "",
      password: "",
      error: ""
   }

   handleRegister = async e => {
      e.preventDefault();
      const { nameIn, emailIn, passwordIn } = this.state;
      if (!emailIn || !passwordIn) {
         this.setState({ error: "Preencha os campos para continuar" })
      } else {
         try {
            await api.post('/register', {
               name: nameIn,
               email: emailIn,
               password: passwordIn,
               headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Accept-Language': 'en'
               }
            }).then(response => {
               console.log(response.status)
               if (response.status >= 200) {
                  this.props.history.push("/login");
                  window.confirm("Parabens Você foi registrado, por favor confirme no seu email");
               }
            });
         } catch (err) {
            console.log(err)
            this.setState({
               error:
                  "Houve um problema"
            });
         }
      }

   }

   render() {
      return (
         <div>
            <form onSubmit={this.handleRegister}>
               <div>
                  {this.state.error}
               </div>
               <div>
                  <label>Name</label>
                  <input type="text" name="name" placeholder="Name" onChange={e => this.setState({ nameIn: e.target.value })} />
               </div>

               <div>
                  <label>Email</label>
                  <input type="text" name="email" placeholder="Email" onChange={e => this.setState({ emailIn: e.target.value })} />
               </div>

               <div>
                  <label>Password</label>
                  <input type="password" name="password" placeholder="Password" onChange={e => this.setState({ passwordIn: e.target.value })} />
               </div>
               <button type="submit">Enviar</button>

            </form>
         </div>
      )
   }
};

export default withRouter(CallerRegister);