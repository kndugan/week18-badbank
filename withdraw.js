function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]    = React.useState("");
  const [amount, setAmount]     = React.useState(0);
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  };

  function validateWithdrawalAmount(field){
    let oldAmount= Number(ctx.users[ctx.users.length-1].balance);
    if (Number(field) > oldAmount)  {
      setStatus('Account Overdraft Error: You cannot withdraw an amount greater than your balance.');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
};

function validateNumber(field){
  if (isNaN(field)) {
    setStatus('Error: Withdrawal amount must be a number.');
    setTimeout(() => setStatus(''),3000);
    return false;
  }
  return true;
};

  function handleCreate(){
    console.log(amount);
    if (!validate(amount, 'amount')) return;
    if(!validateNumber(amount)) return;
    if(!validateWithdrawalAmount(amount)) return;
    let oldAmount= Number(ctx.users[ctx.users.length-1].balance);
    console.log(oldAmount);
    let newAmount= oldAmount-Number(amount);
    if (newAmount<0) return;
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
        bgcolor="danger"
        header="Withdraw"
        status={status}
        body={show ? (  
                <>
          Balance: $
          {JSON.stringify( ctx.users[ctx.users.length-1].balance)}<br/>
        <br/>
                Withdrawal Amount<br/>
                <input  className="form-control" id="amount" placeholder="Withdraw Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" disabled ={!amount} onClick={handleCreate}>Withdraw Funds</button>
                </>
              ):(
                <>
                <h5>Success! Your withdrawal has been processed.</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Submit Another Withdrawal</button>
                </>
              )}
      />
    </div>
  )
}