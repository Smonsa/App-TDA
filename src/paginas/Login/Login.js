import React, { useState } from 'react';
import Title from './components/Title/Title';
import  Label from './components/Label/Label';
import  Input from './components/Input/input';

const Login= () =>{

	const [ user, setUser ] = useState(' ');
	const [ password, setPass ] = useState(' ');
	const [ passwordError, setPassError ] = useState(false);
	const [ Login, setLogin ] = useState(false);
	const [ checkError, setcheckError] = useState(false);

	function handleChange(name, value) {
		if(name==="usuario"){
			setUser (value);
			setcheckError(false);
		} else {
			if(value.length < 6){
				setPassError(true);
				setcheckError(false);
			} else {
				setPassError(false);
				setPass(value);
				setcheckError(false);
			}
		}
	};

function ValidSubmit(datos){
	if (datos.user.length > 0 && datos.password.length > 0){
		if (datos.user === "megatron" && datos.password === "333333") {
			const { user, password } = datos;
			let UP = { user, password};
			let UP2 = JSON.stringify(UP);
			localStorage.setItem("datos", UP2);
			setLogin(true);

		} else{
			setLogin(false);
			setcheckError(true);
		}

	} else {
		setLogin(false);
		setcheckError(true);
	}

}

function submit() {
	let account = { user, password}
	if(account) {
		ValidSubmit(account);
	}
};

console.log("usuario:", user)
console.log("usuario:", password)

	return(

			 <div className="Container"> 
				  { Login ? <h1> Epale {user} entraste </h1> :
				 <div className="pa2">
				 
				
					 <Title text=<h1> Nombre Genial Para la App</h1>  />	  
					 { checkError &&
						  <label className="light-red" > Usuario o contraseña incorectos
						 </label > 
					}
					 <Label   text ="Usuario" />
					 <Input 
					 attribute={{
					 	id: "Usuario",
					 	name : "usuario",
					 	placeholder: "Usuario",
					 	type:  "search",
					 	class: "pa3 f6 grow no-underline br-pill ba bw1 ph3  mb2 dib ba b--green bg-lightest-blue"
					 }}
					 handleChange = {handleChange}
					 />

					 <div className="pa2 ">
					 <Label  text ="Contraseña"/>
					  <Input 
					 attribute={{
					 	id: "Contrasena",
					 	name : "contrasena",
					 	placeholder: "Contraseña",
					 	type:  "Password",
					 	class: "pa3 f6 grow no-underline br-pill ba bw1 ph3  mb2 dib ba b--green bg-lightest-blue"
					 }}
					 handleChange = {handleChange}
					 param={passwordError}
					 />

					 { passwordError &&
					 <label className="light-red">
					 	Contraseña inválida, debe ser mayor a 6 caracteres
					 </label>
					  }
					 </div>
					<button className= "pa3 f9 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib ba b--green bg-lightest-blue" onClick={submit}>
						Ingresar
					</button>				 
				
				 
				 </div>
				  }
			 </div>
			  
		);
}

export default Login;