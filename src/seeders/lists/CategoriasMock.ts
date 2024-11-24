import { Categoria } from "../../entities/Categoria";

export const CategoriasMock: Partial<Categoria>[] = [
    {
        codigo: "IND001",
        nombre: "Indumentaria",
        descripcion: "Ropa oficial y deportiva del club, como camisetas, shorts y buzos.",
    },
    {
        codigo: "MER001",
        nombre: "Merchandising",
        descripcion: "Productos promocionales como llaveros, banderas, tazas y gorros.",
    },
    {
        codigo: "ACC001",
        nombre: "Accesorios Deportivos",
        descripcion: "Artículos para la práctica deportiva, como pelotas, botines y guantes.",
    },
    {
        codigo: "ENT001",
        nombre: "Entrenamiento",
        descripcion: "Equipos y herramientas de entrenamiento, como conos, pesas y bandas elásticas.",
    },
    {
        codigo: "SOU001",
        nombre: "Souvenirs",
        descripcion: "Recuerdos y coleccionables del club, como fotos firmadas y artículos conmemorativos.",
    }
];