import { useForm, useStep} from 'react-hooks-helper';
import React from 'react';
import { Names } from './stepForms/Names';
import { Address } from './stepForms/Address';
import { Contact } from './stepForms/Contact';
import { Review } from './stepForms/Review';
import { Submit } from './stepForms/Submit';

const defaultData = {
    firstName: "",
    lastName: "",
    nickName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
  };
  
  const steps = [
    { id: "names" },
    { id: "address" },
    { id: "contact" },
    { id: "review" },
    { id: "submit" },
  ];
  
  export const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
      steps,
      initialStep: 0,
    });
  
    const props = { formData, setForm, navigation };
  
    switch (step.id) {
      case "names":
        return <Names {...props} />;
      case "address":
        return <Address {...props} />;
      case "contact":
        return <Contact {...props} />;
      case "review":
        return <Review {...props} />;
      case "submit":
        return <Submit {...props} />;
    }
  
    return (
      <div>
        <h1>Multi step form</h1>
      </div>
    );
  };