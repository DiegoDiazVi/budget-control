import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import BudgetList from './components/BudgetList';
import { idGenerate, dateGenerate } from './helpers';
import NewExpenseIcon from './img/nuevo-gasto.svg'

function App() {

  /*
    * States de los gastos, Flag de gasto valido,
    * flag de mostrar modal, flag de animar el modal
    * state del array que almacena los gastos,
    * state del gasto que se va a editar
  */

  const [budget, setBudget] = useState(Number(localStorage.getItem('budget')) ?? 0);
  const [isBudgetValid, setIsBudgetValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenses, setExpenses] = useState([...JSON.parse(localStorage.getItem('expenses')) ?? []]);
  const [editExpense, setEditExpense] = useState({});


  /*
    * Efecto que se dispara cada que
    * el state de editExpense cambia
    * abriendo el modal con la animacion.
   */
  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      handleNewBudget();
    }
  }, [editExpense]);

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0);
  }, [budget]);

  useEffect(() => {
    const budgetLs = Number(localStorage.getItem('budget')) ?? 0;
    if (budgetLs > 0) {
      setIsBudgetValid(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? []);
  }, [expenses]);

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
    * para que modifique o cree el
    * gasto y leugo lo almacene  y
    * deje de muestrar modal
  */

  const saveExpense = (expense) => {
    if (expense.id) {
      // Update
      const updateExpense = expenses.map(
        item  => item.id === expense.id ? expense : item
      );
      setExpenses(updateExpense);
    } else {
      // Create
      expense.id = idGenerate();
      expense.expenseDate = dateGenerate();
      setExpenses([...expenses, expense]);
    }

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
      setEditExpense({});
  }, 500);
  }

  const deleteExpense = (id) => {
    const expenseDeleted = expenses.filter( expense => expense.id !== id);
    setExpenses(expenseDeleted);
  }

      /*
    * ------ Header --------
    * Se propaga el state del prespuesto
    * y el modificador y
    * Se propaga el state  si el prespuesto
    * es valido y  el modificador
    *
    * ------ BudgetList ----
    * Si el state del presupeusto es valido
    * se muestra el listado de gastos
    *
    * ------ New Budget ----
    * Si el state del presupeusto es valido
    * se muestra el icono para agregar el gasto
    *
    * ------ Modal ---------
    * Si el state del modal existe muestra el
    * modal y le propaga el modificador del modal
    * el state del animador del modal y  el
    * modificador de este, tambien se envia
    * la funcion que me permite guardar el
    * gasto, el state del gasto a editar y
    * el modificador del gasto a editar
  */
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        budget={budget}
        setBudget={setBudget}
        isBudgetValid={isBudgetValid}
        setIsBudgetValid={setIsBudgetValid}
        expenses={expenses}
      />
      {isBudgetValid && (
        <>
        <main>
          <BudgetList expenses={expenses} setEditExpense={setEditExpense} deleteExpense={deleteExpense}/>
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

      {
        modal && <Modal
                    setModal={setModal}
                    animateModal={animateModal}
                    setAnimateModal={setAnimateModal}
                    saveExpense={saveExpense}
                    editExpense={editExpense}
                    setEditExpense={setEditExpense}
                  />
      }
    </div>
  )
}

export default App
