const validarEmail=(email="")=>{
    if(email === "") return console.warn("No ingresaste un email");
    if(typeof email !== "string") return console.error(`El valor de ${email} no es una cadena de texto`);
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[_a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
return expReg ? console.info(`${email} ingresado es un email valido`) : console.info(`${email} ingresado NO es un email valido`)

}
validarEmail();
validarEmail(34);
validarEmail("usuario.apellido@univeridad");
validarEmail("nombre_apellido@universidad.edu");
validarEmail("Hola mundo");