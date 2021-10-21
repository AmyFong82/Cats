import React, {Component} from 'react';
import {cats} from './data';

export default class CatList {

	catList = cats.map(cat => <Cat key={cat.id} cat={cat} />)

	render(){
		return(
				{catList}
			)
	}
}