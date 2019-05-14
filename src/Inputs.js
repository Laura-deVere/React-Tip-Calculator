import React from 'react';
import { Component } from 'react';

const tipPercentages = ['15%', '18%', '20%' , '25%'];

// const Inputs = (props) => {

// 	const handleTipSelect = (i) => {

// 	}
// 	return (
// 		<div className="inputs flex-row">
// 			<div className="bill-total flex-col">
// 				<span>Bill Total</span>
// 				{/*<div>{props.billTotal}</div>*/}
// 				<input disabled="disabled" type="text" defaultValue={props.billTotal} />
// 			</div>
// 			<div className="guest-count flex-row">
// 				<div onClick={() => props.getPartyCount('minus')}>
// 					<i className="icon ion-md-remove"></i>
// 				</div>
// 				<div>
// 					<span>{props.partyCount} </span>
// 					<i className="icon ion-md-person"></i>
// 				</div>
// 				<div onClick={() => props.getPartyCount('add')}>
// 					<i className="icon ion-md-add"></i>
// 				</div>
// 			</div>
// 			<div className="tip-percent flex-col">
// 				<ul className="flex-row">
// 					<li onClick={() => props.getTipPercentage(0)}>15%</li>
// 					<li onClick={() => props.getTipPercentage(1)}>18%</li>
// 					<li onClick={() => props.getTipPercentage(2)}>20%</li>
// 					<li onClick={() => props.getTipPercentage(3)}>25%</li>
// 				</ul>
// 			</div>
// 			<div className="tip-total flex-col">
// 				<span>Tip Total </span>
// 				<span>$ {props.tipTotal.toFixed(2)}</span>	
// 			</div>	
// 		</div>
// 	);
// }


class Inputs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 2,
			keyInput: ''
		};
	}

	handleStyleChange(i) {
		if(this.state.active === i) {
			return 'selected-tipPerc';
		} else {
			return '';
		}
	}

	handleTipSelect(i) {
		this.setState({ active: i });
		this.props.getTipPercentage(i)
	}

	handleKeyPress(e) {
		// let input = String.fromCharCode(e.charCode);
		// const regex = /^[0-9/\.]+$/;
		// if (regex.test(input)) {
		// 	this.props.updateBillTotal(input);
		// console.log(input);
		// }
	}

	render() {
		return (
			<div className="inputs flex-row">
				<div className="bill-total flex-col">
					<span>Bill Total</span>
					<input type="text" defaultValue={this.props.billTotal} onKeyPress={(e) => this.handleKeyPress(e)} />
				</div>
				<div className="guest-count flex-row">
					<div onClick={() => this.props.getPartyCount('minus')}>
						<i className="icon ion-md-remove"></i>
					</div>
					<div>
						<span>{this.props.partyCount} </span>
						<i className="icon ion-md-person"></i>
					</div>
					<div onClick={() => this.props.getPartyCount('add')}>
						<i className="icon ion-md-add"></i>
					</div>
				</div>
				<div className="tip-percent flex-col">
					<ul>
						{
							tipPercentages.map((el, i) => (
								<li className={this.handleStyleChange(i)} key={el} onClick={() => this.handleTipSelect(i)}>
									{el}
								</li>
							))
						}
					</ul>
				</div>
				<div className="tip-total flex-col">
					<span>Tip Total </span>
					<span>$ {this.props.tipTotal.toFixed(2)}</span>	
				</div>	
			</div>
		)

	}
}
export default Inputs;