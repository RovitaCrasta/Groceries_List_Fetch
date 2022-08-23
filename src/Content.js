import './Content.css'
import ListItems from './ListItems';

function Content({ items, handleCheck, handleDelete }) {

    return (
        <>
            {items && items.length ? (
                <ListItems items={items} handleCheck={handleCheck} handleDelete={handleDelete} />

            ) : (
                <p style={{ marginTop: '2rem ' }}>Your list is empty</p>
            )
            }
        </>
    )
}

Content.defaultProps = {
    items: {},
    handleCheck: () => { },
    handleDelete: () => { }
}

export default Content
