import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context'
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories'

export const useTransactions = (title) => {
    resetCategories();

    const { transactions } = useContext(ExpenseTrackerContext);
    const transactionsPerType = transactions.filter(el => el.type === title);
    const total = transactionsPerType.reduce((ac, curr) => ac += curr.amount, 0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    transactionsPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category)
        if (category) {
            category.amount += t.amount
        }
    })

    const filteresCategories = categories.filter((el) => el.amount > 0);

    const chartData = {
        datasets: [{
            data: filteresCategories.map(el => el.amount),
            backgroundColor: filteresCategories.map(el => el.color)
        }],
        labels: filteresCategories.map((el) => el.type)
    }

    return { chartData, total }

}