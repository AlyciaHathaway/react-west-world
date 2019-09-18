const div = (
    createElement('div',
        createElement('p',
            createElement('span', 'hi')))
)
// 如果发明一种语法，用户写 div2，我翻译成 div
// const div2 = (
//     <div>
//         <p>
//             <span>hi</span>
//         </p>
//     </div>
// )

document.body.appendChild(div)

function createElement(tagName, children) {
    const element = document.createElement(tagName)
    if (children) {
        if (typeof children === 'string') {
            let childrenElement = document.createTextNode(children)
            element.appendChild(childrenElement)
        } else {
            element.appendChild(children)
        }
    }
    return element
}


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

const div3 = (
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

console.log(div3)
ReactDOM.render(div3, document.getElementById('root'))