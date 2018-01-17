import React from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class SemanticForm extends React.Component {
  state = {

  }

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state

    return (
      <div>
        <h2>Semantic UI</h2>
        <h3>Demo</h3>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input label='First name' placeholder='First name' error />
            <Form.Input label='Last name' placeholder='Last name' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input label='First name' placeholder='First name' />
            <Form.Input label='Last name' placeholder='Last name' />
            <Form.Select label='Gender' options={options} placeholder='Gender' />
          </Form.Group>
          <Form.Group inline>
            <label>Size</label>
            <Form.Radio label='Small' value='sm' checked={value === 'sm'} onChange={this.handleChange} />
            <Form.Radio label='Medium' value='md' checked={value === 'md'} onChange={this.handleChange} />
            <Form.Radio label='Large' value='lg' checked={value === 'lg'} onChange={this.handleChange} />
          </Form.Group>
          <Form.TextArea label='About' placeholder='Tell us more about you...' />
          <Form.Checkbox label='I agree to the Terms and Conditions' error />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default SemanticForm;
