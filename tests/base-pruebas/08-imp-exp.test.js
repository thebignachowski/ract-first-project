import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroyById debe de retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById( id );
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });
    test('getHeroyById debe de retornar undefined si no existe el id', () => {
        const id = 100;
        const hero = getHeroeById( id );
        expect( hero ).toBeFalsy();
    });
    test('getHeroesByOwner debe retornar un arreglo con uno o más héroes de un propietario', 
    () => {
        const owner = 'DC';
        const hero = getHeroesByOwner( owner );
        expect( hero ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
    });
    test('getHeroesByOwner debe retornar un arreglo con dos héroes de Marvel', 
    () => {
        const owner = 'Marvel';
        const noHeroes = getHeroesByOwner( owner ).length
        expect(noHeroes).toBe(2);
    });
});