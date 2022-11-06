import cx from 'classnames';

type CardProps = {
  table: number,
  card: number
}

export default ({table, card}: CardProps) => {
  const columns = [...Array(10).keys()]
  const rows = [...Array(table).keys()]


  return <div className="card">
    <div className="card-background">
      {table * card}
    </div>

    <div className="card-grid">
      {
        rows.map((row) => {
          return columns.map((column) => {

            const klass = cx('cell', {
                filled: (row < table) && (column < card)
              }
            )

            return <div className={klass} key={`${row}x${column}`}>
              &nbsp;
            </div>
          })
        })
      }

    </div>

  </div>
}
