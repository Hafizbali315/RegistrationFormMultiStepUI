import { AiOutlinePlus } from 'react-icons/ai'

const ImageInput = ({ label }) => {
	return (
		<div className="image_input">
			<label htmlFor="">{label}</label>

			<div className="input_container">
				<input type="file" />
				<AiOutlinePlus className="icon" />
			</div>
		</div>
	)
}

export default ImageInput
