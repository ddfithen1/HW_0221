class LoginForm extends React.Component {

    //constructor
    //DF Added password related code to constructor
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            results: '',
        }

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    //handler for data from child component
    onEmailChange(email){
        
        //console.log("From the child: " + email);

        this.setState( () => {
                return {
                    email
                };
            }
        );

        //console.log("From the parent state: " + this.state.email);
    }

    //DF Added handler for password data
    onPasswordChange(password){

        //console.log("From the child: " + password);

        this.setState( () => {
                return {
                    password
                };
            }
        );

        //console.log("From the parent state: " + this.state.password);
    };

    onSubmit(event){

        event.preventDefault();


        //DF For the sake of having a decent looking end product, the best thing I could find to work was sending an array of strings rather than a single one.
        var results = [];

        //DF For password checking, I'm simply seeing if the length of the string is greater than or equal to eight characters. If not, an error message stating
        // the problem is added to the results array and the results array is then sent to app.js, where it is then sent to be seen by the user.
        // If the password meets the length requirements, the email and password are added to the array to be seen by the user. For the sake of readability, 
        // I had the email and password variables' pretext be added seperately.
        if (this.state.password.length <= 8) {
            var pwfail = "Password must be at least eight characters.";
            results.push(pwfail);
        }
        else {
            var result1 = "Email address is: ";;
            results.push(result1);
            var result2 = this.state.email;
            results.push(result2);
            var result3 = "Password is: ";
            results.push(result3);
            var result4 = this.state.password;
            results.push(result4);
        }

        this.setState( () => {
                return {
                    results
                };
            }
        );

        //this is also lifting state to the parent
        this.props.onFormSubmit(results);

    }


    //DF Added and set property to PasswordInput
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <EmailInput onEmailInputChange={this.onEmailChange} />
                    <PasswordInput onPasswordInputChange={this.onPasswordChange} />
                    <button type="submit" 
                            className="btn btn-primary">Submit</button>
                </form>
            </div>            
        );
    };
}