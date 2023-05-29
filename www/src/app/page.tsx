'use client'

import Image from 'next/image'
import styles from './page.module.css'
import {Card, Button} from "antd";

export default function Home() {
  return (
    <main className={styles.main}>
      <Card size="default" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <Button type="primary">Primary Button</Button>
      </Card>
    </main>
  )
}
