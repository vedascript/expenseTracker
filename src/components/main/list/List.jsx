import React, { useContext } from 'react'
import useStyles from './styles'
import { List as MUIList, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'
import { ExpenseTrackerContext } from '../../../context/context'


export const List = () => {
    const classes = useStyles();
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext)

    return (
        <MUIList dense={false} className={classes.list} >
            {transactions.map((el) => (
                <Slide direction='down' in mountOnEnter unmountOnExit key={el.id} >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={el.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={el.category} secondary={`${el.amount} - ${el.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge='end' aria-label='delete' onClick='' >
                                <Delete onClick={() => deleteTransaction(el.id)} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}
