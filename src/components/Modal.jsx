import React, { useState, useEffect } from 'react'
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
const Modal = ({
    setModal,
    animateModal,
    setAnimateModal,
    saveExpense,
    editExpense,
    setEditExpense,
}) => {

/*
    * States de los gatos y el mensaje de error
*/
    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount] = useState(0);
    const [expenseCategory, setExpenseCategory] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [isEditModal, setIsEditModal] = useState(false);
    const [id, setId] = useState('');

    /*
        * Efecto que se dispara
        * cada vez que se abre el
        * modal y en caso de que sea
        * para editar, entonces
    */
    useEffect(() => {
        if (Object.keys(editExpense).length > 0) {
            setIsEditModal(true);
            setExpenseName(editExpense.expenseName);
            setExpenseAmount(editExpense.expenseAmount);
            setExpenseCategory(editExpense.expenseCategory);
            setId(editExpense.id);
        }
    }, []);
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
            if (Object.keys(editExpense).length > 0) {
                setIsEditModal(false);
                setEditExpense({});
            }
        }, 500);
    }

/*
    * Validacion luego de enviar el submit
    * de que ningun campo este vacio y envia
    * las las props a la funcion que guarda
    * el gasto
*/
    const handleSubmit = (e) => {
        e.preventDefault();

        if ([expenseName, expenseAmount, expenseCategory].includes('')) {
            setModalMessage('Todos los campos son obligatorios');
            return
        }
        setModalMessage('');
        saveExpense({expenseName, expenseAmount, expenseCategory, id});
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
                <legend>{isEditModal ? 'Editar gasto' : 'Nuevo Gasto'}</legend>

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

                <input type="submit" value={isEditModal ? 'Editar gasto' :'Añadir gasto'} />
            </form>
        </div>
    )
}

export default Modal