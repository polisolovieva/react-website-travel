import React from 'react';
import './Button.css'
import {Link} from "react-router-dom";

const Button = ({children,type,onClick,buttonStyle,buttonSize}) => {

    const STYLES = ['btn--primary', 'btn--outline'];

    const SIZES =['btn--medium', 'btn--large'];

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <div>
            <Link to='/sing-up' className='btn-mobile'>
                <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
            </Link>
        </div>
    );
};

export default Button;