function Login(){
  const [show, setShow]         = React.useState(true); 
  const [status, setStatus]     = React.useState(''); 
  const [email, setEmail]       = React.useState(''); 
  const [password, setPassword] = React.useState(''); 
  const ctx = React.useContext(UserContext);

  function validate(field, label){
    if (!field) {
      setStatus('Error: Please enter ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false; 
    } 
    return true; 
  };

  function handleCreate(){
    console.log(email,password); 
    if (!validate(email,    'Email'))     return; 
    if (!validate(password, 'Password'))  return; 
    ctx.users.push({email,password});
    setShow(false);
  };

  function clearForm() {
    setEmail('');
    setPassword('');
    setShow(true);
  };

  return (
    <div className="container">
    <Card 
    bgcolor="warning"
    txtcolor="black"
    header="Login"
    status={status}
    body={show ? (
      <>
      Email Address<br/>
      <input type="email" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
      
      Password<br/>
      <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
      <button type="submit" className="btn btn-dark" onClick={handleCreate}>Login</button>
      </>
    ) : (
      <>
      <h5>Login Successful</h5>
      </>
    )}
    />
    </div>
  );
}