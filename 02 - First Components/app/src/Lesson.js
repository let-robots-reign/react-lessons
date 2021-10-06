function Lesson(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h4>{props.name}</h4>
            <p>{props.date}</p>
            <hr/>
        </div>
    );
}

export default Lesson;

/*
Или с помощью деструктуризации, чтобы не писать каждый раз "props.". Упомяну на следующем занятии.

function Lesson({ title, name, date }) {
    return (
        <div>
            <h2>{title}</h2>
            <h4>{name}</h4>
            <p>{date}</p>
        </div>
    );
}

export default Lesson;
 */
