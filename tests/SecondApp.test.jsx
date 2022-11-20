import { render } from "@testing-library/react";
import { SecondApp } from "../src/SecondApp";

describe('Pruebas en <SecondApp />', () => { 
    test('debe hacer match con el snapshot', () =>{
        const title = 'Hola, Soy Goku'
        const { container } = render( <SecondApp title={ title } />);
    
        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar el título en un h1', () =>{
        const title = 'Hola, Soy Goku';
        const { container, getByText, getByTestId } = render( <SecondApp title={ title } />);

        expect( getByText(title) ).toBeTruthy();
        //const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toContain(title);
        expect(getByTestId('test-title')
            .innerHTML).toContain(title);
    });

    test('debe de mostrar el subtitulo evidado por props', () => {
        const title = 'Hola, Soy Vegeta';
        const subtitle = 'No hay subtitulo';
        const { getAllByText } = render( 
            <SecondApp 
                title = { title }
                subtitle = { subtitle }
            />)
        expect( getAllByText(subtitle).length).toBe(2);
    });
});