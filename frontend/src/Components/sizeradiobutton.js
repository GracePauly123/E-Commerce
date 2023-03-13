
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
function RadioButton(){
    return (


<Form className="radio-size">
{['radio'].map((type) => (
  <div key={`inline-${type}`} className="mb-3">
    <Form.Check
      inline
      label="SS"
      name="ExtraSmall"
      type={type}
      id={`inline-${type}-1`}
    />
    <Form.Check
      inline
      label="S"
      name="Small"
      type={type}
      id={`inline-${type}-2`}
    />
    <Form.Check
      inline
      label="M"
      name="Medium"
      type={type}
      id={`inline-${type}-3`}
    />
    <Form.Check
      inline
      label="L"
      name="Large"
      type={type}
      id={`inline-${type}-3`}
    />
    <Form.Check
      inline
      label="XL"
      name="ExtraLarge"
      type={type}
      id={`inline-${type}-3`}
    />
  </div>
))}
</Form>
    )
}
export default RadioButton;