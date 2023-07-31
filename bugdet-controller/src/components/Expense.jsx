/* eslint-disable react/prop-types */

import {

    LeadingActions,
    SwipeableList, 
    SwipeableListItem,
    SwipeAction,
    TrailingActions

} from "react-swipeable-list"

import "react-swipeable-list/dist/styles.css"

import { dateParse } from "../helpers"

import SavingIcon from "../img/icono_ahorro.svg"
import FoodIcon from "../img/icono_comida.svg"
import HomeIcon from "../img/icono_casa.svg"
import FunIcon from "../img/icono_ocio.svg"
import HealthIcon from "../img/icono_salud.svg"
import SubscriptionsIcon from "../img/icono_suscripciones.svg"




const iconsDictionary = {
    
    Saving : SavingIcon,
    Home : HomeIcon,
    Fun : FunIcon,
    Health : HealthIcon,
    Subscriptions : SubscriptionsIcon,
    Food: FoodIcon

}

const Expense = ( {expense} ) => {

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => console.log('Edit')}>
                Edit
            </SwipeAction>

        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => console.log('Delete')}>
                Delete
            </SwipeAction>

        </TrailingActions>  
    )

    return (
        <SwipeableList>
            <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
            >
            <div className="gasto sombra">
                <div className="contenido-gasto">
                    <img
                        src={iconsDictionary[expense.category]}
                        alt="Icon expense" 
                    />

                    <div className="descripcion-gasto">
                        <p className="categoria">{expense.category}</p>
                        <p className="nombre-gasto">{expense.name}</p>
                        <p className="fecha-gasto">
                            Added on: {''}
                            <span>{ dateParse(expense.date)}</span>
                        </p>

                    </div>
                </div>

                <p className="cantidad-gasto">${expense.cost}</p>

            </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Expense