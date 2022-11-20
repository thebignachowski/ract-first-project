import PropTypes from 'prop-types';

export const SecondApp = ( { title, subtitle, name }) => {
    
    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            <p>{ subtitle }</p>
            <p>{ subtitle }</p>
            <p>{ name }</p>
        </>
    )
}

SecondApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

SecondApp.defaultProps = {
    name: 'Nachowski',
    subtitle: 'No hay subtítulo',
    //title: 'No hay ningún título',
}