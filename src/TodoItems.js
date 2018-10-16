import React, {Component} from "react";


class TodoItems extends Component{

	constructor(props){
		super(props);
		this.createTasks = this.createTasks.bind(this);
		this.state = {
	        color_yellow: true
	    }
	}

	delete(key){
		this.props.delete(key);
	}

	changeColor(){
        this.setState({color_yellow: !this.state.color_yellow})
    }

	createTasks(item){
		let bgColor = this.state.color_yellow ? "white" : "yellow"
		return <li style={{backgroundColor: bgColor}} key={item.key}>{item.text} <span  onClick={this.changeColor.bind(this)}>Сделать</span> <a onClick={() => this.delete(item.key)}>Удалить</a></li>
	}

	render(){
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);
	
		return (
			<ul className="theList">
				{listItems}
			</ul>
		);
	}
}


export default TodoItems;