import React, { useState } from 'react';
import Title from './components/Title/Title';
import  Label from './components/Label/Label';
import  Input from './components/Input/input';


const Home = ({Account}) =>{

	const [ Perfil, setPerfil ] = useState(true);
	const [ Mod, setMod ] = useState(false);
	const [ Eli, setEli ] = useState(false);
	const [ password, setPass ] = useState(' ');
	const [ password2, setPass2 ] = useState(' ');
	const [ passwordError, setPassError ] = useState(false);
	const [ passwordError2, setPassError2 ] = useState(false);
	const [ checkError, setcheckError] = useState(false);

	function handleChange(name, value) {
		
			if(value.length < 6 && name==="contrasena" ){
				setPassError(true);
				setcheckError(false);
			} else if (name==="contrasena"){
				setPassError(false);
				setPass(value);
				setcheckError(false);
			}
		if(name==="contrasena2"){
			setPass2 (value);
			setcheckError(false);
			setPassError2(false);
		} 
	};

		function submit() {
		if(password === password2 ) {
			ValidSubmit();
			setPassError2(false);
		} else {
			setPassError2(true);
		}
	};

	function ValidSubmit(){
		

	};

	function matrolo() {
		if (Perfil=== true) {
			setPerfil(false);
		}
		else{
			setPerfil(true);
		}
		setMod(false);
		setEli(false);
};

	function batrolo() {
				setEli(false);
				setMod(true);
	};

	function catrolo() {
				setMod(false);
				setEli(true);
	};
console.log("epale ", localStorage.getItem("datos"));
console.log(localStorage.datos === "megatron");
console.log("culo ", {Account});
	return(
		<div className="container">



				{  Perfil ? <div className="pa2  ">
				<nav className="flex justify-between bb b--white-10">
					  <div className="flex-grow pa3 flex items-center">
					  <label className="f6 dib black bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 mr3" onClick={matrolo}>Perfil</label>
					  <a className="f6 link dib black dim mr3 mr4-ns" href="http://localhost:3000/">Log out</a>   
					  </div>
					</nav>
					<Title text=<h1> Bienvenido {Account} </h1>/>
					</div> :

				<div className="pa2  ">
				<nav className="flex justify-between bb b--white-10">
					  <div className="flex-grow pa3 flex items-center">
					  <a className="f6 dib black bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 mr3" href="#0"onClick={matrolo}>Home</a>
					    <a className="f6 link dib black dim mr3 mr4-ns" href="#0" onClick={batrolo}>Cambiar contraseña</a>
					    <a className="f6 link dib black dim mr3 mr4-ns" href="#0" onClick={catrolo}>Eliminar</a>
					    <a className="f6 link dib black dim mr3 mr4-ns" href="http://localhost:3000/">Log out</a>     
					  </div>
					</nav>
				 <Title text=<h1> Usuario</h1>/>
				 	{  Mod && ( 
				 	<div className="container  ">
					 <div className="pa2  ">
					 <Label  text ="Contraseña Actual"/>
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
					 <Label  text ="Ingrese su nueva Contraseña"/>
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

					 <button className= "pa3 f9 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib ba b--green bg-lightest-blue"onClick={submit}>
						Cambiar
					</button>	

					 </div>
					 ) }

					 {  Eli && ( 
				 	<div className="container  ">
					 <div className="pa2  ">
					 <Title text=<h1> Eliminar cuenta permanentemente?</h1>/>

					 </div>
					 <div className="pa2  ">
					 <button className= "pa3 f9 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib ba b--green bg-lightest-blue"onClick={matrolo}>
						Cancelar
					</button>
					 <button className= "pa3 f9 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib ba b--green bg-lightest-blue"onClick={submit}>
						Eliminar
					</button>
					</div>


					 </div>
					 ) }



				</div>
				}


		</div>

		);
}

export default Home;