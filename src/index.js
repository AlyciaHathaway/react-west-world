import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const Cell = function (props) {
    return (
        <div className="cell" onClick={props.onClick}>{props.text}</div>
    )
}

const Chessboard = function () {
    const [cells, setCells] = React.useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ])
    const [n, setN] = React.useState(0)
    const tell = () => {

    }
    const onClickCell = (row, col) => {
        // 点击次数
        setN(n + 1)
        // 改变 cells
        const copy = JSON.parse(JSON.stringify(cells))
        copy[row][col] = n % 2 === 0 ? 'x' : 'o'
        setCells(copy)
        // 判断谁赢
        tell()
    }
    return (
        <div>
            <div>第{n}次点击</div>
            {cells.map((items, row) => <div className="row">
                {items.map((item, col) => <div className="col">
                    <Cell text={item} onClick={() => onClickCell(row, col)} />
                </div>)}
            </div>)}
        </div>
    )
}

ReactDOM.render(<div>
    <Chessboard />
</div>, document.getElementById('root'))