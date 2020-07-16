import React from "react";

export default class DynamicForm extends React.Component {
  state = {};
  onSubmit = e => {
    e.preventDefault();    
    if (this.props.onSubmit) this.props.onSubmit(this.state);
  };

  onChange = (e, key) => {
      this.setState(
        {
          [key]: e.target.value
        }
      );
  };

  renderForm = () => {
    let model = this.props.model;
    let formUI = model.map(m => {
      let key = m.key;
      let type = m.type || "text";
      let props = m.props || {};
      let name = m.name;
      let value = m.value;

      let target = key;
      value = this.state[target] || "";

      let input = (
        <input
          {...props}
          type={type}
          key={key}
          name={name}
          value={value}
          onChange={e => {
            this.onChange(e, target);
          }}
        />
      );

      return (
        <div>
          <label>
            {m.label}
          </label>
          {input}
        </div>
      );
    });
    return formUI;
  };

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            this.onSubmit(e);
          }}
        >
          {this.renderForm()}
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    );
  }
}
