import React, { Component, PropTypes } from 'react';

import { formatBlockNumber, formatCoins, formatEth } from '../format';

export default class Status extends Component {
  static propTypes = {
    address: PropTypes.string,
    gavBalance: PropTypes.object,
    blockNumber: PropTypes.object,
    totalSupply: PropTypes.object,
    remaining: PropTypes.object,
    price: PropTypes.object,
    children: PropTypes.node
  }

  render () {
    if (!this.props.totalSupply) {
      return null;
    }

    const { blockNumber, gavBalance, totalSupply, remaining, price } = this.props;

    return (
      <div className='status'>
        <div className='item'>
          <div className='heading'>&nbsp;</div>
          <div className='hero'>
            { formatCoins(remaining, -1) }
          </div>
          <div className='byline'>
            available for { formatEth(price) }ΞTH
          </div>
        </div>
        <div className='item'>
          <div className='heading'>GAVcoin</div>
          <div className='hero'>
            { formatCoins(totalSupply, -1) }
          </div>
          <div className='byline'>
            total at { formatBlockNumber(blockNumber) }
          </div>
        </div>
        <div className='item'>
          <div className='heading'>&nbsp;</div>
          <div className='hero'>
            { formatCoins(gavBalance, -1) }
          </div>
          <div className='byline'>
            coin balance
          </div>
        </div>
        { this.props.children }
      </div>
    );
  }
}
