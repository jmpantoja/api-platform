import React from "react";
import { Link } from "@pankod/refine-nextjs-router";

import { TitleProps } from "@pankod/refine-core";
import {Image} from "antd";

export const Title: React.FC<TitleProps> = ({ collapsed }) => (
  <Link href="/">
    {collapsed ? (
      <Image
        src={"/refine-collapsed.svg"}
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
        src={"/refine.svg"}
        alt="Refine"
        style={{
          width: "200px",
          padding: "12px 24px",
        }}
      />
    )}
  </Link>
);
