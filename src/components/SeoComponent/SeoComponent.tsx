import { Helmet } from "react-helmet"


interface SeoComponentProps {
  title?: string
  description?: string
 
}

function SeoComponent({ title = "Депиляция и косметология в Гамбурге | Алина | Haarentfernung & Kosmetik in Hamburg | Alina Perfect Skin Beauty", description }: SeoComponentProps) {


  return (
  
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
  )
}

export default SeoComponent
