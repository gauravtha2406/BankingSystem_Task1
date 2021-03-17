import React from "react";

const Transfer = ({ sender, receiver, customers, setsender, setreceiver ,inputbalance,setinputbalance,transfer ,loading }) => {
  return (
    <>
    <div className="transfer-body">
      <div className="container transfer">
        <div className="transfer-card">
          <label htmlFor="sender" className ="from">From</label>
          <select
            name="sender"
            id="sender"
            value={sender}
            onChange={(e) => {
              setsender(e.target.value);
            }}
          >
            <option value=""></option>
            {customers.map((value, key) => {
              console.log(value);
              return (
                <option
                  className="option-value"
                  value={value.Name}
                  id={value.id}
                  key={key}
                >
                  {value.Name}
                </option>
              );
            })}
          </select>
          <label htmlFor="receiver" className="to">To</label>
          <select
            name="receiver"
            id="receiver"
            value={receiver}
            onChange={(e) => {
            setreceiver(e.target.value);
            }}
            required
          >
            <option value=""></option>
            {customers.map((val, key) => {
              return val.Name === sender ? (
               ""
              ) : (
                <option id={val.id} value={val.Name} key={key}>
                  {val.Name}
                </option>
              );
            })}
          </select>

          <label htmlFor="balance" className ="transfer-amount">Transfer Amount</label>
          <input placeholder="&#8377;"  value={inputbalance} onChange={(e)=>{setinputbalance(e.target.value)}}/>
             <button  className="btn btn-primary my-2" type="button" onClick={transfer} >Send</button>    

        </div>
      </div>
      </div>
    </>
  );
};

export default Transfer;
