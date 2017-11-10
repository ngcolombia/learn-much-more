# Aprendamos HTTP en Angular

## 1. Últimos pasos para hacer peticiones Http 👣🏁

Hasta el momento no hemos realizado ningún tipo de petición Http, pero solo basta con agregar unas pocas líneas de código, aunque no lo creas el trabajo duro ya lo has realizado. 💪💪 Bien por eso!!
Ahora volvamos a nuestro `app.component.ts` y sigamos los pasos mostrados a continuación:

- En la función donde estamos utilizando el `setInterval()` vamos a reemplazar la asignación de la varible por nuestra petición `Http` haciendo uso del `HttpClient`.
- Ahora haciendo uso del método `get` de `HttpClient` vamos a hacer la petición Http pasándole como parámetro esta ***url*** **https://api.icndb.com/jokes/random**. **(Nota: Esto nos devolverá un Observable)**
- Para poder leer el observable y obtener los datos que nos retorne debemos suscribirnos a este `observable` usando el método `.subscribe()`, este método recibe como parámetro una función en la que la variable que se ponga como parámetro estará destinada a recibir el resultado de la petición a la API. (en este caso el resultado será un objeto tipo JSON).
- Finalmente debemos asignar el resultado a nuestra variable para ser mostrada en la vista, para ello debemos acceder a la propedad **joke** del JSON resultante. **(Nota: Ten en cuenta que el método `get` de `HttpClient` espera que le indiques el tipo de dato que se espera como resultado, puedes establecerlo como &lt;any&gt; para poder acceder a la propiedad `joke` con la notación `objeto.propiedad`. Si no le indicas al método un tipo para la respuesta, se escogerá por defecto el tipo Object que es bastante restrictivo y te dará un error al usar la notación `objeto.propiedad`, en este caso deberás emplear la notación `objeto['propiedad']` para acceder a la propiedad `joke`)**

Hecho esto ya podrás ver los resultados reflejados en tu aplicación, cada 5 segundos la aplicación web hará una nueva petición a la API, lo que nos permite ver un nuevo chiste cada dicho tiempo.
**Hemos terminado!** 👏🏻👏🏻 ahora eres todo un rockstar haciendo peticiones `Http` usando `HttpClient` 🎉🎉
