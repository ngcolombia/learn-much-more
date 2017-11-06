# Aprendamos HTTP en Angular

## 1. Últimos pasos para hacer peticiones Http 👣🏁

Hasta el momento no hemos realizado ningún tipo de petición Http, pero solo basta con agregar unas pocas líneas de código, aunque no lo creas el trabajo duro ya lo has realizado. 💪💪 Bien por eso!!
Ahora volvamos a nuesto `app.component.ts` y sigamos los pasos mostrados a continuación:

- En la función donde estamos utilizando el `setInterval()` vamos a reemplazar la asignación de la varible por nuestra petición `Http` haciendo uso del `HttpClient`.
- Ahora haciendo uso del metodo `get` de `HttpClient` vamos a hacer la petición Http pasando como parámetro esta ***url*** **https://api.icndb.com/jokes/random** en el metodo `get`. **(Nota: Esto nos devuelve un Observable)**
- Para poder ejecutar este observable y obtener los datos debemos suscribirnos a este `observable` usando la notación `.subscribe()`, este método recibe como parámetro una otra función en la que recibes como parámetro el resultado de la petición a la API. (en este caso el resultado será un objeto tipo JSON).
- Finalmente debemos asignar el resultado a nuestra variable para ser muestrada en la vista, para ello debemos acceder a la propedad **joke** del JSON resultante. 

Hecho esto ya podrás ver los resultados reflejados en tu aplicación, cada 5 segundos la aplicación web hará una nueva petición al API, lo que nos permite ver un nuevo chiste cada dicho tiempo.
**Hemos terminado!** 👏🏻👏🏻 ahora eres todo un rockstar haciendo peticiones `Http` usando `HttpClient` 🎉🎉