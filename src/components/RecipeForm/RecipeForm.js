import React, { Component } from 'react';
import styled from 'styled-components';

import { Input, Textarea } from './Inputs/Input';
import Checkbox from './Inputs/Checkbox';
import Select from './Inputs/Select';
import Ingredients from './Inputs/Ingredients';
import ImageForm from './Inputs/ImageForm';
import Button from './Button';

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  @media all and (max-width: 580px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.recipe.name || '',
      directions: this.props.recipe.directions || '',
      ingredients: this.props.recipe.ingredients || [{name: '', quantity: ''}, {name: '', quantity: ''}, {name: '', quantity: ''}],
      category: this.props.recipe.category || '',
      tags: this.props.recipe.tags || [],
      time: this.props.recipe.time || '',
      yields: this.props.recipe.yields || '',
      image: this.props.recipe.image || '',
      error: '',
      errors: {
        name: false,
        directions: false,
        ingredients: false,
        category: false,
        time: false,
        yields: false,
      },
    };
  }

  onInputChange = (e, type) => {
    const { value } = e.target;
    this.setState(() => ({ [type]: value }));
  }

  setImage = image => {
    this.setState(() => ({ image }));
  }

  onIngredientChange = (e, type, index) => {
    const { value } = e.target;
    const ingredients = this.state.ingredients.map((ingredient, i) => {
      if (i === index) {
        ingredient[type] = value;
      }
      return ingredient;
    });
    this.setState(() => ({ ingredients }));
  }

  addIngredientInput = () => {
    this.setState(prevState => {
      return {
        ingredients: [
          ...prevState.ingredients,
          { name: '', quantity: '' }
        ]
      };
    });
  }

  removeIngredientInput = index => {
    if (this.state.ingredients.length > 1) {
      this.setState(prevState => {
        return {
          ingredients: [
            ...prevState.ingredients.slice(0, index),
            ...prevState.ingredients.slice(index + 1)
          ]
        };
      });
    }
  }

  onTagChange = tag => {
    if (!this.state.tags.includes(tag)) {
      this.setState(prevState => ({ tags: [...prevState.tags, tag] }));
    } else {
      const index = this.state.tags.indexOf(tag);
      this.setState(prevState => ({ tags: [...prevState.tags.slice(0, index), ...prevState.tags.slice(index + 1)] }));
    }
  }

  onSubmit = e => {
    e.preventDefault();
    // validate 
    function validateFields(field) {
      if (field === 'ingredients') {
        if (!this.state.ingredients.some(ingredient => ingredient.name !== '')) {
          this.setState(prevState => ({ errors: { ...prevState.errors, ingredients: true } }));
          return false;
        } else {
          this.setState(prevState => ({ errors: { ...prevState.errors, ingredients: false } }));
          return true;
        }
      }
      if (!this.state[field]) {
        this.setState(prevState => ({ errors: { ...prevState.errors, [field]: true } }));
        return false;
      } else {
        this.setState(prevState => ({ errors: { ...prevState.errors, [field]: false } }));
        return true;
      }
    }
    // format (delete empty ingredients)
    const ingredients = this.state.ingredients.filter(ingredient => (
      ingredient.name !== ''
    ));

    const validationFields = ['name', 'directions', 'ingredients', 'category', 'time', 'yields'];
    if (!validationFields.every(field => validateFields.call(this, field))) {
      this.setState(() => ({ error: 'Please provide all requested information' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        directions: this.state.directions,
        ingredients,
        category: this.state.category,
        tags: this.state.tags,
        time: this.state.time, // + minutes
        yields: this.state.yields, // + servings
        image: this.state.image,
        addedAt: this.props.recipe ? this.props.recipe.addedAt : Date.now(),
      });
    }
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <div>
          <Input name="name" value={this.state.name} handleInputChange={this.onInputChange} error={this.state.errors.name} />
          <Textarea name="directions" value={this.state.directions} handleInputChange={this.onInputChange} error={this.state.errors.directions} />
          <Ingredients 
            ingredients={this.state.ingredients}
            handleIngredientChange={this.onIngredientChange}
            addIngredientInput={this.addIngredientInput}
            removeIngredientInput={this.removeIngredientInput}
            error={this.state.errors.ingredients}
          />
          <Select category={this.state.category} handleInputChange={this.onInputChange} error={this.state.errors.category} />
          <Row>
            <Input name="time" type="number" value={this.state.time} handleInputChange={this.onInputChange} error={this.state.errors.time} span="minute(s)" />
            <Input name="yields" value={this.state.yields} handleInputChange={this.onInputChange} error={this.state.errors.yields} span="serving(s)" />          
          </Row>  
        </div>
        <div>
          <ImageForm image={this.state.image} setImage={this.setImage} />
          <Checkbox tags={this.state.tags} handleTagChange={this.onTagChange} />
          { this.state.error }
          <Row>
            <Button type="button" onClick={this.props.onCancel}>Cancel</Button>
            <Button type="submit" blue>Save</Button>
          </Row>  
        </div>
      </Form>
    );
  }
}
