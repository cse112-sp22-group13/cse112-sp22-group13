import React, {Fragment} from "react";
//import ScrollToTop from "../components/ScrollToTop";
import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap';
import MockPhoto from "../media/NavBar Logo.png";

class ShoppingCartModal extends React.Component {

    // TODO: replace it with Spoonacular API response?
    constructor(props){
        super(props);
        this.state = {
            cuisineMockData:  [
                {
                    "name": "Item 1",
                    "place": "American",
                    "price": 1,
                },
                {
                    "name": "Item 2",
                    "place": "French",
                    "price": 2,
                },
                {
                    "name": "Item 3",
                    "place": "German",
                    "price": 3,
                },
                {
                    "name": "Item 4",
                    "place": "Italian",
                    "price": 4,
                },
                {
                    "name": "Item 5",
                    "place": "Jewish",
                    "price": 5,
                },
                {
                    "name": "Item 6",
                    "place": "Portugese",
                    "price": 6,
                },
                {
                    "name": "Item 7",
                    "place": "Japanese",
                    "price": 7,
                },
                {
                    "name": "Item 8",
                    "place": "Vietnamese",
                    "price": 8,
                },
                ],
                ingredients: ["Beef", "Pork", "Chicken", "Tofu", "Duck", "Egg", "Milk", "Butter", "Fruits"],
                prepTime: ["5 min", "10 min", "15 min", "30 min", "45 min", "1 hour", "2 hour"]
        }
    }
    render(){
    return (
        <Fragment>
            <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Add to Cart</Modal.Title>
                <button type="button" onClick={this.props.setStateOfParent} class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
            </Modal.Header>

            <Modal.Body>
                <p>
                    {
                        this.state.cuisineMockData.map((cuisine) => (
                            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-2 border-bottom">
                                        
                                <div>
                                    <input type="checkbox" />
                                    <img  alt="image" width="150" height="150" src={MockPhoto}
                                    data-holder-rendered="true" />
                                </div>

                                <div>
                                    <div>
                                        {cuisine.name}
                                    </div>
                                    <div>
                                        {cuisine.place}
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-outline-primary me-2">Quantity</button>
                                        <button type="button" class="btn btn-outline-primary me-2">Delete</button>
                                        <button type="button" class="btn btn-outline-primary me-2">Save for later</button>
                                    </div>
                                </div>

                                <div class="col-md-3 text-end">
                                    Price: 
                                    {cuisine.price}
                                </div>
                            
                            </header>
                                    
                        ))
                    }
                </p>
            </Modal.Body>

            <Modal.Footer>
                Your Zip Code:
                <input 
                class="form-control" 
                placeholder="example: 92093" 
                type="text" />
                <Button variant="primary">Checkout</Button>
            </Modal.Footer>
            </Modal.Dialog>
        </Fragment>
    )
}
}


export default ShoppingCartModal;