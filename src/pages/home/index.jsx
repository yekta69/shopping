
import {FeacherMenu} from '../../component/FeaturesMenu'
import {SpecialOfferPage} from './SpecialOffer'
import{ProductCardPage} from "./ProductCard"
import {NavbarPage} from './Navbar'
import {Navbar2} from '../../component/navbar2'

export const Homepage =() =>{

    return(
        <>
        
        <Navbar2/>
        <NavbarPage/>
        <SpecialOfferPage/>
        <FeacherMenu/>
        <ProductCardPage/>
        </>
    )

}
