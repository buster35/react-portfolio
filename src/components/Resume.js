import React from "react";
import { Container, Row } from "react-bootstrap";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const Resume = () => {
  const docs = [{ uri: require("../assets/zach-g-resume.pdf") }];
  return (
    <Container>
      <Row>
        <DocViewer
          pluginRenderers={DocViewerRenderers}
          documents={docs}
          config={{
            header: {
              disableHeader: false,
              disableFileName: true,
              retainURLParams: false,
            },
          }}
        />
      </Row>
    </Container>
  );
};

export default Resume;
