import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import './PostProduct.css';
import { useNavigate } from "react-router-dom";

const PostProduct = () => {
    const [formDetails, setFormDetails] = useState({
        "name" : "",
        "description" : "",
        "price":0
    })

    const navigate = useNavigate();

    const handleChangeName = (event) => {
        const {name, value} = event.target;
        setFormDetails({
            ...formDetails,
            [name]:value,
        })
    }
    
    const addProduct = async(e) => {
        e.preventDefault();

        try {
            const apiCalling = await fetch("http://localhost:8080/product/", {
                method : "POST",
                headers : {"Content-Type": "application/json"},
                body : JSON.stringify(formDetails)
            });

            const dataPosting = await apiCalling.json();
            console.log("Product Added" , dataPosting);
            navigate("/");
        } catch(E) {
            console.log(E.message);
        }
    }

    return (
        <div className="center-form">
            <h1>Add the Product details</h1>
            <Form onSubmit={addProduct}>
                <Form.Group controlId="formBasicName">
                    <Form.Control 
                        type="text"
                        name="name"
                        placeholder="Enter the Name of product"
                        value={formDetails.name}
                        onChange={handleChangeName}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Control 
                        type="textarea"
                        name="description"
                        placeholder="Enter the description of product"
                        value={formDetails.description}
                        onChange={handleChangeName}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Control 
                        type="number"
                        name="price"
                        placeholder="Enter the price of product"
                        value={formDetails.price}
                        onChange={handleChangeName}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">Submit</Button>
            </Form>
        </div>
    )
}


export default PostProduct;
