function Home(){ 
  const ctx = React.useContext(UserContext);
  const name = ctx.users[0].name;
  const email = ctx.users[0].email;

  const greetMessage = "Home Page";
  const welcomeMessage = "Welcome to the Bank!";
  const textMessage ="We are here for all of your banking needs. You can move around using the navigation bar.";
  

  return (
    <div className="container">
      <Card 
        bgcolor="light"
        txtcolor="black"
        header={greetMessage}
        title={welcomeMessage}
        text={textMessage}
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      />  
    </div>
  );  
}
