import { DataSource } from "typeorm";
import { ClienteFactory } from "../factories/ClienteFactory";
import { Club } from "../entities/Club";

export class ClubSeeder {
  static async seed(ds: DataSource): Promise<void> {
    const clubRepository = ds.getRepository(Club);
    await clubRepository.delete({});

    const clubes: Partial<Club>[] = [
      {
        nombre: "Boca Juniors",
        ciudad: "Buenos Aires",
        fundacion: 1905,
        estadio: "La Bombonera",
      },
      {
        nombre: "River Plate",
        ciudad: "Buenos Aires",
        fundacion: 1901,
        estadio: "El Monumental",
      },
      {
        nombre: "Racing Club",
        ciudad: "Avellaneda",
        fundacion: 1903,
        estadio: "El Cilindro",
      },
      {
        nombre: "Independiente",
        ciudad: "Avellaneda",
        fundacion: 1905,
        estadio: "Libertadores de América",
      },
      {
        nombre: "San Lorenzo",
        ciudad: "Buenos Aires",
        fundacion: 1908,
        estadio: "Nuevo Gasómetro",
      },
      {
        nombre: "Huracán",
        ciudad: "Buenos Aires",
        fundacion: 1908,
        estadio: "Tomás Adolfo Ducó",
      },
      {
        nombre: "Vélez Sarsfield",
        ciudad: "Buenos Aires",
        fundacion: 1910,
        estadio: "José Amalfitani",
      },
      {
        nombre: "Estudiantes de La Plata",
        ciudad: "La Plata",
        fundacion: 1905,
        estadio: "Jorge Luis Hirschi",
      },
      {
        nombre: "Gimnasia y Esgrima La Plata",
        ciudad: "La Plata",
        fundacion: 1887,
        estadio: "Juan Carmelo Zerillo",
      },
      {
        nombre: "Newell's Old Boys",
        ciudad: "Rosario",
        fundacion: 1903,
        estadio: "El Coloso del Parque",
      },
      {
        nombre: "Rosario Central",
        ciudad: "Rosario",
        fundacion: 1889,
        estadio: "Gigante de Arroyito",
      },
      {
        nombre: "Talleres",
        ciudad: "Córdoba",
        fundacion: 1913,
        estadio: "Mario Alberto Kempes",
      },
      {
        nombre: "Belgrano",
        ciudad: "Córdoba",
        fundacion: 1905,
        estadio: "Gigante de Alberdi",
      },
      // Puedes agregar más clubes aquí
    ];

    for (const club of clubes) {
      await clubRepository.save(club);
    }

    console.log(`${clubes.length} clubs seeded successfully`);
  }
}
