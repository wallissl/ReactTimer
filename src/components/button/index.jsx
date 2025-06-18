import './button.css';
import PropTypes from 'prop-types';
// variant = "primary" => orange
// variant = "secondary" => pink

/* export function Button(props){
    return <button className={`container--button`} { ...props} />
}
 */

export function Button({variant = "primary", ...rest}){
    return <button className={`container--button ${variant}`} { ...rest} />
}

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']), //
 
}; // Recebe uma lista de tipos de dados que o componente aceita
