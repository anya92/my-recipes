import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Label from '../styled/Label';
import Input from '../styled/Input';

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

ChangeImageLink.displayName = 'ChangeImage';

const StyledImageForm = styled.div`
  margin-bottom: 10px;
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
`;

class ImageForm extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    setImage: PropTypes.func.isRequired,
  }

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
        <Image>
          {this.state.image && <img src={this.state.image} alt="" />}
        </Image>
        <Label htmlFor="image">Add photo</Label>
        <div>
          <Input
            type="text"
            id="image"
            placeholder="https://"
            onChange={this.handleImageChange}
            value={this.state.image}
          />
          <span onClick={this.setImage}>Save</span>
        </div>
      </StyledImageForm>
    );
  }
}

export default ImageForm;
