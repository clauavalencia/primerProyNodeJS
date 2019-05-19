const fs = require('fs');

const {imprime, infoCursos} = require('./cursos');

const estudiante = {
	id:{
		demand: true,
		alias:'i'
	},
	nombre:{
		demand: true,
		alias:'n'
	},
	cedula:{
		demand: true,
		alias:'x'
	}
};

const argv = require('yargs')
.command('inscribir','Inscribirme en un curso', estudiante)
.argv

flag = 1;

if(imprime(argv.i))
{
let icurso = imprime(argv.i);
let crearArchivo = (i, n, x) => {
	texto = 'El estudiante ' + n + ' con cedula ' + x + ' se ha matricula en el curso: '+
	icurso.nombre + ' tiene una duracion' + icurso.duracion + ' y un valor de ' + icurso.valor;
	fs.writeFile('matricula.txt', texto,(err) => {
		if(err) throw(err);
		console.log('se ha creado el archivo');
	});
	}
	crearArchivo(argv.i,argv.n,argv.x);
	flag = 0;
}
else{
	if(argv.i != imprime(argv.id))
	{
	console.log('Ha ingresado un Id que no corresponde a ningun curso');
	infoCursos(1,0);
	flag = 0;
	}
}
	
if(flag ==1)
infoCursos(1, 0);
