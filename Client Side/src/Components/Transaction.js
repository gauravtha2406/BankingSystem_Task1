import React from 'react'

const Transaction = ({transcustomer}) => {
    return (
      <>
        <section id="header" className=" transaction-section d-flex align-items-center my-4">
          <div className="container">
           
            <div className="table-section ">
              <table class="table table-dark table-hover align-table">
                <thead>
                  <tr>
                  <th>ID</th>
                   <th>Sender</th>
                   <th>Receiver</th>
                   <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  
                      
                      {transcustomer.map((value,key)=>{
                          return (
                            <tr key={key}>
                               <td>{value.id}</td>  
                              <td>{value.Sender}</td>
                              <td>{value.Receiver}</td>
                              <td>{value.Amount}</td>
                            </tr>
                          );
                      })}
                        
                      
                    
        
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </>
    );
}

export default Transaction
