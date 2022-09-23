import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import NewExpenseIcon from './img/nuevo-gasto.svg'

function App() {

  const [budget, setBudget] = useState(0);
  const [isBudgetValid, setIsBudgetValid] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNewBudGet = () => {
    setModal(true);
  }

  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
        isBudgetValid={isBudgetValid}
        setIsBudgetValid={setIsBudgetValid}
      />
      {isBudgetValid && (
        <div className="nuevo-gasto">
          <img
            src={NewExpenseIcon}
            alt="Icono de nuevo gasto"
            onClick={handleNewBudGet}
          />
        </div>
      )}

      {modal && <Modal setModal={setModal}/>}
    </>
  )
}

export default App
