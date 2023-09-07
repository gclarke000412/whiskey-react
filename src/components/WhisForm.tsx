
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseBrand, chooseAge, chooseRating, chooseFlavor, choosePrice } from "../redux/slices/RootSlice"

interface WhisFormProps {
  id?: string[];
  onClose: () => void;
}

const WhisForm = ( props:WhisFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.year } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseBrand(data.brand));
      dispatch(chooseAge(data.age));
      dispatch(chooseRating(data.ratingl));
      dispatch(chooseFlavor(data.flavor));
      dispatch(choosePrice(data.price));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="brand">Whiskey Brand</label>
          <Input {...register('brand')} name='brand' placeholder="Brand" />
        </div>
        <div>
          <label htmlFor="age">Years aged</label>
          <Input {...register('age')} name='age' placeholder="Years aged" />
        </div>
        <div>
          <label htmlFor="rating">Rating / 10</label>
          <Input {...register('raing')} name='rating' placeholder="Rating / 10" />
        </div>
        <div>
          <label htmlFor="flavor">Flavor profile</label>
          <Input {...register('flavor')} name='flavor' placeholder="Flavor profile" />
        </div>
        <div>
          <label htmlFor="price">Price per bottle</label>
          <Input {...register('price')} name='price' placeholder="Price" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default WhisForm