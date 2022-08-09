import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    
    const { register, handleSubmit, watch, reset, setError, formState: { errors } } = useForm();

    const hanldeReview = () =>{
        console.log('hi')
    }

    return (
        <div className='text-black'>
            <h2  className='uppercase text-3xl text-center font-semibold my-2'>add Your review</h2>
            <hr/>
            <div className='px-3 pt-6'>
            <form className='flex flex-col' onSubmit={handleSubmit(hanldeReview)}>

  <input type="text" placeholder="Your Name"  class="input input-bordered w-full max-w-xl mb-2" {...register("name")} required />
  <input type="text" placeholder="Your Company Designation"  class="input input-bordered w-full max-w-xl mb-2" {...register("name")} required />

  <textarea type="text" placeholder="Write Your Review Here" class="input input-bordered w-full h-36 max-w-xl mb-2" {...register("review")} required />
        <input type="submit" value='Add Review' class="input input-bordered btn text-black w-full max-w-xl cursor-pointer" />
        </form>
            </div>
        </div>
    );
};

export default Review;