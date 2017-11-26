import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqId from 'uniqid';
import getSlug from '../../helpers/slug';

import { Input, Textarea } from './FormFields/InputAndTextarea';
import Checkbox from './FormFields/Checkbox';
import Select from './FormFields/Select';
import Ingredients from './FormFields/Ingredients';
import ImageForm from './FormFields/ImageForm';

import { Form, Row } from './styled/Form';
import Button from './styled/Button';

export class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.recipe ? props.recipe.name : '',
      directions: props.recipe ? props.recipe.directions : '',
      ingredients: props.recipe ? props.recipe.ingredients : [{name: '', quantity: ''}, {name: '', quantity: ''}, {name: '', quantity: ''}],
      category: props.recipe ? props.recipe.category : '',
      tags: props.recipe ? props.recipe.tags : [],
      time: props.recipe ? props.recipe.time : '',
      yields: props.recipe ? props.recipe.yields : '',
      image: props.recipe ? props.recipe.image : '',
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

  validateFields = (field) => {
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

  onSubmit = e => {
    e.preventDefault();
    // format (= delete empty ingredients)
    const ingredients = this.state.ingredients.filter(ingredient => (
      ingredient.name !== ''
    ));
    // validate required fields
    const requiredFields = ['name', 'directions', 'ingredients', 'category', 'time', 'yields'];

    if (!requiredFields.every(field => this.validateFields(field))) {
      this.setState(() => ({ error: 'Please provide all requested information (*)' }));
    } else {
      // save a recipe
      this.setState(() => ({ error: '' }));
      const { name, directions, category, tags, time, yields, image } = this.state;
      const { recipe, recipes } = this.props;
      const id = recipe ? recipe.id : uniqId();
      const addedAt = recipe ? recipe.addedAt : Date.now();
      const slug = getSlug(recipe, name, recipes);
      this.props.onSubmit({ id, addedAt, slug, name, directions, ingredients, category, tags, time, yields, image });
    }
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <div>
          <Input 
            name="name" 
            value={this.state.name} 
            handleInputChange={this.onInputChange} 
            error={this.state.errors.name}
            isRequired={true}
          />
          <Textarea 
            name="directions" 
            value={this.state.directions} 
            handleInputChange={this.onInputChange} 
            error={this.state.errors.directions}
            isRequired={true}
          />
          <Ingredients 
            ingredients={this.state.ingredients}
            handleIngredientChange={this.onIngredientChange}
            addIngredientInput={this.addIngredientInput}
            removeIngredientInput={this.removeIngredientInput}
            error={this.state.errors.ingredients}
          />
          <Select 
            category={this.state.category} 
            handleInputChange={this.onInputChange} 
            error={this.state.errors.category}
          />
          <Row>
            <Input 
              name="time" 
              type="number"
              value={this.state.time} 
              handleInputChange={this.onInputChange} 
              error={this.state.errors.time} 
              additionalText="minute/s"
              isRequired={true}
            />
            <Input 
              name="yields" 
              value={this.state.yields} 
              handleInputChange={this.onInputChange} 
              error={this.state.errors.yields} 
              additionalText="serving/s"
              isRequired={true}
            />          
          </Row>  
        </div>
        <div>
          <ImageForm 
            image={this.state.image} 
            setImage={this.setImage} 
          />
          <Checkbox 
            tags={this.state.tags} 
            handleTagChange={this.onTagChange} 
          />
          { this.state.error && <p>{this.state.error}</p> } {/* Error */}
          <Row>
            <Button type="button" onClick={this.props.onCancel}>Cancel</Button>
            <Button type="submit" blue>Save</Button>
          </Row>  
        </div>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return { recipes: state };
}

export default connect(mapStateToProps)(RecipeForm);
