# AppHabitos

### ¿Qué es Git Bash?
> Git Bash es una aplicación que te permite usar Git en tu
computadora.
## Funcionamiento de Git Bash

### Comandos aprendidos
- `pwd: present working directory` Esto lo que hace es qué nos dice en que directorio estamos. 
- `ls: list` Esto nos enseña que hay dentro de la carpeta en la que estamos.
- `cd: Change directorty`Esto nos sirve para cambiar de directorio. 
- `git status` Este comando nos sirve para ver si ha habido algún cambio en el directorio de trabajo. 
- `git add -A` Este comando sube los cambios realizados a los archivos a una zona de pruebas para que Git empiece a rastrearlos.
- `git commit -m "Descripción del commit"` Sube los archivos o cambios al repositorio local. 
- `git push -u origin main` Sube los archivos del repositorio local (computadora) al remoto (internet). 
- `git pull` Este comando sube los archivos o cambios del repositorio remoto al local. Este se usa en caso de que se trabaje desde el repositorio remoto. 
- `git branch -a` Este comando nos enseña cuales son las ramas que tenemos en el repositorio. 
- `git checkout main` Nos cambia de una rama a la rama principal. 
- `git checkout -b (nombre de la nueva rama. Es sin paréntesis)` Este comando nos cambia a una nueva rama. El -b crea la nueva rama y luego se agrega el nombre de la rama. Esto se usa cuando quieres crear una nueva rama y cambiarte a esa rama en un solo paso.
- `git Branch -d (nombre de la nueva rama. Es sin paréntesis)` Este comando va a borrar una rama. La rama que se borra es la que pongamos. 
- `git fetch --prune` Este comando lo que hace es descargar los cambios que se hicieron en un repositorio remoto. También esto lo que hace es eliminar todo lo que se ha marcado para borrar. Es decir, si borramos un Branch en el repo remoto, esto lo borra en el local y ya luego necesitamos hacer el pull para que se actualice en el local. 
