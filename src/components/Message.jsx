import React from 'react'

/*
    * Recibe las props children que es
    * el mensaje del error en este caso
    * y el tipo para la clase de css
    * que en este caso puede ser dinamico
*/
const Message = ({children, tipo}) => {
    return (
        <div className={`alerta ${tipo}`}>{children}</div>
    )
}

export default Message