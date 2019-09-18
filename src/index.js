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