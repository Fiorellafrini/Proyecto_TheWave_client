import React, { useEffect, useState}from 'react';
import { Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, listProducts, listTypes } from '../../redux/actions';
import style from './FromProduct.module.css';


const FormProduct = () => {
    const products = useSelector(state => state.products);
    const types = useSelector(state => state.types);
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    
    const [input, setInput] = useState({
        name: '',
        description:"",
        image: "",
        image2: "",
        size: '',
        price: 0,
    });
    useEffect(() => {
        if (types.length === 0) {
            dispatch(listTypes())
            dispatch(listProducts())
        }
      }, [dispatch]
      );
    const handleInputChange = e => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setError(
            setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        );
    };
     const handleSubmit = async e => {
    e.preventDefault();
    if( !input.name.trim() && !input.image && !input.description && !input.size  && input.price === 0/* &&  !input.types[0] */) {
      setError("Please, complete the fields , for the creation of the pokemon");
    }
    else if (!input.name.trim() ){
      setError("Please, enter a name for your product");
    }
    else if ( !products.includes(input.name)){
      setError("This name is not available"); 
    }
    else if(!/^[a-zA-z]+$/.test(input.name)){
      setError("Please,only alphabet characters ")
    }
    else if(!input.image){
      setError("Please, enter the url of the image of your pokemon");
    }

    else if (input.types.length === 0){
      setError("Please select at least one type for your pokemon")
    }
    else{
      dispatch(createProduct(input));
        alert("the pokemon has been created")
   /*      history.push("/home") */
      }
    };
     const handleSelect = e => {
    let selectedType = e.target.value
    if (!input.types.includes(selectedType) && input.types.length < 5) {
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        });
    };
  };

  const handleDelete = e => {
    e.preventDefault()
    setInput({
        ...input,
        types: input.types.filter(type => type !== e.target.value)
    });
  };    
    return(
        <div className={style.warp}>
            <form>  
                <div className={style.rows}>
            <div className={style.colum1}>
                <div className={style.box}>
                    <div className={style.name}>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" placeholder='' name="name" value={input.name}  onChange={e => handleInputChange(e)} />
                    </div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" id="price" value={input.price}  name="price" onChange={e => handleInputChange(e)} />
                    <div className={style.img}>
                    <label htmlFor="image">Image: </label>
                    <input type="url" key="image" id="image"  placeholder="img...url"  name="image" value={input.image} onChange={e => handleInputChange(e)}/>
                    <input type="url2" key="image" id="image"  placeholder="img...url"  name="image" value={input.image} onChange={e => handleInputChange(e)}/>
                    </div>
                    <div>
                    <h4>Type:</h4>
                    <div className={style.typesContainer}>
                    <div className={style.type}>
                        <select name="types" value={input.types}  onChange={(e => handleSelect(e))}>
                        {
                            types && types.map( type => {
                            return(
                                <option  key={type.name} value={type.name} >{type.name}</option>
                            )
                            })
                        }
                        </select>
                    </div>
                    
                </div>
                <h4>Brand:</h4>
                    <div className={style.typesContainer}>
                    <div className={style.type}>
                        <select name="types" value={input.types}  onChange={(e => handleSelect(e))}>
                        {
                            types && types.map( type => {
                            return(
                                <option  key={type.name} value={type.name} >{type.name}</option>
                            )
                            })
                        }
                        </select>
                    </div>
                    
                </div>
                <div className={style.description}>
                    <label htmlFor="description">Description: </label><br/>
                    <textarea key="health" id="description" name="description"  value={input.description} onChange={e => handleInputChange(e)}/>
                    
                </div>
            
                    <label htmlFor="size">Size: </label>
                    <label htmlFor="size">S </label>
                    <input type="radio" id="size" value={input.price}  name="price" onChange={e => handleInputChange(e)} />
                    <label htmlFor="size">M </label>
                    <input type="radio" id="size" value={input.price}  name="price" onChange={e => handleInputChange(e)} />
                    <label htmlFor="size">L </label>
                    <input type="radio" id="size" value={input.price}  name="price" onChange={e => handleInputChange(e)} />
                    <label htmlFor="size">XL </label>
                    <input type="radio" id="size" value={input.price}  name="price" onChange={e => handleInputChange(e)} />
                    <label htmlFor="size">Unique </label>
                    <input type="radio" id="size" value={input.price}  name="price" onChange={e => handleInputChange(e)} />  
                </div>
                <div className={style.colum2}>
                <div className={style.stats}>
                
                    
                </div>
                
                    {/* <div className={style.renderTypes}>
                        {
                        input.types.map(type =>{
                            return(
                            <div className={style.type} key={type.name}>
                                <span>{type}</span><button type="button" value={type} onClick={e => handleDelete(e)}   >x</button>
                            </div>
                            )
                        })
                        }
                    </div> */}
                    </div>
                </div>
                </div>
            </div>   
            <div className={style.error}>
                {error ? <span>{error}</span> : null}
            </div>
            <div className={style.submit}>
                <button type='submit' onClick={e => handleSubmit(e)}>Create</button>
            </div>
        </form>

            
        </div>
    )
};
export default FormProduct;