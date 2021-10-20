const API_PATH = 'http://localhost:8000';

export const getWords = () => fetch(`${API_PATH}/words`);

export const postWord = (word) => {
    return fetch(`${API_PATH}/words`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(word)
    });
}