import dompurify from 'isomorphic-dompurify';
import dompurify1 from 'dompurify';
import { Container, Content, PageHeader } from "@inrupt/prism-react-components";
import React from "react";
import { useRouter } from "next/router";
  const router = useRouter();
  const bodyRef = React.useRef();



const SafeCardContent = ({html}) => {
  // ok: react-nextjs-router-create-element-dangerouslysetinnerhtml
  return <div dangerouslySetInnerHTML={{__html: dompurify1.sanitize(router.query.foo)}} />
}

const CardContent = ({html}) => {
  // ruleid: react-nextjs-router-create-element-dangerouslysetinnerhtml
  return <div dangerouslySetInnerHTML={{__html: router.query.foo}} />
}

const CCardContent = ({html}) => {
  // ruleid: react-nextjs-router-create-element-dangerouslysetinnerhtml
  return <div dangerouslySetInnerHTML={{__html: useRouter().query.foo}} />
}


public function renderText() {
    const { i18n, text, attachments } = this.props;

    if (text) {
      return (
        <div className="text">
          // ok: react-nextjs-router-create-element-dangerouslysetinnerhtml
          <div dangerouslySetInnerHTML={{__html: attachments}}></div>
        </div>
      );
    }
}
