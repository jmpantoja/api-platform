import Card from "@components/card";

type PageProps = {
  table: number
}

export default ({table}: PageProps) => {
  const cards = [...Array(10).keys()]

  return <div className="page">
    {
      cards.map((key) => {
        return <Card table={table} card={key + 1} key={key}/>
      })
    }
  </div>
}
