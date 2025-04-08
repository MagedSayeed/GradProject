import QuestionAnswer from "./Q&A/QA";

export default function FAQ() {
  return (
    <>
      <div className="FAQ-Section py-5">
        <div className="container">
          <div className="title m-auto text-center">
            <h1>Frequently Asked Questions</h1>
            <p className="section-title fs-1 fw-bold">Still Have Questions?</p>
            <p>
              We'll do our best below! And if you don't find what you're looking
              for, check out How to Play.
            </p>
          </div>
          <QuestionAnswer/>
        </div>
      </div>
    </>
  );
}
