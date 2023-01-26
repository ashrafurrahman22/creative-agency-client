import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Review = () => {
    
    const { register, handleSubmit, watch, reset, setError, formState: { errors } } = useForm();

    const hanldeReview = event =>{
          console.log(event);
          fetch('https://cute-tan-scorpion-wrap.cyclic.app/review', {
            method : "POST", 
            headers : {
              'content-type' : 'application/json'
            },
            body :JSON.stringify(event)
          })
          .then(res => res.json())
          .then(data => {
            toast.success('You Successfully added your review')
            console.log(data)
            reset();
          } )
        }
        

    return (
        <div className='text-black'>
            <h2 style={{fontFamily:"raleway"}} className='uppercase text-3xl pl-5 font-medium'>add Your review</h2>
            <hr />
            <div className='px-3 pt-6'>
            <form className='flex flex-col' onSubmit={handleSubmit(hanldeReview)}>

  <input type="text" placeholder="Your Name"  class="input input-bordered w-full max-w-xl mb-2" {...register("name")} required />
  <input type="text" placeholder="Your Company Designation"  class="input input-bordered w-full max-w-xl mb-2" {...register("designation")} required />

  <textarea type="text" placeholder="Write Your Review Here" class="input input-bordered w-full h-36 max-w-xl mb-2" {...register("review")} required />
        <input type="submit" value='Add Review' class="input hover:btn-primary font-medium input-bordered btn text-black w-full max-w-xl cursor-pointer" />
        </form>
            </div>
        </div>
    );
};

export default Review;