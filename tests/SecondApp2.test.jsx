import { render, screen } from "@testing-library/react";
import { SecondApp } from "../src/SecondApp";


describe('Pruebas en <SecondApp />', () => { 

    const title = 'Hola, Soy Goku';
    const subtitle = 'Soy un subtítulo';
    test('debe hacer match con el snapshot', () =>{        
        const { container } = render( <SecondApp title={ title } />);    
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el mensaje "Hola, Soy Goku"', () => {
        render( <SecondApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('Debe de mostrar el título en un h1', () =>{
        render( <SecondApp title={title} />);
        expect( screen.getByRole('heading', { level: 1 })
            .innerHTML).toContain(title)
    });

    test('Debe de mostrar el subtítulo enviado por props', () => {
        render( <SecondApp 
                title={title}
                subtitle={subtitle} 
            />);
        expect( screen.getAllByText(subtitle).length).toBe(2);
    });

});