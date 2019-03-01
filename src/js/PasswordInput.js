class PasswordInput extends React.Component {

    //constructor
    //DF Added code to constructor
    constructor(props){
        super(props);

        this.state = {
            password: ''
        }

        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    //DF Added function to handle changes. Copy paste of onEmailChange, essentially
    onPasswordChange(event) {
        var password = event.target.value;

        //this is lifting the state value to the parent
        this.props.onPasswordInputChange(password);

        this.setState( () => {
                return {
                    password
                }
            }
        );
    };

    //DF Added onChange and value properties to password input. 
    render() {
        return (
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="Password" 
                    onChange={this.onPasswordChange} 
                    placeholder="Password" 
                    value={this.state.password} />
            </div>
        );
    };
}
