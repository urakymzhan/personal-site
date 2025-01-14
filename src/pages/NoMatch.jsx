import React from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../components/utils/Helmet";

export default function NoMatch() {
  let location = useLocation();
  return (
    <div>
      <PageHeader title="No Page Found" />
      <h2>
        No Such Page Found for <code>{location.pathname}</code>
      </h2>
      <h1>
        {" "}
        {"<"} 404 {">"}{" "}
      </h1>
    </div>
  );
}
