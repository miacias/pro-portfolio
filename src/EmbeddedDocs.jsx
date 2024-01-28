import { useEffect } from 'react';

const EmbeddedDocuments = () => {
  useEffect(() => {
      // Function to handle the CORS request and replace iframes with document content
      const handleEmbeddedDocuments = () => {
          // Get all iframes that were parsed before this tag
          const iframes = document.getElementsByTagName("iframe");

          for (let i = 0; i < iframes.length; i++) {
              const url = iframes[i].getAttribute("src");
              if (url && url.startsWith("https://docs.google.com/document/d/")) {
                  // create div and replace iframe
                  const d = document.createElement('div');
                  d.classList.add("embedded-doc"); // optional
                  iframes[i].parentElement.replaceChild(d, iframes[i]);

                  // CORS request
                  const xhr = new XMLHttpRequest();
                  xhr.open('GET', url, true);
                  xhr.onload = function() {
                      // display response
                      d.innerHTML = xhr.responseText;
                  };
                  xhr.send();
              }
          }
      };

      // Call the function once when the component mounts
      handleEmbeddedDocuments();

      // Optionally, you may add cleanup code if necessary
      // For example, if you want to remove the event listener
      // return () => {
      //     cleanup code here...
      // };
  }, []); // Empty dependency array ensures the effect runs only once after the component mounts

  // Render a placeholder element where the embedded documents will be replaced
  return <div id="embedded-docs-placeholder"></div>;
};

export default EmbeddedDocuments;
