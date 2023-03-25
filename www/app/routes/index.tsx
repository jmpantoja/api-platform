import React, {useEffect, useState} from "react";

export default function Index() {
  const [data, setData] = useState('Boris');


  useEffect(() => {
    const url = new URL('https://www.prueba.local/.well-known/mercure?topic=kokoloco')
    const eventSource = new EventSource(url)
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setData(data.name)
    }
  }, [])

  return (
    <div>
      <h1>Hola {data}</h1>

      <code style={{fontSize: '1.1em'}}>docker-compose exec php bin/console app:mercure &lt;name&gt;</code>

    </div>
  );
}
