const WordRow = ({ index, word, translation }) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{word}</td>
            <td>{translation}</td>
        </tr>
    );
};

export default WordRow;
