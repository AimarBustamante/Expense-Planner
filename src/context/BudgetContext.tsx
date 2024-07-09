import { useReducer, createContext, Dispatch, ReactNode, useMemo } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
    totalExpenses: number
    remainBudget: number
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({children} : BudgetProviderProps) => {

    const  [state, dispatch] = useReducer(budgetReducer, initialState)

	const totalExpenses = useMemo(
		() =>
			state.expenses.reduce(
				(total, expense) => expense.amount + total,
				0
			),
		[state.expenses]
	);

	const remainBudget = state.budget - totalExpenses

    return(
        <BudgetContext.Provider 
            value={{
                state,
                dispatch,
                totalExpenses,
                remainBudget
            }} 
        >   
            {children}
        </BudgetContext.Provider>
    )
}