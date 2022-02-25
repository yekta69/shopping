
import {FeacherMenu} from '../../component/FeaturesMenu'
import {SpecialOfferPage} from './SpecialOffer'
import{ProductCardPage} from "./ProductCard"
import {NavbarPage} from './Navbar'
export const Homepage =() =>{

    return(
        <>
        <NavbarPage/>
        <SpecialOfferPage/>
        <FeacherMenu/>
        <ProductCardPage/>
        </>
    )

}
