import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en CounterApp', () => { 

    const value = 10;
    test('Debe hacer un match con el snapshop', () => {
        const { container } = render(<CounterApp value={value} />);
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial de 100', () => {
        render( <CounterApp value={100} />);
        expect( screen.getByText(100) ).toBeTruthy(); 
    });

    test('Debe incrementar con el botón +1', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('11')).toBeTruthy();
    });

    test('Debe incrementar con el botón -1', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('9')).toBeTruthy();
    });

    test('Debe volver al valor inicial', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText('Reset') );
        expect( screen.getByText(value)).toBeTruthy();
    });
});
