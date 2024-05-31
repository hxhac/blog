import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function Comments(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <div>
      <Giscus
        id="comments"
        repo="giscus/giscus"
        repoId="MDEwOlJlcG9zaXRvcnkzNTE5NTgwNTM="
        category="General"
        categoryId="MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyNzk2NTc1"
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === "dark" ? "dark_tritanopia" : "light_tritanopia"}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}