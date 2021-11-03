import { Square } from './Square'

const style = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '300px',
    margin: '100px auto 0 auto',
}

export const Board = ({ squares, onClick }) => {
    
    return <>
        <div style={style}>

            {squares.map((s, i) => (
                <Square key={i} value={s} onClick={() => onClick(i)} />
            ))}

        </div>
    </>
}