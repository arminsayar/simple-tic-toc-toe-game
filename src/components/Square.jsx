
const style = {
    backgroundColor: "lightblue",
    border: "2px solid darkblue",
    fontSize: "30px",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none",
    width: "100px",
    height: "100px",
};

export const Square = ({ onClick, value }) => {

    return <>
        <button style={style} onClick={onClick}>{value}</button>
    </>
};