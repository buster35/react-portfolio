import React from "react";
import { Container, Row } from "react-bootstrap";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

function Resume() {
  const docs = [{ uri: require("./") }];

  return (
    <Container>
      <Row>
        <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
      </Row>
    </Container>
  );
}

export default Resume;
