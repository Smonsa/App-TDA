import React, { useState } from 'react';
import Title from './components/Title/Title';
import  Label from './components/Label/Label';
import  Input from './components/Input/input';
import Logine from '../Login/Login';

const Register = () =>{

	const [ user, setUser ] = useState(' ');
	const [ password, setPass ] = useState(' ');
	const [ password2, setPass2 ] = useState(' ');
	const [ passwordError, setPassError ] = useState(false);
	const [ passwordError2, setPassError2 ] = useState(false);
	const [ Login, setLogin ] = useState(false);
	const [ Registro, setRegistro ] = useState(false);
	const [ checkError, setcheckError] = useState(false);

	function handleChange(name, value) {
		if(name==="usuario"){
			setUser (value);
			setcheckError(false);
		} else {
			if(value.length < 6 && name==="contrasena" ){
				setPassError(true);
				setcheckError(false);
			} else if (name==="contrasena"){
				setPassError(false);
				setPass(value);
				setcheckError(false);
			}
		}
		if(name==="contrasena2"){
			setPass2 (value);
			setcheckError(false);
			setPassError2(false);
		} 
	};

	function ValidSubmit(datos){
	if (datos.user.length > 0 && datos.password.length > 0){
		
			const { user, password } = datos;
			let UP = { user, password};
			let UP2 = JSON.stringify(UP);
			localStorage.setItem("datos", UP2);
			setLogin(true);

		

	} else {
		setLogin(false);
		setcheckError(true);
	}

}

function submit() {
	let account = { user, password}
	if(password === password2 ) {
		ValidSubmit(account);
		setPassError2(false);
	} else {
		setPassError2(true);
	}
};

console.log("usuario:", user)
console.log("usuario:", password)
console.log("usuario:", password2)
	return(

		
		<div className="container">
		{ Login ? <Logine/> :

			<div className="pa2  ">
			{ checkError &&
						  <label className="light-red" > Error en los datos, vuelva a verificar
						 </label > 
					}
			<Title text=<h1> Ingrese sus datos</h1>  />
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

					 <div className="pa2  ">
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
					 	Contraseña inválida, debe ser mayor a 5 caracteres
					 </label>
					  }
					 </div>

					 <div className="pa2  ">
					 <Label  text ="Vuelva a ingresar su Contraseña"/>
					  <Input 
					 attribute={{
					 	id: "Contrasena2",
					 	name : "contrasena2",
					 	placeholder: "Contraseña",
					 	type:  "Password",
					 	class: "pa3 f6 grow no-underline br-pill ba bw1 ph3  mb2 dib ba b--green bg-lightest-blue"
					 }}
					 handleChange = {handleChange}
					 param={passwordError}
					 />

					{ passwordError2 &&
					 <label className="light-red">
					 	Las contraseñas no concuerdan
					 </label>
					  }
					 </div>

					 <div className=" "/>
					<button className= "pa3 f9 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib ba b--green bg-lightest-blue"onClick={submit}>
						Crear Cuenta
					</button>	
					<div className=" "/>		
					<label className= "" >
							 <a className="f5 link dib black dim mr8" href="http://localhost:3000/"> Login </a>
						</label>	
					 </div>
					
						
				}

							 </div>
							 );
	}

export default Register;