import React from 'react'
import ReactDOM from 'react-dom'

// const div = (
//     React.createElement('div', null,
//         React.createElement('p', null,
//             React.createElement('span', null, 'hi')))
// )

const Header = (
    <header>这是一个 header</header>
)

const Header2 = function (props) {
    return (
        <header>
            这是带参数的 header {props.name}
        </header>
    )
}

const Bottom = function() {
    const [n, setN] = React.useState(0)
    return (
        <div>
            这是带内部变量的 bottom {n}
            <button onClick={function () {
                setN(n + 1)
            }}>
                +1
            </button>
        </div>
    )
}

class Bottom2 extends React.Component {
    render() {
        return (
            <div>这是使用 Class 的 bottom</div>
        )
    }
}

const div = (
    <div>
        {Header}
        {Header2({ name: 'frank' })}
        <Header2 name='jack' />
        <p>
            <span>hi</span>
        </p>
        <Bottom />
        <Bottom2 />
    </div>
)

console.log(div)
ReactDOM.render(div, document.getElementById('root'))