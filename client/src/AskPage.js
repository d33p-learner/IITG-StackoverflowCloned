import React from "react";
import styled from "styled-components";
import Lower_header from "./Lower_header";
import BlueButton from "./BlueButton";
import Input from "./Input";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useState } from "react";

const Container = styled.div`
  padding: 30px 20px;
`;

const QuestionBodyTextarea = styled.textarea`
  background: none;
  border: 1px solid #777;
  border-radius: 3px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  min-height: 200px;
  margin-bottom: 20px;
  color: #fff;
  font-family: inherit;
`;

const PreviewArea = styled.div`
  padding: 10px 20px;
  background: #444;
  border-radius: 5px;
  margin-bottom: 20px;
`;

function AskPage() {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");

  return (
    <Container>
      <Lower_header style={{ marginBottom: "20px" }}>
        Ask a public question
      </Lower_header>
      <Input
        type="text"
        value={questionTitle}
        onChange={(e) => setQuestionTitle(e.target.value)}
        placeholder="Be specific and imagine you’re asking a question to another person"
      />
      <QuestionBodyTextarea
        value={questionBody}
        onChange={(e) => setQuestionBody(e.target.value)}
        placeholder="Include all the information someone would need to answer your question"
      />
      <PreviewArea>
        <ReactMarkdown remarkPlugins={[gfm]} children={questionBody} />
      </PreviewArea>
      <BlueButton>Review your question</BlueButton>
    </Container>
  );
}

export default AskPage;
