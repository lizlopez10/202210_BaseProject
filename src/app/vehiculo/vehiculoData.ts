import { Vehiculo } from "./Vehiculo";
import { faker } from '@faker-js/faker';

export const listaVehiculos = [
    new Vehiculo(faker.datatype.number(),faker.datatype.string(),faker.datatype.string(),faker.datatype.string(),
    faker.datatype.string(),faker.datatype.number(),faker.datatype.string(),faker.datatype.string()),
    
    new Vehiculo(faker.datatype.number(),faker.datatype.string(),faker.datatype.string(),faker.datatype.string(),
    faker.datatype.string(),faker.datatype.number(),faker.datatype.string(),faker.datatype.string()),
    
    new Vehiculo(faker.datatype.number(),faker.datatype.string(),faker.datatype.string(),faker.datatype.string(),
    faker.datatype.string(),faker.datatype.number(),faker.datatype.string(),faker.datatype.string())
];