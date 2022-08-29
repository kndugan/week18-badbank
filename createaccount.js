function CreateAccount(){
  const [show, setShow]         = React.useState(true); 
  const [status, setStatus]     = React.useState(''); 
  const [name, setName]         = React.useState(''); 
  const [email, setEmail]       = React.useState(''); 
  const [password, setPassword] = React.useState('');
  // const [errors, setError]      = React.useState({nameError:'',emailError:'',passwordError:''}); 
  const ctx = React.useContext(UserContext);

  // function validate() {
  //   if(!name) setError({...errors, nameError: 'Please enter your name'})
  // } 
  
  function validate(field, label){
    if (!field) {
      setStatus('Error: Please enter a valid ' + label);
      setTimeout(() => setStatus(''), 5000);
      return false; 
    } 
    return true; 
    
  }

  function validatePassword(field, label) {
    if (password.length < 8) {
      setStatus("Error: Password length needs to be at least 8 characters")
      setTimeout(() => setStatus(''), 5000);
      return false; 
    } 
  return true; 
  };

  function handleCreate(){
    console.log(name,email,password); 
    if (!validate(name,     'name'))      return; 
    if (!validate(email,    'email'))     return; 
    if (!validate(password, 'password'))  return; 
    if (!validatePassword(password, 'password'))  return; 
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <div className="container">
      <Card 
      bgcolor="light"
      txtcolor="black"
      header="Create Account"

      status={status}
      body={show ? (
        <>
        <div>To create an account, all fields must be filled and password must be at least 8 characters.</div><br/>
        <div>Name</div>
        <input 
          type="input" 
          className="form-control" 
          id="name"  
          placeholder="Enter Name" 
          value={name} 
          onChange={e => setName(e.currentTarget.value)} /><br/>
        {/* <div style={{color: 'red'}}>{errors.nameError}</div><br/> */}
        <div>Email Address</div>
        <input 
          type="email" 
          className="form-control" 
          id="email" 
          placeholder="Enter Email" 
          value={email} 
          onChange={e => setEmail(e.currentTarget.value)} /><br/>
        {/* <div style={{color: 'red'}}>{errors.emailError}</div><br/> */}

        <div>Password</div>
        <input 
          type="password" 
          className="form-control" 
          id="password" 
          placeholder="Enter Password" 
          value={password} 
          onChange={e => setPassword(e.currentTarget.value)} /><br/>
        {/* <div style={{color: 'red'}}>{validatePassword}</div><br/> */}

        <button type="submit" className="btn btn-dark" disabled = {!name || !email || !password} onClick={handleCreate}>Create Account</button>
        
        </>
      
      ) : (
        <>
        <h5>You've Successfully Created Your Account!</h5>
        <button type="submit" className="btn btn-dark" onClick={clearForm}>Add Another Account</button>
        </>
      )}
      />
    </div>
  );
}

// function CreateAccount(){
//   const ctx = React.useContext(UserContext);

//   function handle(data){
//     ctx.users.push({name:data.name,email:data.email,password:data.password,balance:100});
//     return true;
//   }

//   return (
//     <BankForm
//       bgcolor="light"
//       txtcolor="black"
//       handle={handle}
//       hideAmount={true}
//       successButton="Add Another Account"
//     />
//   )
// }