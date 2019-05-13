import React from 'react';

const Inputs = (props) => {
	return (
		<div className="inputs flex-row">
			<div className="bill-total flex-col">
				<span>Bill Total</span>
				{/*<div>{props.billTotal}</div>*/}
				<input disabled="disabled" type="text" defaultValue={props.billTotal} />
			</div>
			<div className="guest-count flex-row">
				<div onClick={() => props.getPartyCount('minus')}>
					<i className="icon ion-md-remove"></i>
				</div>
				<div>
					<span>{props.partyCount} </span>
					<i className="icon ion-md-person"></i>
				</div>
				<div onClick={() => props.getPartyCount('add')}>
					<i className="icon ion-md-add"></i>
				</div>
			</div>
			<div className="tip-percent flex-col">
				TIP %
				<ul className="flex-row">
					<li onClick={() => props.getTipPercentage(0)}>15%</li>
					<li onClick={() => props.getTipPercentage(1)}>18%</li>
					<li onClick={() => props.getTipPercentage(2)}>20%</li>
					<li onClick={() => props.getTipPercentage(3)}>25%</li>
				</ul>
			</div>
			<div className="tip-total flex-col">
				<span>Tip Total </span>
				<span>$ {props.tipTotal.toFixed(2)}</span>	
			</div>	
		</div>
	);
}

export default Inputs;