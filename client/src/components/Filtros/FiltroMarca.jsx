import React from 'react'
import {filterBrand, setCurrentPage} from '../../redux/actions.js'
import {useDispatch} from 'react-redux'
import styles from'./Filtro.module.css'
function FiltroMarca() {
    const dispatch = useDispatch()

    const handleOnchange =(e)=>{
        dispatch(filterBrand(e.target.value))
        setCurrentPage(1)
    }

  return (
    <div className={styles.filtros}>
      <select defaultValue= "Brand" onChange={handleOnchange}>
        <option disabled value="Brand">Brand</option>
        <option value="">All</option>
        <option value="1">Hurley</option>
        {/* <option value="2">Rip Curl</option> */}
        <option value="3">Vesl</option>
        <option value="4">Russell</option>
        <option value="5">Wave</option>
        <option value="6">JOBE</option>
        <option value="7">Compact</option>
        <option value="8">SungShot</option>
        <option value="9">Billabong</option>
        <option value="10">O'neill</option>
        <option value="11">Orca</option>
        <option value="12">Gill Zenlite</option>
        <option value="13">Powerjet</option>
        <option value="14">Mundial One</option>
      </select>
    </div>
  );
}

export default FiltroMarca