# EXERCISM SEMANA 4
## D&D Exercism
La clase tiene propiedades para las estadísticas de un personaje de D&D: charisma, constitution, dexterity, intelligence, strength y wisdom. Estas propiedades representan las puntuaciones de habilidad del personaje en diferentes áreas.

En el constructor de la clase, se generan aleatoriamente las puntuaciones de habilidad del personaje utilizando el método generateAbilityScore(). Cada vez que se instancia un nuevo personaje, se asignan valores aleatorios para sus habilidades.

La propiedad hitpoints es un getter que devuelve los puntos de golpe del personaje. Estos puntos de golpe están determinados por la puntuación de constitución del personaje, más un valor base de 10.

El método getDiceThrow() es un método estático que simula tiradas de dados de seis caras, devolviendo un número aleatorio entre 1 y 6.

El método generateAbilityScore() es un método estático que genera una puntuación de habilidad aleatoria para un personaje. Simula la tirada de cuatro dados de seis caras, descarta el valor más bajo y devuelve la suma de los tres valores más altos.

El método getModifierFor(abilityValue) es un método estático que calcula el modificador de una puntuación de habilidad dada. Según las reglas de D&D, el modificador se calcula restando 10 de la puntuación de habilidad y dividiendo el resultado entre 2, redondeando hacia abajo.

## SPACE AGE
Se define un enum llamado Planet que enumera los nombres de los planetas del sistema solar. Cada elemento del enum está asignado a una cadena que representa el nombre del planeta.

Se definen constantes:

SECONDS_TO_EARTH_YEARS: Representa la cantidad de segundos equivalentes a un año en la Tierra. Es una constante utilizada para convertir segundos a años terrestres.
EARTH_YEARS_TO_PLANET_YEARS: Un objeto que mapea cada planeta a la cantidad de años que dura un año en ese planeta en términos de años terrestres.
La función age toma dos parámetros:

planet: El planeta en el que se quiere calcular la edad.
seconds: Los segundos transcurridos desde el nacimiento en la Tierra.
Dentro de la función:

Se calcula el número de años terrestres earthYears dividiendo los segundos entre la constante SECONDS_TO_EARTH_YEARS.
Se calcula el número de años en el planeta especificado dividiendo los años terrestres por la duración de un año en ese planeta, que se obtiene de EARTH_YEARS_TO_PLANET_YEARS[planet].
El resultado se redondea a dos decimales utilizando toFixed(2) y se convierte a un número con Number().
Finalmente, se devuelve la edad calculada en el planeta especificado.