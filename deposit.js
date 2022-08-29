function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]    = React.useState("");
  const [amount, setAmount]     = React.useState(0);
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus( label + " cannot be empty.");
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  };

  function validateNumber(field){
    if (isNaN(field)) {
      setStatus('Error: Deposit amount must be a number.');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
};

function validateNegativeNumber(field){
  if ( Math.sign(field) < 0) {
    console.log(Math.sign(field))
    setStatus('Error: Deposit amount cannot be a negative number.');
    setTimeout(() => setStatus(''),3000);
    return false;
  }
  return true;
};

  function handleCreate(){
    console.log(amount);
    if (!validate(amount, 'amount')) return;
    if (!validateNumber(amount)) return;
    if (!validateNegativeNumber(amount)) return;
    let oldAmount= Number(ctx.users[ctx.users.length-1].balance);
    console.log(oldAmount);
    let newAmount= oldAmount+Number(amount);
    ctx.users[ctx.users.length-1].balance= newAmount;
    setShow(false);
  }; 

  function clearForm(){
    setAmount(0);
    setShow(true);
  };

  return (
    <div className="container">
      <Card 
        bgcolor="success"
        header="Deposit"
        status={status}
        body={show ? (  
                <>
        Balance: $
        {JSON.stringify( ctx.users[ctx.users.length-1].balance)}<br/>
        <br/>
                Deposit Amount<br/>
                <input type="text" className="form-control" id="amount" placeholder="Deposit Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" disabled={!amount} onClick={handleCreate}>Deposit Funds</button>
                </>
              ):(
                <>
                <h5>Success! We've received your deposit.</h5>
                <button type="submit" className="btn btn-light"  onClick={clearForm}>Add Another Deposit</button>
                </>
              )}
      />
    </div>
  )
}