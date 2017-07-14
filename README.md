# storymaps_service

## Synopsis
***
#### Servicio que maneja las operaciones CRUD del storymaps


## Dependències

Servei basat amb [NodeJs](https://nodejs.org/en/)

## Installation
***
Provat en un Ubuntu 16 LTS xenia

##### Configuració Node

    git clone http://montmajor.icc.local/w.szczerban/storymaps_service.git
    npm install
    node storymaps.js

#### path.properties per Betaserver2

    {
      "pathMainWeb":"storymaps",
      "domini":"betaserver2.icgc.cat",
      "secret":"JWT_SECRETE",
      "file_path": "/dades/html/storymaps/data/"
    }

Hay que poner el JWT_SECRET con el secret correspondiente a instamaps

## Tests
***
##### Executar aplicació Test
  <http://172.70.1.32/storymaps/test/index.html>.

## API REST
  ***
  * http://172.70.1.32/storymaps/:id
    * Què? obtener un mapa en modo consulta
    * Metode: GET
    * Paràmetres:
      * id: id del mapa
    * Exemple: http://172.70.1.32/storymaps/768ddc60-66e2-11e7-af5e-09aff007230d
  * http://172.70.1.32/storymaps/edit/:id_editor
    * Què? obtener un mapa en modo edición
    * Metode: GET
    * Paràmetres:
      * id_editor: id de edicíon del mapa
    * Exemple: http://172.70.1.32/storymaps/edit/76d21f00-48e0-4216-bb52-84a8a41cc6a2
  * http://172.70.1.32/storymaps/edit/
    * Què? crear un mapa nuevo. Tanto el id como el id_editor se crean automaticamente
    * Metode: POST
    * Header:
      * Content-Type: application/json
    * Body: todo el json del mapa
    * Exemple: http://172.70.1.32/storymaps/edit/
  * http://172.70.1.32/storymaps/edit/:id_editor
    * Què? actualizar un mapa
    * Metode: PUT
    * Header:
      * Content-Type: application/json
    * Body: todo el json del mapa
    * Paràmetres:
      * id_editor: id de edicíon del mapa
    * Exemple: http://172.70.1.32/storymaps/edit/12345
  * http://172.70.1.32/storymaps/edit/:id_editor/:id
    * Què? eliminar un mapa
    * Metode: DELETE
    * Paràmetres:
      * id_editor: id de edicíon del mapa
      * id: id del mapa
    * Exemple: http://172.70.1.32/storymaps/edit/12345/2

### GIT deploy en el servior

## Per fer pull GIT
```
cd /dades/html/storymaps

sudo git pull

pm2 restart storymaps.js
```

### Posar a producció aplicació NodeExpress JS amb PM
http://expressjs.com/en/advanced/pm.html#pm2

```
      sudo npm install pm2 -g
      cd /dades/html/storymaps
      pm2 start storymaps.js
```
#### List all running processes:
```
pm2 list
```
#### Stop an app:
```
pm2 stop storymaps.js
```
#### Restart an app:
```
pm2 restart storymaps.js
```

#### To view detailed information about an app:
```
pm2 show storymaps.js
```
#### To remove an app from PM2’s registry:
```
pm2 delete storymaps.js
```


## Contributors
***
Desenvolupat per GEOSTART

*Fet amb el millor gust possible*

Institut Cartogràfic i Geològic de Catalunya (ICGC) Maig 2017

Barcelona - Catalunya

[http://betaportal.icgc.cat](http://betaportal.icgc.cat) - Betaportal

[http://www.icgc.cat](http://www.icgc.cat) - ICGC


## License
***

MIT
