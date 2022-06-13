import React from 'react'
import Button from './Button';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form'
import axios from 'axios'
import {BASE_URL} from '@/utils/config'


type Inputs = {
  name: string
  jobStatus: string
  jobPosition?: string
};

const Form = () => {
  const router = useRouter();

  const [loading, setLoading] = React.useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();


  async function onSubmit(values:Inputs){    
    // const jobStatus = values.jobStatus ? `${values.jobStatus}` : 'No Job Status'
    setLoading(true)
    let config = {
         method: 'post',
         url: `${BASE_URL}/api/create`,
         headers: {
               'Content-Type': 'application/json'
         },
         data: values
      };
    let toastId;
    try{
      toastId = toast.loading('Creating...');
      const response = await axios(config);
      if(response.status == 200){
          toast.success(`Data Added Successfully for - ${values.name}`, {id: toastId});
          reset()
        }
    }catch(error){
      toast.error('Unable To Create', {id: toastId})
      console.log(error);
      
    }finally{
      setLoading(false)
    }
  }


  return (
    <>
      <div className='flex justify-center items-center mx-auto'>
        <div className="py-12">
          <h2 className="text-2xl font-bold text-center">Create</h2>
          <div className="mt-8 max-w-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-gray-700">Full name</span>
                  <input type="text" {...register("name", { required: true })} className={`mt-1 block w-full rounded-md shadow-sm outline-none ${errors.name ? 'border-red-500 ring-0 ring-red-500' : null}`} placeholder="Full Name" />
                  {errors.name && <span className='text-red-500'>This field is required</span>}
                </label>
                <label className="block">
                  <span className="text-gray-700">Job Status?</span>
                  <select className={`block w-full mt-1 rounded-md shadow-sm outline-none  ${errors.jobStatus ? 'border-red-500 ring-0 ring-red-500' : null}`} {...register('jobStatus', {required:true})}>
                    <option value={''}>Job Status</option>
                    <option value={'employed'} >Employed</option>
                    <option value={'unemployed'}>Unemployed</option>
                  </select>
                  {errors.jobStatus && <span className='text-red-500'>This field is required</span>}
                </label>

                {/* <label className="block">
                  <span className="text-gray-700">Job position</span>
                  <input type="text" {...register("jobPosition")} className={`mt-1 block w-full rounded-md shadow-sm outline-none ${errors.jobPosition ? 'border-red-500 ring-0 ring-red-500' : null}`} placeholder="Job position" />
                  {errors.jobPosition && <span className='text-red-500'>This field is required</span>}
                </label> */}

                <div className="block text-center">
                  <div className="mt-2">
                    <Button onClick={handleSubmit} text={`${loading ? 'Creating' : 'Create'}`} disabled={loading} />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form