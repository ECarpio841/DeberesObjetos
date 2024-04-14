# Soluciones y explicaciones
## TWOFER
La problemática que esteblecia era que en algunos acentos se escucha el *"Two for"* a *"Two fer"*.
**Twofer** es ocupado mayoritariamente para las ofertas de 2x1.
El problema establece que estamos en una reposteria o una pasteleria donde se venden cosas dulces donde se aplican las ofertas de 2x1.
Se dice que estamos en la fila y ocuparemos la frase *"UNA PARA TI, UNA PARA MI(One for you, one for me.)"*para repartir galletas.
Pero si conocemos a las personas de la pastelería diremos la frase *"UNA PARA ALICE, UNA PARA MI"*
Si no conocemos a las personas diremos "TÚ" en vex del nombre y los nombres son cualquier nombre que conozcamos, no solo lo que nos limitan las instrucciones
El código de respuesta es el siguiente:
El código de twoFer.ts contiene la siguiente estructura:
export function twoFer(name: string): string {
    const firstMessage : string = `One for ${name || 'you'}`
    const secondMessage :string = ', one for me.'    
    return firstMessage + secondMessage
    }  
Lo que hace es generar una función que tenga las instrucciones de ejecución de la respuesta.
`twoFer(name : string):string` ---> Lo que hace esto es indicar el nombre de la función y el parámetro obligatorio en string y que esta función será solo string.
`const firstMessage : string = ``One for ${name || 'you'}` -----> Indicamos una constante que contenga el primer mensaje y colocamos un operador OR `(||)` que evalue si tenemos lo que necesitamos. Por eso es importante el parámetro de `name: string` ya que este indicará que el nombre no será un número y si no existe este parámetro o no tiene valor, lo que será es asignarle `you`.
`const secondMessage :string = ', one for me.'` -----> Lo que hace es tener el mensaje por separado, un poco innecesario.
Y por último `return firstMessage + secondMessage` que nos devolverá el valor que pedimos.
--- 
## Resistor Color
La problemática de el ejercicio era simple. Un resistor es muy pequeño, es muy útil en circuitos y nos ayuda a regular el paso de la Intensidad de la corriente en circuitos, sobre todo nos podría ayudar a armar cosas con Raspberry Pi. Pero son tan pequeños y diferentes, cada uno resiste cierta cantidad de energía que está marcada por banda de colores en el resistor y si este tuviera los números de valor serían complicados de leer, así que se diseñó una codificación basada e banda de colores.
Cada color representa una cantidad. Así que se tiene que diseñar la solución del problema que al sacar un color se saque su valor.

El código de respuesatv es el siguiente:
`export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];`
Lo que hace esta línea es establecer en un array los colores que contiene la codificación. Cada color es representado por posiciones, desde el negro hasta el blanco comenzando sus valores desde el 0 hasta el 9, por el mismo motivo se utilizan los arrays.

`export const colorCode = (color:string) => {return COLORS.indexOf(color) ;}` -----> Esta línea lo que hace es sacar el valor de la posición del array. Así que si nos piden el valor del color BLACK, el resultado sería 0.
---

VIDEO DE YOUTUBE: <https://www.youtube.com/watch?v=eo8wdB8aGFA&t=93s&ab_channel=EstebanCarpio>





