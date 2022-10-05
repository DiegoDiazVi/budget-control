import React from 'react'
import BudgetControl from './BudgetControl'
import NewBudget from './NewBudget'

/*
 * Se reciben los props del componente App
 */
const Header = ({
        budget,
        setBudget,
        isBudgetValid,
        setIsBudgetValid,
        expenses,
        setExpenses,
}) => {
    /*
        * Si la flag del presupuesto es
        * valida renderiza el componente BudgetControl
        * el cual envia la prop de presupuesto ingresado
        * si es invalido rederiza un nuevo presupuesto
        * el cual envia la prop de presupuesto ingresado
        * el modificador del presupuesto y el modificador
        * de la flag del presupuesto
    */
    return (
        <header>
            <h1>Planificador de gastos</h1>
            { isBudgetValid ? (
                <BudgetControl
                    budget={budget}
                    setBudget={setBudget}
                    expenses={expenses}
                    setExpenses={setExpenses}
                    setIsBudgetValid={setIsBudgetValid}
                />
            ) : (
                <NewBudget
                    budget={budget}
                    setBudget={setBudget}
                    setIsBudgetValid={setIsBudgetValid}
                />
            )
            }
        </header>
    )
}

export default Header