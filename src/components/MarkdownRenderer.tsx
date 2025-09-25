import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Box } from "@chakra-ui/react";

interface MarkdownRendererProps {
  filePath: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ filePath }) => {
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    fetch(filePath)
      .then((response) => {
        console.log(response);

        return response.text();
      })
      .then((text) => setMarkdown(text))
      .then((read) => console.log(read));
  }, [filePath]);

  return (
    <Box>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </Box>
  );
};

export default MarkdownRenderer;
