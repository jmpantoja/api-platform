import React from "react";

import {TitleProps} from "@refinedev/core";
import {Image} from "antd";
import Link from "next/link";

export const Title: React.FC<TitleProps> = ({collapsed}) => (
  <Link href="/">
    {collapsed ? (
      <Image
        src={"/admin/images/refine-collapsed.svg"}
        alt="Refine"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 24px",
        }}
      />
    ) : (
      <Image
        src={"/admin/images/refine.svg"}
        alt="Refine"
        style={{
          width: "200px",
          padding: "12px 24px",
        }}
      />
    )}
  </Link>
);
