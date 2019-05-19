let cursos = [
		{id: 1,
		nombre: 'Node Js',
		duracion: '80 horas',
		valor: 0
	},
	 {id: 2,
		nombre: 'Ingles',
		duracion: '70 horas',
		valor: '35000'
	},
	{id: 3,
		nombre: 'React',
		duracion: '80 horas',
		valor: '50000'
	}
];

let imprime=(id)=>{
	let dcurso = cursos.find(datcurso => datcurso.id == id);
	return dcurso
};

let infoCursos = (id, tiempo) => {
for (id =1; id <= 3; id++)
	{ 
		let dacurso = imprime(id);
		setTimeout(function(){
		console.log('El curso '+ dacurso.id+ ' '+ dacurso.nombre + ' con duracion de  '+ dacurso.duracion+ '  valor de '+ dacurso.valor);
	},tiempo);
	tiempo = tiempo + 2000;
	}
}

module.exports = {
	cursos,
	imprime,
	infoCursos
};