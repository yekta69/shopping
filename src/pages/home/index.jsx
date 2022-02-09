
import {FeacherMenu} from '../../component/FeaturesMenu'
import {SpecialOfferPage} from './SpecialOffer'
import{ProductDardPage} from "./ProductCard"
import { Navbar } from '../../component/navbar'
export const Homepage =() =>{

    return(
        <>
        <Navbar/>
        <SpecialOfferPage/>
        <FeacherMenu/>
        <ProductDardPage/>
        </>
    )

}
