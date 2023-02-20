import {Form} from "react-bootstrap";

function FormControl({label_text,changeSetter,type = "text",value,errors,...props}) {

    return (
        <>
            {label_text && <Form.Label>{label_text}</Form.Label>}
            <Form.Control type={type} value={value} onChange={(e) => {changeSetter(e.target.value) }} {...props}/>
            {errors && <p className={"text-danger text-center"}>{errors[0]}</p>}
        </>
    );
}

export default FormControl;
