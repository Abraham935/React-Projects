import {useState, useEffect} from 'react'

const Filters = ( {filter, setFilter} ) => {
  return (
    <div className='filtros sombra contendeor'>
        <form>
            <div className='campo'>
                <label>Filter expenses</label>
                <select
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                > 
                    <option value="">All categories</option>
                    <option value="Saving">Saving</option>
                    <option value="Food">Food</option>
                    <option value="Home">Home</option>
                    <option value="Fun">Fun</option>
                    <option value="Health">Health</option>
                    <option value="Subscriptions">Subscriptions</option>
                </select>

            </div>
        </form>
    </div>
  )
}

export default Filters