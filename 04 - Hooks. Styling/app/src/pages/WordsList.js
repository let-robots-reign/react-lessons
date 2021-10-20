import Button from "../components/Button";
import WordRow from "../components/WordRow";
import {useEffect, useState} from "react";
import Modal from "../components/Modal";
import CreateWordForm from "../components/CreateWordForm";
import {getWords, postWord} from "../utils/words";

const WordsList = () => {
    const [words, setWords] = useState([]);
    const [showCreateModal, setShowCreateModal] = useState(false);

    useEffect(() => {
        getWords()
            .then((res) => res.json())
            .then((resJSON) => setWords(resJSON))
            .catch((err) => console.log(err));
    }, []);

    const createWord = (word) => {
        postWord(word)
            .then((res) => setWords([...words, word]))
            .catch((err) => console.log(err));
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
