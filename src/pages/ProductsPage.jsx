import Products from "../components/Products"
import SEO from "../components/SEO"

function ProductsPage() {
  return (
    <>
      <SEO 
        title="Our Products"
        description="Explore our comprehensive range of advanced aesthetic laser machines, including Diode, CO2, HIFU, and more."
        keywords="Diode Laser 808nm, CO2 Fractional Laser, MNRF Machine, HIFU 7D, Cryolipolysis Fat Freezing, HydraFacial Machine, Q-Switch Nd:YAG"
      />
      <Products />
    </>
  )
}

export default ProductsPage
