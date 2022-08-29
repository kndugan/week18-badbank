function Balance(){
  const [show, setShow]        = React.useState(true); 
  const [status, setStatus]    = React.useState(''); 
  const [balance, setBalance]  = React.useState('100'); 

  const balanceMessage = "Your Account Balance is: $" + balance;
  const ctx = React.useContext(UserContext);
  return (
    <div className="container">
        <Card 
        bgcolor="info"
        txtcolor="black"
        header="Balance"
        body={balanceMessage}
        />
    </div>
  )
}
