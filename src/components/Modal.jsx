import React, { useState } from 'react'
import Message from './Message';
import Close from '../img/cerrar.svg'

/*
    * Componente encargado del modal
    * para ingresar datos
    * se reciben los props del modificador
    * que muestra el modal, el state para
    * animar o no el modal y el modificador
    * del animador del modal
*/
const Modal = ({setModal, animateModal, setAnimateModal}) => {

/*
    * States de los gatos y el mensaje de error
*/
    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount] = useState(0);
    const [expenseCategory, setExpenseCategory] = useState('');
    const [modalMessage, setModalMessage] = useState('');
/*
    * Funcion que esconde el modal
    * modifical el state del animador
    * del modal y modifica el state
    * del modal para cerrarlo luego
    * de medio segundo
*/
    const hideModal = () => {
        setAnimateModal(false);

        setTimeout(() => {
            setModal(false);
        }, 500);
    }

/*
    * Validacion luego de enviar el submit
    * de que ningun campo este vacio
*/
    const handleSubmit = (e) => {
        e.preventDefault();

        if ([expenseName, expenseAmount, expenseCategory].includes('')) {
            setModalMessage('Todos los campos son obligatorios');
            return
        }
        setModalMessage('');
    }

/*
    * Modal, boton de cerrado de modal
    * ------ Formulario -------------
    * Formulario que recibe clases dinamicas
    * de CSS para animar o cerrar el formulario
    * del modal y permite la seleccion de los
    * gastos que se van a registrar
*/
    return (
        <div className="modal">

            <div className="cerrar-modal">
                <img
                    src={Close}
                    alt="Close"
                    onClick={hideModal}
                />
            </div>
            <form onSubmit={handleSubmit} className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}>
                <legend>Nuevo Gasto</legend>

                {modalMessage && <Message tipo='error'>{modalMessage}</Message>}

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Añade el nombre del gasto'
                        value={expenseName}
                        onChange={(e) => setExpenseName(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='nombre'
                        type="number"
                        placeholder='Añade la cantidad del gasto'
                        value={expenseAmount}
                        onChange={(e) => setExpenseAmount(Number(e.target.value))}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        value={expenseCategory}
                        onChange={(e) => setExpenseCategory(e.target.value)}
                    >
                        <option value="">-- Selecciona --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="hogar">Hogar</option>
                        <option value="ocio">Ocio</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value='Añadir gasto' />
            </form>
        </div>
    )
}

export default Modal