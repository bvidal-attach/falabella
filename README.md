# Repo Falabella

### Scripts

- Descargar proyecto

  Por SSH:

  ```
  git clone git@github.com:bvidal-attach/falabella.git
  ```

  Por HTTP:

  ```
  git clone https://github.com/bvidal-attach/falabella.git
  ```

- Agregar cambios al Staging Area (Cambios Locales)

  ```
  git add .
  ```

- Agregar comentario de la subida de los cambios

  ```
  git commit -m 'test commit'
  ```

- Agregar cambios al Repositorio Remoto (Github)

  ```
  git push origin main
  ```

### Utils Scripts

- Listar cambios en el proyecto local

  ```
  git status -s
  ```

- Listar cambios subidos en el repositorio remoto

  ```
  git log --decorate --oneline --graph --all
  ```

- Definir la subida desde una rama principal

  ```
  git push --set-upstream origin main
  ```

- Actualizar cambios del proyecto

  ```
  git pull origin main
  ```

- Fusionar ramas desde doden em ubico

  ```
  git merge $branch
  ```

### Build Scripts

- Instalar paquetes

  ```
  yarn install
  ```

- Compilar archivos locales para GTM

  ```
  yarn dev
  ```

- Compilar y minificar archivos locales para GTM y escuchar futuros cambios

  ```
  yarn watch
  ```

- Compilar y minificar archivos locales para GTM

  ```
  yarn gtm
  ```

- Compilar y minificar archivos locales para produccion (Filezilla)

  ```
  yarn build
  ```

- Borrar archivos generados

  ```
  yarn clean
  ```

- Borrar paquetes y archivos generados

  ```
  yarn clean:all
  ```


### Web

https://prepro.falabella.edu.pe/

tes@correo.com


08482731

977461496

bvidal@attachmedia.com
