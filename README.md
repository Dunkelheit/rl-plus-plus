# RL++

Scripts de TinTin++ para [Reinos de Leyenda MUD](http://www.reinosdeleyenda.es/).

![Captura de pantalla](https://cloud.githubusercontent.com/assets/448131/21314478/9c830800-c5f7-11e6-925c-026018b74461.png)

## Requisitos

El cliente TinTin++, como mínimo la versión 2.01.1, dado que las anteriores tienen un
bug que impide sustituir correctamente cadenas con colores ANSI.

## Instalación

Puedes descargar el script desde [el proyecto GitHub](https://github.com/dunkelheit/rl-plus-plus)
o mediante npm, con el siguiente comando:

```
> npm install rl-plus-plus
```

Para preparar es necesario hacer un "build" del mismo. Entre otras cosas, esto cargará de forma
dinámica los datos de la armería.

```
> npm run build
```

## Ejecución

Situate en la carpeta de Instalación y ejecuta el siguiente comando:

```
> ./rl++
```

## Funciones

* Soporte para GMCP 
* Sistema de módulos y eventos 
* Sustitución con colores y destacado de multitud de situaciones:
    * Daños armados
    * Salud y estado
    * Habilidades y hechizos
    * Entrada y salida de habitaciones
    * Puntos de experiencia
    * Enemigos
    * Tiradas de salvación
* Monitor de heartbeat
* Barra de estado con puntos de vida, puntos de energía, imágenes y pieles
* Delta de puntos de vida
* Extensión de cánticos con el nombre del hechizo
* Recorrido automático de caminos (como el comando galopar)
* Diversas funcionalidades para las siguientes clases:
    * Cazador
    * Tirador

## Comandos

* `/cargarAliasesBasicos` - Establece aliases básicos en una nueva ficha.
* `/cargarAliasesBribon` - Establece aliases para sigilar y esconderse en una nueva ficha.
* `/conectar` - Conecta a Reinos de Leyenda MUD.
* `/limpiar` - Borra el contenido de la pantalla.
* `/log <on|off>` - Activa o desactiva el logeado. Los logs se guardan en el directorio /logs.
* `/reload` - Recarga el script. Sólo funciona en modo desarrollo.
* `/rumbo <dirección|off>` - Camina automáticamente en una dirección, de forma similar al comando _galopar_.
* `/x` - Computa una lista de enemigos. Has de tener el alias "tarear" establecido con tu "nickear" personal.
* `/x fulano,mengano` - Establece una lista de enemigos. Has de tener el alias "tarear" establecido con tu "nickear" personal.

## Errors y colaboración

En caso de encontrar un bug, reportalo en el apartado [issues](https://github.com/dunkelheit/rl-plus-plus/issues).

Todo [pull request](https://github.com/dunkelheit/rl-plus-plus/pulls) es bienvenido.

## Licencia

[MIT](LICENSE).
