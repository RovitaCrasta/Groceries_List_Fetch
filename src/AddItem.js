import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'
import './AddItem.css'


const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onClick={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
           autoFocus
           ref={inputRef}
           id='addItem'
           type='text'
           placeholder='Add Item'
           value={newItem}
           onChange={(e) => setNewItem(e.target.value)}
           required
        />
        <button
            type='submit'
            aria-label='Add Item'
            onClick={() => inputRef.current.focus()}
           > 
           <FaPlus />
        </button>

    </form>
  )
}

export default AddItem


