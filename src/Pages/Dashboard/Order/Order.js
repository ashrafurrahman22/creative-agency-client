import React from 'react';
import { useForm } from 'react-hook-form';

const Order = () => {

    const { register, handleSubmit, watch, reset, setError, formState: { errors } } = useForm();

    const hanldeReview = () =>{
        console.log('hi')
    }

    return (
        <div>
            <h2 className='uppercase text-3xl text-center font-semibold my-2'>Your Orders</h2>
            <hr style={{height:"2px"}} className='bg-black'/>
            <div className='px-3 pt-6'>
            <form className='flex flex-col' onSubmit={handleSubmit(hanldeReview)}>

  <input type="text" placeholder="Your Name"  class="input input-bordered w-full max-w-xl mb-2" {...register("name")} required />
  <input type="text" placeholder="Your Company Designation"  class="input input-bordered w-full max-w-xl mb-2" {...register("name")} required />
  <input type="email" placeholder="Your Email"  class="input input-bordered w-full max-w-xl mb-2" {...register("name")} required />

  <textarea type="text" placeholder="Project Details" class="input input-bordered w-full h-20 max-w-xl mb-2" {...register("review")} required />
  <input type="number" placeholder="Price"  class="input input-bordered w-full max-w-xl mb-2" {...register("name")} required />
        <input type="submit" value='Order' class="btn hover:btn-primary font-medium input input-bordered text-black w-full max-w-xl cursor-pointer" />
        </form>
            </div>
        </div>
    );
};

export default Order;