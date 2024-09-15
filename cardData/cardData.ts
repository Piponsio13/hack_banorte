const cardsData = [
    {
        "id": 1,
        "nombreTarjeta": "Tarjeta de Credito Clasica",
        "descripcion": "La Tarjeta de Crédito Clásica te permite diferir todas tus compras con una tasa preferencial.",
        "PathImg": '../assets/images/banorteTarjetasCredito/BanorteClasica.png',
        "ventajas": [
            "6 meses sin intereses. En tus compras durante los primeros 30 días después de activar tu tarjeta física.",
            "Aprovecha y paga cómodamente con tu Tarjeta de Crédito Clásica cualquier compra mayor a $2,000 pesos.",
            "A través de Banco en Línea puedes revisar tu línea de crédito, activar y bloquear tu tarjeta, asignar montos mínimos y máximos de compra, entre otros servicios."
        ],
    },
    {
        "id": 2,
        "nombreTarjeta": "Tarjeta de Credito Oro",
        "descripcion": "La Tarjeta de Crédito Oro te ayuda a cumplir tus sueños y te brinda valiosos beneficios durante todo el año.",
        "PathImg": '../assets/images/banorteTarjetasCredito/BanorteOro.png',
        "ventajas": [
            "Recibe 1.15 puntos por cada $10 pesos de compras que realices con tu Tarjeta de Crédito e intercámbialos por boletos de avión, experiencias o artículos del catálogo.",
            "Transfiere el saldo de tus otras tarjetas bancarias y obtén una atractiva tasa de interés, además de plazos de 12, 18 y 24 meses.",
            "Cuentas con un seguro que te reembolsa la diferencia de precio en caso de que encuentres el mismo producto (modelo y año) del mismo fabricante a un precio menor al que pagaste con la Tarjeta de Crédito Oro hasta por USD 400 al año."
        ],
    },
    {
        "id": 3,
        "nombreTarjeta": "Tarjeta de Credito Mujer Banorte",
        "descripcion": "La Tarjeta de Crédito Mujer Banorte te acompaña en los distintos ámbitos de tu vida e impulsa tus proyectos mediante beneficios diseñados especialmente para ti.",
        "PathImg": '../assets/images/banorteTarjetasCredito/BanorteMujer.png',
        "ventajas": [
            "Seguro para primer diagnóstico de cáncer (excepto cáncer de piel) con una cobertura de USD 1,500 más USD 500 para terapias.",
            "Seguro de hospitalización con una cobertura de USD 100 por día y máximo USD 1,500 al año., 18 y 24 meses.",
            "Cuentas con una cobertura hasta por USD 400 al año contra daño o robo de la mayoría de los productos y artículos nuevos comprados con la Tarjeta de Crédito Mujer Banorte."
        ],
    },
    {
        "id": 4,
        "nombreTarjeta": "Tarjeta de Credito AT&T",
        "descripcion": "La Tarjeta de Crédito AT&T te permite realizar compras en tus lugares favoritos.",
        "PathImg": '../assets/images/banorteTarjetasCredito/BanorteATT.png',
        "ventajas": [
            "Domicilia el pago de tu plan AT&T a tu tarjeta y recibe gigas adicionales de regalo cada mes.",
            "Gigas adicionales para descargar tus canciones favoritas, interactuar con tus amigos a través de las redes sociales y mucho más.",
            "Meses sin intereses en tiendas AT&T."
        ],
    },
    {
        "id": 5,
        "nombreTarjeta": "Tarjeta de Credito BanorTec",
        "descripcion": "Es la app donde podrás contratar los productos y servicios financieros que Banorte ha diseñado de forma exclusiva para los miembros de la comunidad de alumnos, docentes y personal administrativo del Tecnológico de Monterrey.",
        "PathImg": '../assets/images/banorteTarjetasCredito/BanorTec.png',
        "ventajas": [
            "No pagas comisiones, por apertura, administración – <renta, o membresí­a. Más de 31,000 opciones de acceso a tu dinero..",
            "Miles de promociones exclusivas todo el año, preventas, bonificaciones y más.",
            "Asistencia Dental con la que tienes 2 consultas, 2 limpiezas y 1 radiografí­a y descuentos en tratamientos dentales."
        ],
    },
    {
        "id": 6,
        "nombreTarjeta": "Tarjeta de Credito Seleccion Nacional",
        "descripcion": "Con la Tarjeta de Crédito Selección Nacional, podrás recibir recompensas por tus compras, vivir experiencias únicas en el mundo deportivo y demostrar tu pasión por México.",
        "PathImg": '../assets/images/banorteTarjetasCredito/BanorteSeleccion.png',
        "ventajas": [
            "Acumular compras por $20,000 pesos o más durante los primeros 3 meses después de activar tu tarjeta física o digital.",
            "Premiamos el uso de tu tarjeta, acumula compras para ganar artículos oficiales de la Selección Nacional de México, experiencias deportivas exclusivas, monederos electrónicos de tiendas departamentales y más<.",
            "Realizas compras con tu tarjeta los días que juega la Selección Nacional."
        ],
    },
    {
        "id": 7,
        "nombreTarjeta": "Tarjeta de Credito Banorte Por Ti",
        "descripcion": "La tarjeta que te devuelve efectivo por tus compras.",
        "PathImg": '../assets/images/banorteTarjetasCredito/BanortePorTi.png',
        "ventajas": [
            "Aprovecha el nuevo beneficio exclusivo de tu tarjeta y paga cómodamente a 12 meses con intereses en compras mayores a $4,000 pesos con una tasa de interés del 23% anual fija.",
            "Cuentas con una cobertura hasta por USD 200 al año contra daño o robo de la mayoría de los productos y artículos nuevos comprados con tu Tarjeta Banorte POR Ti..",
            "Cinépolis: 2x1 en boletos para salas tradicionales.",
            "Starbucks Rewards: 30% de bonificación al comprar en la aplicación los días domingo"
        ],
    },
    {
        "id": 8,
        "nombreTarjeta": "Tarjeta de Credito 40",
        "descripcion": "para ti, que con musica todo es mejor.",
        "PathImg": '../assets/images/banorteTarjetasCredito/Banorte40.png',
        "ventajas": [
            "Fiestas y conciertos de tus artistas favoritos.",
            "Premieres de cine y mucho más.",
            "Convivencias con locutores."
        ],
    },
    {
        "id": 9,
        "nombreTarjeta": "Tarjeta de credito Marriott Bonvoy",
        "descripcion": "La tarjeta que transforma tus compras en experiencia de viaje",
        "PathImg": '../assets/images/banorteTarjetasCredito/BanorteMarriott.png',
        "ventajas": [
            "Espera tu vuelo en salas diseñadas especialmente para ti. Relájate, refréscate y aprovecha al máximo tu estancia en la T1 del AICM.",
            "Obtén descuentos de forma automática en diferentes comercios en todo el mundo.",
            "Lleva tu coche a la T1 del AICM y déjalo con el servicio Elite Valet de Mastercard. Con tu Tarjeta de Crédito Marriott Bonvoy, paga solo el 50% del precio regular por una estancia de hasta 5 días."
        ],
    },
    {
        "id": 10,
        "nombreTarjeta": "Tarjeta de credito W Radio",
        "descripcion": "La tarjeta que te da acceso a eventos exclusivos y experiencias culturales.",
        "PathImg": '../assets/images/banorteTarjetasCredito/BanorteWRadio.png',
        "ventajas": [
            "Eventos exclusivos de la estación de radio<.",
            "Premieres de cine y mucho más .",
            "Aniversarios de los programas."
        ],
    },
]

export default cardsData;