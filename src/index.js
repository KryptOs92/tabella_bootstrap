import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';  





class Tab extends React.Component{

    generateDescriptionList(){
        const descriptionList= this.state.raws.map((rawValues,rawNumber) =>{
            console.log(this.state.showValue[rawNumber])
            if(this.state.showValue[rawNumber] == true)
                
                return <li key={rawNumber}> Descrizione Riga + {rawNumber} </li>;
        });
        return descriptionList;
    }

    Riga(number,firstName,lastName,handle){
        this.number = number;
        this.firstName = firstName;
        this.lastName = lastName;
        this.handle= handle;
    }

    constructor(props) {
        super(props);
        this.state = {
            raws: [new this.Riga(1,"Mark","Otto","@mdo"),
                   new this.Riga(2,"Jacob","Thornton","@fat"),
                   new this.Riga(3,"Larry","The Bird","@twitter")],
            showValue: [false,false,false]
                     };
      }
      refreshShow(nRaw){
       var x = this.state.showValue;
        x[nRaw] = true;
        this.setState({showValue: x});
    }
    

    render(){
      const descriptionList = this.generateDescriptionList();
        return(
            <div >
        <table className="table table-bordered table-dark">
  <thead className="p-3 mb-2 bg-danger text-white">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Buttons</th>
    </tr>
  </thead>
  <tbody >
      <Raw  rawValues= {this.state.raws[0]} onClick= {i => this.refreshShow(0)}/>
      <Raw  rawValues= {this.state.raws[1]} onClick= {i => this.refreshShow(1)}/>
      <Raw  rawValues= {this.state.raws[2]} onClick= {i => this.refreshShow(2)}/>
  </tbody>
  
</table>  
<ol> {descriptionList}</ol>
</div>
        );
    }
}

class Raw extends React.Component{
    render(){
        return(
            <tr className = "Riga1">
                <th scope="row">{this.props.rawValues.number}</th>
                <td>{this.props.rawValues.firstName}</td>
                <td>{this.props.rawValues.lastName}</td>
                <td>{this.props.rawValues.handle}</td>
                <td><button type="button" className="btn btn-primary" onClick={() =>this.props.onClick(this.props.rawValues.number) }>GetDesc</button></td>
            </tr>
        );
    }
}

ReactDOM.render(<Tab />, document.getElementById('root'));
registerServiceWorker();
