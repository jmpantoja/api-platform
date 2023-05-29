import styles from '../page.module.css'
import {backend} from '@/backend'
import {ITag} from "@/model";

export default async function PlayerPage() {
  const {type, data} = await backend<ITag>({
    resource: 'auth/profile'
  })

  console.log({data})

  return (
    <main className={styles.main}>
      <h1>A</h1>
      <p>pepe</p>



      {type === 'item' &&
        // <Button type={'primary'}>
        //   {data.name}
        // </Button>

        <p>{data.email}</p>
      }
    </main>
  )
}
