import React from 'react';
import type {WrapperProps} from '@docusaurus/types';
import DocItemFooter from "@theme-original/DocItem/Footer";
import type DocItemFooterType from "@theme/DocItem/Footer";
import { useDoc } from "@docusaurus/theme-common/internal";
// import Comments from "@site/src/components/Comments";
import Comments from "@site/src/components/GiscusComments";

// type Props = WrapperProps<typeof FooterType>;
//
// export default function FooterWrapper(props: Props): JSX.Element {
//   return (
//     <>
//       <Footer {...props} />
//       {comments && <Comments />}
//     </>
//   );
// }

type Props = WrapperProps<typeof DocItemFooterType>;

export default function DocItemFooterWrapper(props: Props): JSX.Element {
  const { metadata } = useDoc();
  const { comments = true } = metadata.frontMatter;

  return (
    <>
      <DocItemFooter {...props} />
      {comments && <Comments />}
    </>
  );
}