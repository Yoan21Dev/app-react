const typeDB = {
    relacional: {
        title: 'Base de datos relacional',
        content: 'Las bases de datos relacionales son las más comunes en la actualidad. Consisten en una serie de contenedores de información denominados tablas, en los que se almacenan registros.\n Los registros serían las filas de las tablas mientras que sus campos de éstos serían las columnas. La característica más importante de las bases de datos relacionales es que los datos de las tablas pueden estar relacionados entre sí por medio de índices que nos permiten pivotar de una tabla a otra o otras.',
        hoverColor: 'bg-blue-300'
    },
    distribuida: {
        title: 'Base de datos distribuida',
        content: 'Las bases de datos distribuidas son aquellas en las que la información no reside en un único servidor de bases de datos, sino que existen diversos servidores, a menudo en redes distintas, que mantienen una porción de los datos.\n Debido a su característica distribuida, las bases de datos están alojadas en diversos nodos y se produce un trasiego de la información continuo entre ellos. Sin embargo, los clientes pueden acceder a los datos y recuperar la información sin necesidad de preocuparse de que ésta se encuentre distribuida entre varias máquinas.',
        hoverColor: 'bg-yellow-400'
    },
    objetos: {
        title: 'Base de datos orientada a objetos',
        content: 'Son un modelo de bases de datos en las que la información se almacena mediante objetos. Los objetos son conjuntos heterogéneos de datos, tan complejos como sea necesario para modelizar aquella información que se necesite.\n Para los que vienen del área de la programación podemos entenderlas como bases de datos que consiguen almacenar registros igual que si se tratase de objetos de la Programación Orientada a Objetos. Al almacenarse la información organizada en objetos resulta muy adecuado para el trabajo directo desde lenguajes de programación capaces de usar este paradigma.',
        hoverColor: 'bg-red-400'
    },
    nosql: {
        title: 'Base de datos NoSQL',
        content: 'Las bases de datos NoSQL (Not only SQL) son aquellas en las que no se usan tablas sino colecciones de elementos. Los elementos almacenados en las colecciones pueden ser heterogéneos, de modo que en una colección podemos almacenar registros con juegos de datos distintos entre sí. Además, este tipo de base de datos no suele usar SQL para realizar consultas, sino programación funcional para hacer filtrados y otros tipos de operaciones.\n Las NoSQL son otro modelo de bases de datos muy popular, sin llegar al grado de las relacionales, pero muy frecuente en la actualidad en muchos tipos de aplicaciones donde se requiere variabilidad entre la información almacenada en las colecciones así como velocidad de recuperación de la información.',
        hoverColor: 'bg-green-500'
    },
    grafica: {
        title: 'Base de datos gráfica',
        content: 'Son un tipo de bases de datos donde se guardan datos y sus relaciones. Sin embargo, las relaciones podemos considerarlas en este modelo de base de datos como ciudadanos de primer nivel, ya que se almacenan tal cual en la base de datos y no mediante índices como en las relacionales.\n Las bases de datos gráficas permiten realizar recorridos muy rápidos entre los distintos nodos, ya que las relaciones apuntan directamente a los nodos a los que se puede llegar desde otro nodo y no requieren  cálculos y aplicación de uniones. Este tipo de bases de datos es frecuente en motores sociales o en motores de recomendación.',
        hoverColor: 'bg-indigo-400'
    }
};

export default typeDB;
