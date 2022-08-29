function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={
          {
            users:
            [ 
              {  name:'Abel',    email:'Abel@mit.edu',   password:'secret',    balance:100},
              {   name:'Kris',    email:'kd@mit.edu',     password:'testing',   balance:100},
              {   name:'Jack',    email:'jack@mit.edu',     password:'password',   balance:100}
            ]
          }
        }>              
        <Route path="/" exact component={Home} />
        <Route path="/CreateAccount/" component={CreateAccount} />
        <Route path="/login/" component={Login} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/balance/" component={Balance} />
        <Route path="/alldata/" component={AllData} />
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
