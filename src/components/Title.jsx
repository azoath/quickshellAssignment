import React from 'react'
import './styles/Title.css'
import plusIcon from './assets/add.svg'
import threedot from './assets/3 dot menu.svg'


const priorityCode = {
    'No priority': 0,
    'Low': 1,
    'Medium': 2,
    'High': 3,
    'Urgent': 4
}

function Title({title, grouping, count, available = true}) {
  return (
    <div className='card-title'>
        <div className='card-title-left'>
            {grouping === 'user' ? 
            <div className='card-user'>
                <div className='card-user-icon'>{title.split(" ").map((n)=> n[0].toUpperCase()).join("")}</div>
                <div className={available ? 'active-user' : 'inactive-user'}></div>
            </div>
            : grouping === 'status' ? <img src={require('./assets/' + title + '.svg')} /> 
            : grouping === 'priority' ? <img src={require('./assets/' + priorityCode[title] + '.svg')} /> : null}
            <span className='group-title'>{title}</span>
            <span className='group-count'>{count}</span>
        </div>
        {count > 0 ? <div className='card-title-right'>
            <button className='card-title-right-btn'><img src={plusIcon}/></button>
            <button className='card-title-right-btn'><img src={threedot}/></button>
        </div> : null}
    </div>
  )
}

export default Title