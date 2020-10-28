import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import NewsBox from "./components/NewsBox";

function App() {
  return(
    <body>
    <Header />

    <MainContent />
      <NewsBox 
        details={{title: "Heathrow Airport", imgUrl:"terminal.jpg", description: "Terminal 6 is almost completed and ready for the passengers to use."}}
      />
      <NewsBox 
        details={{title: "British Government", imgUrl:"terminal.jpg", description: "The parliament has now approved the financial report of this year"}}
      />
      <NewsBox 
        details={{title: "Premier League", imgUrl:"terminal.jpg", description: "Derby between Spurs and West Ham: 3-3"}}
      />
      <NewsBox 
        details={{title: "Premier League", imgUrl:"terminal.jpg", description: "Derby between Spurs and West Ham: 3-3"}}
      />
      <NewsBox 
        details={{title: "Premier League", imgUrl:"terminal.jpg", description: "Derby between Spurs and West Ham: 3-3"}}
      />
      <NewsBox 
        details={{title: "Premier League", imgUrl:"terminal.jpg", description: "Derby between Spurs and West Ham: 3-3"}}
      />
    <Footer />
    </body>
  )
}


export default App;
