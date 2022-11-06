import React, {useContext, useEffect, useState} from "react";
import AuthorSelect from "@components/input/AuthorSelect";
import axios, {Axios} from "axios";
import {API_URL} from "@constants";
import {Anchor, Select} from "antd";
import {useSelect} from "@pankod/refine-antd";


const Dashboard = () => {
  const {selectProps} = useSelect({
    resource: 'bookstore/tags'
  })

  return (
    <>
      <h1>hola</h1>
    </>
  )
}

export default React.memo(Dashboard, () => true);
