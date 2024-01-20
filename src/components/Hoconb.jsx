import React from 'react';
import './ho_sty.css'; // Import the CSS file

const Hoconb = () => {
  return (
    <div className="horizontal-containerb">
      <h1>My Publications:</h1>
      <h2>Enhancing Chatbot Interaction with Emotion Recognition: Emobot  (CIS-2023)</h2>
      <p>
• Built a novel chatbot using Langchain framework, Streamlit and integrated it with facial emotion detector that uses
Resnet50 to provide emotional intelligence .</p>
<h2>Enhancing Telugu News Understanding:Comparative Study of ML Algorithms for Category Prediction (ACL-2023)</h2>
<p>• Performed a comparative study on ML algorithms like Naive Bayes, SVM, Random Forest, KNN on category
classification using features extracted by N-gram, tf-idf, Word2vecCBOW, Word2vecSkipGram on news article </p>
      
    </div>
  );
};

export default Hoconb;
