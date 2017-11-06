# Aprendamos HTTP en Angular

## 1. Haciendo peticiones Http

Piensen por un momento en una aplicación que no tenga ningún tipo de interacción con internet 🤔....
Resulta aburrido y hasta ilógico ¿verdad?. Por tal motivo es importante aprender a hacer peticiones HTTP hacia algunas API's o Endpoint's para darle dinamicidad a nuestras aplicaciones. Al finalizar este reto estarás en plena facultad para empezar a darle vida a tus aplicaciones web mediante las peticiones HTTP. 😀
Para lograrlo debemos hacer uso de un módulo en Angular llamado `HttpClient`, que se encuentra disponible en el paquete 📦 `@angular/common/http`.

- Para empezar, debemos importar este módulo en nuestra aplicación. Dirígete hacia el `app.module.ts` e importa correctamente el módulo `HttpClientModule`.
- Ahora en el `app.component.ts` importamos `HttpClient` desde el mismo paquete.
- Una vez importado para poder hacer uso de `HttpClient` en del componente, necesitamos inyectarlo (inject) en el constructor de la clase. Por Ejemplo
```ts
constructor(private httpClient: HttpClient) { }
```
- Crea una variable de tipo `string` para guardar el resultado enviado por la API. (puedes nombrarla como quieras).
- Ahora crea una funcion que retorne `void` (vacío), en esta función alojaremos toda nuestra lógica(puedes nombrarla como quieras).
- En la función previamente creada, vamos a asignar una valor a nuestra variable. Pero este valor debe ser asignado haciendo uso de la función `setInterval()` propia de JavaScript, este valor debe ser asignado 5 segundos despues de que la aplicación sea iniciada. ***Ayuda: Debes hacer uso del metodo ngOnInit() para hacer el llamado de tu función.***
- Para verificar que la asignación del valor a nuestra variable se esta haciendo correctamente, debemos hacer 'binding' de esta variable en el `app.component.html`. Agrega el siguiente codigo en la etiqueta `div class="text-center"`:
```ts
<blockquote id="quote">
      <h3>{{myVariable}}</h3>
</blockquote>
```
Si vas a la aplicación y visualizas la variable después de 5 segundos, eso quiere decir que estás listo para pasar al [siguiente reto >>>](https://github.com/angular-medellin/learn-much-more/tree/2#aprendamos-http-en-angular)