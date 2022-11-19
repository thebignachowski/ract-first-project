import PropTypes from 'prop-types';

export const SecondApp = ( { title, subtitle, name }) => {
    
    return (
        <>
            <h1>{ title }</h1>
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
    title: 'No hay ningún título',
    subtitle: 'No hay subtítulo',
    name: 'Nachowski'
}