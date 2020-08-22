import React, { Component } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import '../styles/modalstyles.css';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ['X', 'O'],
      input1: 'X',
      input2: 'O',
      /*inputBox:[],*/
      counter: 0,
      winner: 'X',
      open: true,
      end: false,
    };
    this.inputs = [];
    this.disable = [];
    this.handleClick = this.handleClick.bind(this);
  }

  selectInputX = () => {
    this.setState((state) => ({
      input1: 'X',
      input2: 'O',
      open: false,
    }));
  };

  selectInputO = () => {
    this.setState((state) => ({
      input1: 'O',
      input2: 'X',
      open: false,
    }));
  };

  handleClick(e) {
    if (this.state.counter % 2 === 0) {
      /*this.setState(state=>({
                inputBox:state.inputBox.concat(state.input1),
            }));*/
      this.inputs[e.target.value] = this.state.input1;
      this.disable[e.target.value] = true;
    } else {
      /*this.setState(state=>({
                inputBox:state.inputBox.concat(state.input2),
            }));*/
      this.inputs[e.target.value] = this.state.input2;
      this.disable[e.target.value] = true;
    }
    if (
      (this.inputs[0] === 'X' &&
        this.inputs[1] === 'X' &&
        this.inputs[2] === 'X') ||
      (this.inputs[0] === 'X' &&
        this.inputs[3] === 'X' &&
        this.inputs[6] === 'X') ||
      (this.inputs[0] === 'X' &&
        this.inputs[4] === 'X' &&
        this.inputs[8] === 'X') ||
      (this.inputs[1] === 'X' &&
        this.inputs[4] === 'X' &&
        this.inputs[7] === 'X') ||
      (this.inputs[2] === 'X' &&
        this.inputs[4] === 'X' &&
        this.inputs[6] === 'X') ||
      (this.inputs[2] === 'X' &&
        this.inputs[5] === 'X' &&
        this.inputs[8] === 'X') ||
      (this.inputs[3] === 'X' &&
        this.inputs[4] === 'X' &&
        this.inputs[5] === 'X') ||
      (this.inputs[6] === 'X' &&
        this.inputs[7] === 'X' &&
        this.inputs[8] === 'X')
    ) {
      this.setState((state) => ({
        end: true,
      }));
    } else if (
      (this.inputs[0] === 'O' &&
        this.inputs[1] === 'O' &&
        this.inputs[2] === 'O') ||
      (this.inputs[0] === 'O' &&
        this.inputs[3] === 'O' &&
        this.inputs[6] === 'O') ||
      (this.inputs[0] === 'O' &&
        this.inputs[4] === 'O' &&
        this.inputs[7] === 'O') ||
      (this.inputs[1] === 'O' &&
        this.inputs[4] === 'O' &&
        this.inputs[7] === 'O') ||
      (this.inputs[2] === 'O' &&
        this.inputs[4] === 'O' &&
        this.inputs[6] === 'O') ||
      (this.inputs[2] === 'O' &&
        this.inputs[5] === 'O' &&
        this.inputs[8] === 'O') ||
      (this.inputs[3] === 'O' &&
        this.inputs[4] === 'O' &&
        this.inputs[5] === 'O') ||
      (this.inputs[6] === 'O' &&
        this.inputs[7] === 'O' &&
        this.inputs[8] === 'O')
    ) {
      this.setState((state) => ({
        winner: 'O',
        end: true,
      }));
    } else if (this.state.counter === 8) {
      this.setState((state) => ({
        winner: 'draw',
        end: true,
      }));
    }
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }

  reset = () => {
    this.setState((state) => ({
      input1: 'X',
      input2: 'O',
      /*inputBox:[],*/
      counter: 0,
      winner: 'X',
      open: true,
      end: false,
    }));
    this.inputs = [];
    this.disable = [];
  };

  render() {
    return (
      <div className='board'>
        <button
          className='box1 inputbtn'
          value='0'
          onClick={this.handleClick}
          disabled={this.disable[0]}
        >
          {this.inputs[0]}
        </button>
        <button
          className='box2 inputbtn'
          value='1'
          onClick={this.handleClick}
          disabled={this.disable[1]}
        >
          {this.inputs[1]}
        </button>
        <button
          className='box3 inputbtn'
          value='2'
          onClick={this.handleClick}
          disabled={this.disable[2]}
        >
          {this.inputs[2]}
        </button>
        <button
          className='box4 inputbtn'
          value='3'
          onClick={this.handleClick}
          disabled={this.disable[3]}
        >
          {this.inputs[3]}
        </button>
        <button
          className='box5 inputbtn'
          value='4'
          onClick={this.handleClick}
          disabled={this.disable[4]}
        >
          {this.inputs[4]}
        </button>
        <button
          className='box6 inputbtn'
          value='5'
          onClick={this.handleClick}
          disabled={this.disable[5]}
        >
          {this.inputs[5]}
        </button>
        <button
          className='box7 inputbtn'
          value='6'
          onClick={this.handleClick}
          disabled={this.disable[6]}
        >
          {this.inputs[6]}
        </button>
        <button
          className='box8 inputbtn'
          value='7'
          onClick={this.handleClick}
          disabled={this.disable[7]}
        >
          {this.inputs[7]}
        </button>
        <button
          className='box9 inputbtn'
          value='8'
          onClick={this.handleClick}
          disabled={this.disable[8]}
        >
          {this.inputs[8]}
        </button>
        <Modal
          classNames={{
            overlay: 'modalOverlay',
            modal: 'modalBox',
            animationIn: 'enterAnimation',
            animationOut: 'leaveAnimation',
          }}
          open={this.state.open}
          closeOnEsc={false}
          closeOnOverlayClick={false}
          showCloseIcon={false}
          center
        >
          <p>Select Player</p>
          <div className='selectbtns'>
            <button className='playerbtn leftbtn' onClick={this.selectInputX}>
              {this.state.values[0]}
            </button>
            <button className='playerbtn rightbtn' onClick={this.selectInputO}>
              {this.state.values[1]}
            </button>
          </div>
        </Modal>
        <Modal
          classNames={{
            overlay: 'modalOverlay',
            modal: 'modalBox',
            animationIn: 'enterAnimation',
            animationOut: 'leaveAnimation',
          }}
          open={this.state.end}
          closeOnEsc={false}
          closeOnOverlayClick={false}
          showCloseIcon={false}
          center
        >
          <div className='resultbox'>
            {this.state.winner === 'draw' ? (
              <p>{this.state.winner} Match!</p>
            ) : (
              <p>{this.state.winner} is Winner!</p>
            )}
            <div>
              <button className='retrybtn' onClick={this.reset}>
                &#x21bb;
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default GameBoard;
