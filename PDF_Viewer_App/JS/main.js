const url = '../docs/pdf.pdf'; //url of pdf

// Global variables
let pdfDoc = null,
  pageNum = 1, //start form first page
  pageIsRendering = false, //
  pageNumIsPending = null;

const scale = 1.5,
  canvas = document.querySelector('#pdf-render'), //Fetching the pdf
  ctx = canvas.getContext('2d'); // putting the pdf in the canvas

// Render the page
const renderPage = num => {};

// Get Document(using pdfjsLib object of pdf.js API)
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
  pdfDoc = pdfDoc_;
  console.log(pdfDoc);
});

// Error: fetch_stream.js:110 GET http://127.0.0.1:5500/docs/pdf.pdf 404 (Not Found)
// PDFFetchStreamReader @ fetch_stream.js:110
// getFullReader @ fetch_stream.js:53
// (anonymous) @ api.js:1878
// (anonymous) @ message_handler.js:317
// _createStreamSink @ message_handler.js:316
// MessageHandler._onComObjOnMessage @ message_handler.js:116
// index.html:1 Uncaught (in promise) MissingPDFException {name: "MissingPDFException", message: "Missing PDF "http://127.0.0.1:5500/docs/pdf.pdf"."}
