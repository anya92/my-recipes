import React, { Component } from 'react';
import styled from 'styled-components';

const Image = styled.div`
  height: 300px;
  background-color: #EEE;
  margin-bottom: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ChangeImageLink = styled.div`
  font-size: 1.1rem;
  cursor: pointer;
  color: dodgerblue;
  text-align: center;
  background-color: #FFF;  
`;

const StyledImageForm = styled.div`
  font-size: 1.2rem;
  margin-bottom: 10px;
  label {
    display: block;
    color: #4F4F4F;
    font-weight: 700;
    margin: 5px 0;
  }
  div {
    display: flex;
    span {
      background-color: dodgerblue;
      color: #FFF;
      display: inline-flex;
      align-items: center;
      padding: 0 10px;
      border-left: 2px solid #FFF;
      cursor: pointer;
    }
  }
  input {
    width: 100%;
    border: none;
    background-color: #F2F2F2;
    padding: 8px 2px;
    border-bottom: 2px solid #F2F2F2;
    &:focus {
      border-bottom-color: dodgerblue;
      outline: none;
    }
  }
`;

class ImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image,
      showImage: this.props.image !== ''
    };
  }

  handleImageChange = e => {
    const image = e.target.value;
    this.setState(() => ({ image }));
  }

  setImage = () => {
    const { image } = this.state;
    this.props.setImage(image);
    this.setState(() => ({ showImage: true }));
  }

  render() {
    if (this.state.showImage) {
      return (
        <div>
          <Image>
            <img src={this.state.image} alt="" />
          </Image>  
          <ChangeImageLink onClick={() => this.setState({ showImage: false })}>Change photo</ChangeImageLink>
        </div>
      );
    }
    return (
      <StyledImageForm>
        <Image>{this.state.image && <img src={this.state.image} alt="" /> }</Image>
        <label htmlFor="image">Add photo</label>
        <div>
          <input type="text" id="image" placeholder="https://" onChange={this.handleImageChange} value={this.state.image} />
          <span onClick={this.setImage}>Save</span>
        </div>
      </StyledImageForm>
    );
  }
}

export default ImageForm;
