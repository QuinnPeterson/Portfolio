import React, { useState, useEffect } from "react";
import { Container, Button, Grid } from "@mui/material"; // Import Material-UI components
// import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import { DownloadOutlined } from "@mui/icons-material";
import pdf from "../data/Quinn Peterson Resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container maxWidth="lg" className="resume-section">
      <Grid container justifyContent="center" style={{ position: "relative" }}>
        <Button
          variant="contained" // Use "contained" for a solid button
          color="primary" // Set the button color
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
          startIcon={<DownloadOutlined />} // Add download icon
        >
          Download Resume
        </Button>
      </Grid>
      <Grid container justifyContent="center" className="resume">
        <Document file={pdf} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </Grid>
    </Container>
  );
};

export default Resume;
