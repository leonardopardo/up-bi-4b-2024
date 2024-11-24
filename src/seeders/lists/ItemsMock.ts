
import { randomInt } from "crypto";
import { Item } from "../../entities/Item";

export const ItemsMock: Partial<Item>[] = [
    {
        categoria_id: 1,
        club_id: randomInt(1, 13),
        nombre: "Camiseta Oficial 2024",
        descripcion: "Camiseta oficial del club para la temporada 2024.",
        precio: 12000,
        stock: 100
    },
    {
        categoria_id: 1,
        club_id: randomInt(1, 13),
        nombre: "Short Oficial 2024",
        descripcion: "Short oficial para acompañar la camiseta de la temporada.",
        precio: 8000,
        stock: 80
    },
    {
        categoria_id: 1,
        club_id: randomInt(1, 13),
        nombre: "Buzo de Entrenamiento",
        descripcion: "Buzo oficial para entrenamientos del club.",
        precio: 15000,
        stock: 50
    },
    {
        categoria_id: 2,
        club_id: randomInt(1, 13),
        nombre: "Llavero con Logo",
        descripcion: "Llavero metálico con el logo oficial del club.",
        precio: 1000,
        stock: 200
    },
    {
        categoria_id: 2,
        club_id: randomInt(1, 13),
        nombre: "Taza Oficial",
        descripcion: "Taza con el escudo y los colores del club.",
        precio: 2000,
        stock: 150
    },
    {
        categoria_id: 2,
        club_id: randomInt(1, 13),
        nombre: "Bandera de Hincha",
        descripcion: "Bandera oficial para apoyar al club en los partidos.",
        precio: 3000,
        stock: 75
    },
    {
        categoria_id: 3,
        club_id: randomInt(1, 13),
        nombre: "Pelota de Fútbol",
        descripcion: "Pelota de fútbol con el logo oficial del club.",
        precio: 6000,
        stock: 120
    },
    {
        categoria_id: 3,
        club_id: randomInt(1, 13),
        nombre: "Botines Pro",
        descripcion: "Botines con diseño exclusivo del club.",
        precio: 25000,
        stock: 40
    },
    {
        categoria_id: 3,
        club_id: randomInt(1, 13),
        nombre: "Guantes de Arquero",
        descripcion: "Guantes de arquero con detalles del club.",
        precio: 10000,
        stock: 30
    },
    {
        categoria_id: 4,
        club_id: randomInt(1, 13),
        nombre: "Conos de Entrenamiento",
        descripcion: "Conos de plástico para ejercicios de entrenamiento.",
        precio: 4000,
        stock: 60
    },
    {
        categoria_id: 4,
        club_id: randomInt(1, 13),
        nombre: "Pesas Ajustables",
        descripcion: "Juego de pesas ajustables para entrenamientos personalizados.",
        precio: 20000,
        stock: 20
    },
    {
        categoria_id: 4,
        club_id: randomInt(1, 13),
        nombre: "Bandas Elásticas",
        descripcion: "Bandas para ejercicios de resistencia.",
        precio: 3500,
        stock: 100
    },
    {
        categoria_id: 5,
        club_id: randomInt(1, 13),
        nombre: "Foto Firmada",
        descripcion: "Fotografía autografiada por los jugadores del club.",
        precio: 5000,
        stock: 25
    },
    {
        categoria_id: 5,
        club_id: randomInt(1, 13),
        nombre: "Medalla Conmemorativa",
        descripcion: "Medalla especial conmemorativa de los logros del club.",
        precio: 7000,
        stock: 15
    },
    {
        categoria_id: 5,
        club_id: randomInt(1, 13),
        nombre: "Póster de Edición Limitada",
        descripcion: "Póster especial del equipo conmemorativo.",
        precio: 4000,
        stock: 50
    },
    {
        categoria_id: 1,
        club_id: randomInt(1, 13),
        nombre: "Camiseta Oficial 2024",
        descripcion: "Camiseta oficial del club para la temporada 2024.",
        precio: 12000,
        stock: 100
    },
    {
        categoria_id: 1,
        club_id: randomInt(1, 13),
        nombre: "Short Oficial 2024",
        descripcion: "Short oficial para acompañar la camiseta de la temporada.",
        precio: 8000,
        stock: 80
    },
    {
        categoria_id: 1,
        club_id: randomInt(1, 13),
        nombre: "Buzo de Entrenamiento",
        descripcion: "Buzo oficial para entrenamientos del club.",
        precio: 15000,
        stock: 50
    },
    {
        categoria_id: 1,
        club_id: randomInt(1, 13),
        nombre: "Chomba Polo Oficial",
        descripcion: "Chomba estilo polo con los colores oficiales",
        precio: 10000,
        stock: 70
    },
    {
        categoria_id: 1,
        club_id: randomInt(1, 13),
        nombre: "Campera Impermeable",
        descripcion: "Campera impermeable para uso diario o entrenamiento.",
        precio: 18000,
        stock: 60
    },
    {
        categoria_id: 1,
        club_id: randomInt(1, 13),
        nombre: "Calza Deportiva",
        descripcion: "Calza ajustada para actividades deportivas.",
        precio: 7000,
        stock: 90
    },
    {
        categoria_id: 2,
        club_id: randomInt(1, 13),
        nombre: "Llavero con Logo",
        descripcion: "Llavero metálico con el logo oficial del club.",
        precio: 1000,
        stock: 200
    },
    {
        categoria_id: 2,
        club_id: randomInt(1, 13),
        nombre: "Taza Oficial",
        descripcion: "Taza con el escudo y los colores del club.",
        precio: 2000,
        stock: 150
    },
    {
        categoria_id: 2,
        club_id: randomInt(1, 13),
        nombre: "Bandera de Hincha",
        descripcion: "Bandera oficial para apoyar al club en los partidos.",
        precio: 3000,
        stock: 75
    },
    {
        categoria_id: 2,
        club_id: randomInt(1, 13),
        nombre: "Pulsera de Silicona",
        descripcion: "Pulsera con los colores del club.",
        precio: 500,
        stock: 300
    },
    {
        categoria_id: 3,
        club_id: randomInt(1, 13),
        nombre: "Pelota de Fútbol",
        descripcion: "Pelota de fútbol con el logo oficial del club.",
        precio: 6000,
        stock: 120
    },
    {
        categoria_id: 3,
        club_id: randomInt(1, 13),
        nombre: "Botines Pro",
        descripcion: "Botines con diseño exclusivo del club.",
        precio: 25000,
        stock: 40
    },
    {
        categoria_id: 3,
        club_id: randomInt(1, 13),
        nombre: "Guantes de Arquero",
        descripcion: "Guantes de arquero con detalles del club.",
        precio: 10000,
        stock: 30
    },
    {
        categoria_id: 1,
        club_id: randomInt(1, 13),
        nombre: "Pantalón Largo Deportivo",
        descripcion: "Pantalón largo con diseño oficial del club, ideal para entrenamientos en invierno.",
        precio: 12000,
        stock: 80
    },
    {
        categoria_id: 1,
        club_id: randomInt(1, 13),
        nombre: "Medias Oficiales",
        descripcion: "Par de medias largas con los colores y escudo del club.",
        precio: 2500,
        stock: 200
    },
    {
        categoria_id: 1,
        club_id: randomInt(1, 13),
        nombre: "Chaqueta de Presentación",
        descripcion: "Chaqueta usada por los jugadores durante las presentaciones oficiales.",
        precio: 18000,
        stock: 60
    },
    {
        categoria_id: 2,
        club_id: randomInt(1, 13),
        nombre: "Bolígrafo Personalizado",
        descripcion: "Bolígrafo metálico grabado con el nombre y escudo del club.",
        precio: 1000,
        stock: 300
    },
    {

        categoria_id: 2,
        club_id: randomInt(1, 13),
        nombre: "Cuaderno de Apuntes",
        descripcion: "Cuaderno con portada del club, ideal para hinchas estudiantes.",
        precio: 1500,
        stock: 100
    },
    {
        categoria_id: 2,
        club_id: randomInt(1, 13),
        nombre: "Mochila Oficial",
        descripcion: "Mochila deportiva con amplio espacio y diseño exclusivo del club.",
        precio: 12000,
        stock: 50
    },
    {
        categoria_id: 3,
        club_id: randomInt(1, 13),
        nombre: "Protector Bucal",
        descripcion: "Protector bucal ideal para deportes de contacto, personalizado con el logo del club.",
        precio: 3000,
        stock: 70
    },
    {
        categoria_id: 3,
        club_id: randomInt(1, 13),
        nombre: "Set de Cintas Adhesivas",
        descripcion: "Cintas adhesivas para soporte muscular, con colores del club.",
        precio: 2500,
        stock: 150
    },
    {
        categoria_id: 4,
        club_id: randomInt(1, 13),
        nombre: "Escalera de Agilidad",
        descripcion: "Escalera de agilidad para mejorar la coordinación y velocidad en entrenamientos.",
        precio: 7000,
        stock: 40
    },
    {
        categoria_id: 4,
        club_id: randomInt(1, 13),
        nombre: "Conjunto de Pesas",
        descripcion: "Conjunto de pesas de varios tamaños, ideales para ejercicios de fuerza.",
        precio: 20000,
        stock: 30
    },
    {
        categoria_id: 5,
        club_id: randomInt(1, 13),
        nombre: "Libro de la Historia del Club",
        descripcion: "Edición especial que recorre los momentos más importantes del club.",
        precio: 6000,
        stock: 20
    },
    {
        categoria_id: 5,
        club_id: randomInt(1, 13),
        nombre: "Réplicas de Trofeos",
        descripcion: "Miniaturas de los trofeos más importantes ganados por el club.",
        precio: 8000,
        stock: 15
    },
    {
        categoria_id: 5,
        club_id: randomInt(1, 13),
        nombre: "Álbum de Fotos del Equipo",
        descripcion: "Álbum coleccionable con fotos del equipo a lo largo de los años.",
        precio: 4000,
        stock: 50
    },
    {
        categoria_id: 1,
        club_id: randomInt(1, 13),
        nombre: "Camiseta de Portero",
        descripcion: "Camiseta especial usada por los porteros del equipo.",
        precio: 13000,
        stock: 60
    },
    {
        categoria_id: 2,
        club_id: randomInt(1, 13),
        nombre: "Gorra con Logo",
        descripcion: "Gorra ajustable con el escudo del club bordado.",
        precio: 3000,
        stock: 100
    },
];