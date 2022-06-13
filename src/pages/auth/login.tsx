import React from 'react'
import supabase from '@/lib/supabase'
import toast from 'react-hot-toast'

const Auth : React.FC = () => {


    const [loading, setLoading] = React.useState(false)
    const [email, setEmail] = React.useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        try{
        setLoading(true)
        const { error } = await supabase.auth.signIn({ email })
        if (error) throw error
        toast.success('Check you Email for the Login Link');
        }catch(error: any){
        toast.error(error.error_description || error.message);
        } finally {
        setLoading(false)
        }
        
    }

  return (
    <>
       <div className="border rounded-lg p-12 w-4/12 mx-auto my-48 shadow-2xl ">
        <h3 className="font-extrabold text-3xl">Ahoy!</h3>

        <p className="text-gray-500 text-sm mt-4">
          Fill in your email, we&apos;ll send you a magic link.
        </p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email address"
          className="border w-full p-3 rounded-lg mt-4 focus:border-indigo-500 focus:ring-indigo-500 text-black"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          onClick={(e) => {
              e.preventDefault()
              handleSubmit(e)
            }}
          className="btn  btn-primary w-full p-3 rounded-lg mt-8"
        >
          <span>{loading ? 'Loading' : 'Send Magic Link'}</span>
        </button>
      </form>
    </div>
    </>
  )
}

export default Auth