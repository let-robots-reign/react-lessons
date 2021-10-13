import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const CreateWordForm = ({ onCreateWord }) => {
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');

    return (
        <div className="form">
            <h2 className="form-title">Создать слово</h2>
            <Input
                value={word}
                placeholder="Введите слово"
                onChange={(e) => setWord(e.target.value)}
            />
            <Input
                value={translation}
                placeholder="Введите перевод"
                onChange={(e) => setTranslation(e.target.value)}
            />
            <Button text="Готово" onClick={() => onCreateWord({word, translation})}/>
        </div>
    );
};

export default CreateWordForm;
