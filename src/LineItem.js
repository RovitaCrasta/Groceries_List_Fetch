import { FaTrashAlt } from 'react-icons/fa'

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className="item">
            <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
            <label style={item.checked ? { textDecoration: 'line-through' } : null} onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
            <FaTrashAlt className="trash-button" onClick={() => { handleDelete(item.id) }} role="button" tabIndex="0"  aria-label={`Delete ${item.item}`}/>
        </li>
    )
}

LineItem.defaultProps = {
    items: {},
    handleCheck: () => {},
    handleDelete: () => {}
}

export default LineItem;