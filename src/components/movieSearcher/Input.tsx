const inputStyle = `ms-3 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;

const Input = ({handleInputChg}: {handleInputChg: Function}) => (
    <input
        type="text"
        name="movieName"
        onChange={(evt) => handleInputChg(evt.target.value)}
        className={inputStyle}
    />
)

export default Input