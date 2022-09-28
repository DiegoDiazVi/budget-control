import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import BudgetList from './components/BudgetList';
import { idGenerate, dateGenerate } from './helpers';
import NewExpenseIcon from './img/nuevo-gasto.svg'

function App() {

  /*
    *States de los gastos, Flag de gasto valido,
    *flag de mostrar modal, flag de animar el modal
  */

  const [budget, setBudget] = useState(0);
  const [isBudgetValid, setIsBudgetValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenses, setExpenses] = useState([]);

    /*
    * Funcion setea el estado del modal
    * para que muestre el modal y luego de medio
    * segundo setea el state que anima el formulario del modal
  */

  const handleNewBudget = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  }


  /*
    * Funcion setea el estado de los gastos
    * para que almacene el gasto a registrar y
    * luego deje de muestrar modal
  */

  const saveExpense = (expense) => {
    expense.id = idGenerate();
    expense.expenseDate = dateGenerate();
    setExpenses([...expenses, expense]);

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
  }, 500);
  }

      /*
    * ------ Header --------
    * Se propaga el state del prespuesto
    * y el modificador y
    * Se propaga el state  si el prespuesto
    * es valido y  el modificador
    *
    * ------ New Budget ----
    * Si el state del presupeusto es valido
    * se muestra el icono para agregar el gasto
    * ------ Modal ---------
    *
    * Si el state del modal existe muestra el
    * modal y le propaga el modificador del modal
    * el state del animador del modal y  el
    * modificador de este
  */
  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
        isBudgetValid={isBudgetValid}
        setIsBudgetValid={setIsBudgetValid}
      />
      {isBudgetValid && (
        <>
        <main>
          <BudgetList expenses={expenses} />
        </main>
          <div className="nuevo-gasto">
            <img
              src={NewExpenseIcon}
              alt="Icono de nuevo gasto"
              onClick={handleNewBudget}
            />
          </div>
        </>
      )}

      {modal && <Modal setModal={setModal} animateModal={animateModal} setAnimateModal={setAnimateModal} saveExpense={saveExpense}/>}
    </>
  )
}

export default App
