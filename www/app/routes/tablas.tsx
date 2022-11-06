import React, {useEffect, useState} from "react";
import Page from "@components/page";

import styles from "~/styles/page.css";

export function links() {
  return [{rel: "stylesheet", href: styles}];
}

export default function Index() {
  const pages = [...Array(10).keys()]
  return (
    <>
      {
        pages.map((key) => {
          return <Page key={key} table={key + 1}/>
        })
      }
    </>
  );
}
