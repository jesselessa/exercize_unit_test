//-------------- EXPRESS ----------------------//
const express = require("express");
const app = express();
//---------------- PORT ----------------------//
const port = 8000;

//--------------- START SERVER -----------------//
app.listen(port, () => {
  console.log(`Server listening at : http://localhost${port}`);
});
