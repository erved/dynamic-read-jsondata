import React, { Component } from "react";
import DynamicForm from "./DynamicForm";

class App extends Component {
  state ={
    data:'',
    current:''
  }

  onSubmit = model => {
    this.setState({
      data : model
    });
    for (const property in model) {
      console.log(`${property}: ${model[property]}`);
      localStorage.setItem(property,model[property]);
    }
  };

  render() {
    return (
      <div>
        <DynamicForm
          title="generated dynamic form"
          defaultValues={this.state.current}
          model={[
            { key: "firstname", label: "firstName", props: { required: true } },
            { 
              key: "addressLine1",
              label: "addressLine1",
              type: "string",
              props:{required : true}
            },
            {
              key: "addressLine2",
              label: "addressLine2",
              type: "string",
              props: { required : true}
            },
            {
              key: "city",
              label: "City",
              type: "string",
              props:{required : true}
            },
            {
              key: "state",
              label: "state",
              type: "string",
              props:{required : true}
            },
            {
              key: "pincode",
              label: "pincode",
              type: "number",
              props:{required : true}
            }
          ]}
          onSubmit={model => {
            this.onSubmit(model);
          }}
        />
      </div>
    );
  }
}

export default App;
