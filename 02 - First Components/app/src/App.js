import Lesson from "./Lesson";

const lessons = [
    {
        title: 'Lesson 0',
        name: 'Prerequisites',
        date: '05.10.2021'
    },
    {
        title: 'Lesson 1',
        name: 'Intro to React',
        date: '06.10.2021'
    },
    {
        title: 'Lesson 2',
        name: 'First Components',
        date: '06.10.2021'
    },
]

function App() {
    return (
        <div>
            <h1>Lessons list</h1>
            {lessons.map((lesson) => <Lesson {...lesson} />)}
        </div>
    );
}

export default App;
