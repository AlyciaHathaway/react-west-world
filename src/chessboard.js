import React from 'react'
import './style.css'

const Cell = function (props) {
    return (
        <div className="cell" onClick={props.onClick}>
            {props.text}
        </div>
    )
}

const Chessboard = function() {
    const [cells, setCells] = React.useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ])
    const [finished, setFinished] = React.useState(false)
    const [n, setN] = React.useState(0)
    const tell = cells => {
        for (let i = 0; i < 3; i++) {
            if (
                cells[i][0] === cells[i][1] &&
                cells[i][1] === cells[i][2] &&
                cells[i][0] !== null
            ) {
                setFinished(true)
                break
            }
        }
        for (let i = 0; i < 3; i++) {
            if (
                cells[0][i] === cells[1][i] &&
                cells[1][i] === cells[2][i] &&
                cells[0][i] !== null
            ) {
                setFinished(true)
                break
            }
        }
        if (
            cells[0][0] === cells[1][1] &&
            cells[1][1] === cells[2][2] &&
            cells[0][0] !== null
        ) {
            setFinished(true)
        }
        if (
            cells[0][2] === cells[1][1] &&
            cells[1][1] === cells[2][0] &&
            cells[0][2] !== null
        ) {
            setFinished(true)
        }
    }
    const onClickCell = (row, col) => {
        // 点击次数
        setN(n + 1)
        // 改变 cells
        const copy = JSON.parse(JSON.stringify(cells))
        copy[row][col] = n % 2 === 0 ? 'x' : 'o'
        setCells(copy)
        // 判断谁赢
        tell(copy)
    }
    return (
        <div>
            <div>第{n}次点击</div>
            {cells.map((items, row) => (
                <div className="row">
                    {items.map((item, col) => (
                        <div className="col">
                            <Cell
                                text={item}
                                onClick={() => onClickCell(row, col)}
                            />
                        </div>
                    ))}
                </div>
            ))}
            {finished && <div className="game-over">游戏结束</div>}
        </div>
    )
}

export { Chessboard }