const translate = (word) => {
    return fetch(`https://api.mymemory.translated.net/get?q=${word}&langpair=en|ru`);
};

export default translate;
