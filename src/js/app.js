class App extends React.Component {

    //constructor
    constructor(props){
        super(props);

        this.state = {
            formresults: ''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(results){

        const formresults = results;
        
        this.setState( () => {
                return {
                    formresults
                };
            }
        );
    }

    //DF Since formresults = results, and results is an array of all of our stuff, we can access things as we need them now. 
    // formresults[0] and formresults[2] are my "pretexts" (ie. "Email address is: "), so, for the sake of readability, I wanted to make them bold.
    // Basic HTML formatting, for the most part.
    //
    // I hope I can eventually find a better, cleaner way to handle this type of thing. I'm not a huge fan of this array setup, even though it works.
    render() {
        return (
            <div className="container">
                <LoginForm onFormSubmit={this.handleFormSubmit} />
                <div>
                    <b>{this.state.formresults[0]}</b>
                    {this.state.formresults[1]}
                    <br />
                    <b>{this.state.formresults[2]}</b>
                    {this.state.formresults[3]}
                </div>
            </div>
        );
    };
}

var root = document.getElementById('root');
ReactDOM.render(<App />, root);