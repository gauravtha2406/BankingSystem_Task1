import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Views from "./Components/Views";
import Transfer from "./Components/Transfer";
import Transaction from "./Components/Transaction";
import Contact from "./Components/Contact";

function App() {
  const [customer, setcustomer] = useState([]);
  const [loading, setloading] = useState(false);
  const [head, sethead] = useState([]);
  const [sender, setsender] = useState("");
  const [receiver, setreceiver] = useState("");
  const [inputbalance, setinputbalance] = useState("");

  //transaction History states
  const [transcustomer, settranscustomer] = useState([]);

  let flag = true;
  let sender_balance = 0;

  const getcustomers = () => {
    Axios.get("http://localhost:9000/customers").then((response) => {
      console.log(response);
      setcustomer(response.data);
      sethead(Object.keys(response.data[0]));
      // loadingState();
    });
  };

  const transfer = () => {
    setloading(true);
    console.log(sender);
    console.log(receiver);
    console.log(inputbalance);
    if (sender === "" || receiver === "") {
      flag = false;
      setloading(false);
      setsender("");
      setreceiver("");
      return alert("Please Enter all Details !");
    }

    if (inputbalance === "") {
      flag = false;
      setloading(false);
      setinputbalance("");
      return alert("Enter the balance !");
    }

    for (const val of customer) {
      if (val.Name === sender) {
        sender_balance = val.Balance;
      }
    }
    if (sender_balance < inputbalance) {
      flag = false;
      setloading(false);
      setsender("");
      setreceiver("");
      setinputbalance("");
      return alert("NOT Enough Balance");
    }

    if (flag === true) {
      // For Transaction History

      Axios.post("http://localhost:9000/transaction", {
        sender: sender,
        receiver: receiver,
        inputbalance: inputbalance,
      })
        .then((response) => {
          console.log(response);
          settranscustomer(response.data);
        })
        .catch((err) => {
          console.log(err);
        });

      Axios.put("http://localhost:9000/update", {
        inputbalance: inputbalance,
        receiver: receiver,
        sender: sender,
      }).then((response) => {
        setcustomer(
          customer.map((val) => {
            return val.Name === receiver
              ? {
                  id: val.id,
                  Name: val.Name,
                  Email: val.Email,
                  Balance: parseInt(inputbalance) + parseInt(val.Balance),
                }
              : val.Name === sender
              ? {
                  id: val.id,
                  Name: val.Name,
                  Email: val.Email,
                  Balance: parseInt(val.Balance) - parseInt(inputbalance),
                }
              : val;
          })
        );

        alert("Successful Transaction");
        setloading(false);
        setsender("");
        setreceiver("");
        setinputbalance("");
      });
    }
  };

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/views">
            <Views
              getcustomers={getcustomers}
              customers={customer}
              head={head}
            />
          </Route>
          <Route exact path="/transfer">
            <Transfer
              sender={sender}
              receiver={receiver}
              setsender={setsender}
              setreceiver={setreceiver}
              customers={customer}
              balance={inputbalance}
              setinputbalance={setinputbalance}
              transfer={transfer}
              loading={loading}
            />
          </Route>
          <Route exact path="/transaction">
            <Transaction transcustomer={transcustomer} />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
