import Button from "../components/Button";
import WordRow from "../components/WordRow";
import {useState} from "react";
import Modal from "../components/Modal";
import CreateWordForm from "../components/CreateWordForm";

const words = [
    {
        word: 'cat',
        translation: 'кошка',
    },
    {
        word: 'dog',
        translation: 'собака'
    }
];

const WordsList = () => {
    const [showCreateModal, setShowCreateModal] = useState(false);

    const createWord = (word) => {
        words.push(word);
        setShowCreateModal(false);
    };

    return (
        <div className="card center">
            <h1 className="heading">Список слов</h1>
            <Button text="Добавить слово" onClick={() => setShowCreateModal(true)} />
            <table className="content-table">
                <thead>
                <tr>
                    <th>№</th>
                    <th>Слово</th>
                    <th>Перевод</th>
                </tr>
                </thead>
                <tbody>
                    {words.map((word, index) =>
                        <WordRow index={index + 1} key={word.word} {...word}/>
                    )}
                </tbody>
            </table>
            <Modal active={showCreateModal} setActive={setShowCreateModal}>
                <CreateWordForm onCreateWord={createWord}/>
            </Modal>
        </div>
    )
}

export default WordsList;
