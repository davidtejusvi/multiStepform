import { useForm, useStep} from 'react-hooks-helper';
import React from 'react';
import { Names } from './stepForms/Names';
import { Address } from './stepForms/Address';
import { Contact } from './stepForms/Contact';
import { Review } from './stepForms/Review';
import { Submit } from './stepForms/Submit';

const defaultData = {
firstName : '',
lastName :  '',
nickName : ''
};

const steps = [
    {id: 'names'},
    {id: 'address'},
    {id: 'contact'},
    {id: 'review'},
    {id: 'submit'}
]
const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const {step, navigation} = useStep({
        steps,
        initialStep: 0
    });
    
    console.log(step);

    switch(steps.id){
        
        case "names" : 
            return <Names />;

        case "address" : 
            return <Address />;
        case "contact" : 
            return <Contact />;

        case "review" : 
            return <Review />;

        case "submit" : 
            return <Submit />;

    }


    return (
        <div>
            <step /> 
        </div>
    )
}


export default MultiStepForm;