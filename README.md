# 02-blackjack
laboratorio N1 del curso de JavaScript de Fernando Herrera

## DOM ( Document Object Model )

El modelo de objeto de documento (DOM) es una **interfaz de programación para los documentos HTML y XML**. Facilita una representación estructurada del documento y define de qué manera los programas pueden acceder, al fin de modificar, tanto su estructura, estilo y contenido. El DOM da una representación del documento como un grupo de nodos y objetos estructurados que tienen propiedades y métodos. Esencialmente, conecta las páginas web a scripts o lenguajes de programación.

Su principal objetivo es tener **acceso dinámico a través de programación a sus elementos y su manipulación de los mismos**.

### Metodos del DOM

   * Document.querySelector().

      Devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre ordenado de los nodos del documento) que coincida con el grupo      especificado de selectores.

      * Sintaxis

       ```
       element = document.querySelector(selectores);
       ```
       Donde:
           * element es un objeto de tipo element.
           * selectores es una cadena de caracteres que contiene uno o más selectores CSS (en-US) separados por coma.

      * Ejemplo

      En este ejemplo, obtendremos el primer elemento del documento con la clase "miClase":

         ```
         var el = document.querySelector(".miClase");
         ```
 
      Ejemplo más útil
    
      Los Selectores pueden ser muy útiles como se demostrará en el siguiente ejemplo. Aquí, será retornado el primer elemento <input name="login" /> dentro de <div class="user-panel main">.

         ```
         var el = document.querySelector("div.user-panel.main input[name='login']");
         ```

      **Nota**: Si desea mas información al respecto puede consultar al siguiente [LINK](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector).

   * Document.querySelectorAll().

      El método querySelectorAll() de un Element devuelve una NodeList estática (no viva) que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.

      **Nota**: Esto método se implementa en base al método querySelectorAll() del mixin ParentNode.

      * Sintaxis
    
        ```
        elementList = parentNode.querySelectorAll(selectors);
        ```

      * Parámetros
        
         * selectors
         Un DOMString que contiene uno o más selectores para buscar coincidencias. Esta cadena de texto debe ser una cadena CSS selector válida; si no lo es, se lanzará una excepción SyntaxError. Vea Locating DOM elements using selectors para más información acerca de utilizar selectores para identificar elementos. Se pueden especificar varios selectores separándolos utilizando comas.

         **Nota**: Los caracteres que no son parte de la sintaxis estándar de CSS deben ser escapados utilizando el caracter de barra invertida. Dado que JavaScript también utiliza el escapado por retroceso, se debe tener especial cuidado al escribir cadenas de texto literales utilizando estos caracteres. Vea Escapando caracteres especiales para más información.

      * Valor devuelto

      Una NodeList no viva que contenga un objeto Element para cada elemento que coincida con al menos uno de los selectores especificados o una NodeList vacía en caso de que no haya coincidencias.

      **Nota**: Si los selectores indicados incluyen un pseudo-elemento CSS, la lista devuelta siempre estará vacía.
   
      * Excepciones

        ```
        SyntaxError
        ```

        La sintaxis de la cadena de texto selectors no es válida.

      * Ejemplos

         * Obteniendo una lista de coincidencias
            
            Para obtener una NodeList de todos los elementos **<p>** en el documento:

                ```
                var matches = document.querySelectorAll('p');
                ```

            Este ejemplo devuelve una lista de todos los elementos **<div>** del documento con una clase "nota" o "alerta":

                ```
                var matches = document.querySelectorAll('div.nota, div.alerta');
                ```

      **Nota**: Si desea mas información al respecto puede consultar al siguiente [LINK](https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll).
