import { useEffect, useRef, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import translate from "../utils/translate";

const CreateWordForm = ({ onCreateWord }) => {
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const wordInput = useRef();
    const translationInput = useRef();

    const submitForm = () => {
        if (!translation) {
            translationInput.current.focus();
        }
        if (!word) {
            wordInput.current.focus();
        }
        setFormSubmitted(true);
        if (word && translation) {
            onCreateWord({word, translation});
            setWord('');
            setTranslation('');
            setFormSubmitted(false);
        }
    };

    useEffect(() => {
        if (!word) return;

        const translateWord = async () => {
            const response = await translate(word);
            const responseJSON = await response.json();
            const matches = responseJSON.matches;
            if (matches.length) {
                setTranslation(matches[0].translation);
            }
        }

        const timer = setTimeout(() => translateWord(word), 800);

        return () => clearTimeout(timer);
    }, [word]);

    return (
        <div className="form">
            <h2 className="form-title">Создать слово</h2>
            <Input
                ref={wordInput}
                value={word}
                placeholder="Введите слово"
                onChange={(e) => setWord(e.target.value)}
                className={`form-input ${(formSubmitted) ? ((word) ? 'valid' : 'invalid') : ''}`}
            />
            <Input
                ref={translationInput}
                value={translation}
                placeholder="Введите перевод"
                onChange={(e) => setTranslation(e.target.value)}
                className={`form-input ${(formSubmitted) ? ((translation) ? 'valid' : 'invalid') : ''}`}
            />
            <Button text="Готово" onClick={submitForm}/>
        </div>
    );
};

export default CreateWordForm;
