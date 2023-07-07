import React from "react";
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: '',
        }
        this.valueChanges = this.valueChanges.bind(this)
        this.emailChanges = this.emailChanges.bind(this)
        this.paswordChanges = this.paswordChanges.bind(this)
        this.submitData = this.submitData.bind(this)
    }
    valueChanges(event){
        this.setState({value: event.target.value}) 
        document.querySelector('.name').innerHTML = event.target.value
        // document.write('event.target.value')
      console.log(event.target.value)
    }
    emailChanges(event) {
        this.setState({value: event.target.email})
        document.querySelector('.email').innerHTML = event.target.value
    }
    paswordChanges(event){
        this.setState({value: event.target.pasword})
        document.querySelector('.pasword').innerHTML = event.target.value
    }
    submitData(event){
        event.preventDefault()
        console.log(this.state.value)
    }
    render(){
        return(
            <>
            <form onSubmit={this.submitData}>
                <div className="box-left">
              <div>  <input type="text" placeholder="full name" value={this.state.value} onChange={this.valueChanges}/></div>
              <div> <input type="email" placeholder="Email" value={this.state.email} onChange={this.emailChanges}/></div>
              <div>  <input type="pasword" placeholder="pasword" value={this.state.pasword} onChange={this.paswordChanges}/></div>
              <div>  <input type="submit"/></div>
                </div>
                <div className="box-right">
                <div className="name"></div>
                <div className="email"></div>
                <div className="pasword"></div>
                
                </div>
            </form>
            </>
        )
    }
}

export default Form
































