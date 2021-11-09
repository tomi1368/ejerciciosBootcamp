/* 
Git es un tipo de archivo, tiene 3 estados, se ven cuando ponemos git status: 
history: ya esta en un branch y tiene su numero de commit
stage/cache: color verde, esta en el repo, y se puede enviar al remoto //Se logra con git add 
working: color rojo, no se subio al repo // Si estaba verde se puede pasar a rojo con git reset -- archivo

#se pueden hacer commits sin hacer *m (mensajes)

#con git commit -am "mensaje" // se hace el add . solo

#Git no permite subir carpetas vacias, para eso se puede agregar la carpeta con .gitkeep

#En el gitIgnore se puede agregar los archivos que se desea que git no suba al repo

Proceso para subir archivo:
Git init  //Inicio repositorio, se crea archivo oculto.git
git add . //Cambio el status de los archivos, los subo al cache
git commit -m "mensaje" //Se crea el commit que es quien tiene un nro de registro
git remote add origin https://github.com/NOMBRE_USUARIO/NOMBRE_PROYECTO.git // Previamente debo crear un repo en github
git push -u origin master // Se subo el repo a la rama deseada, en este caso master

#git remote-v // Muestra las ramas remotas

#git remote set-URL origin "direccion del otro repo remoto" // cambiar donde se va a mandar el repo local, osea cambiar de repo remoto

#git HEAD // me lleva al commit anterior
git HEAD devuelve una linea en la cual se muestra antes de la "," lo local, y del otro lado lo remoto
# git log --oneline //Me muestra el registro de commits con sus registros */