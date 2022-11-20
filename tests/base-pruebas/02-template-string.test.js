import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-templalte-string', () => { 
    test('getSaludo debe retornar "Hola Nacho"', () => {
        const name = 'Nacho';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    });
});