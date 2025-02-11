import React from "react";
import ReactMarkdown from "react-markdown";

export default function Recipe(props) {
  const markdown = props.recipe;

  return (
    <>
      <section ref={props.ref}>
        {props.loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
          </div>
        )}
      </section>
      <section className="suggested-recipe-container">
        {markdown && <h3>Here is the AI response:</h3>}
        <ReactMarkdown children={markdown} />
      </section>
    </>
  );
}
