import { shape, string, number, array } from "prop-types"
import imageType from "./imageType"
import addressType from "./addressType"

const cardType = shape({
    _id: string.isRequired,
    title: string.isRequired,
    subtitle: string.isRequired,
    description: string.isRequired,
    phone: string.isRequired,
    email: string.isRequired,
    web: string.isRequired,
    image: imageType.isRequired,
    address: addressType.isRequired,
    bizNumber: number.isRequired,
    likes: array,
    user_id: string.isRequired,
},
)

export default cardType