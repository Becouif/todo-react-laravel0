import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import InputError from "@/Components/InputError";
import {useForm,Head} from "@inertiajs/react";
// NOTE Head is a self closing tag component 
// Head has attribute call title 
export default function Index({auth})
{
  const { data, setData, post, processing, reset, errors } = useForm({
    todo: '',
  });

  const submit = (e) => {
    e.preventDefault();
    // inside this function is where we will declare the action route 
    post(route('todo.store'),{onSuccess: ()=> reset()});
  }



  return (
    // add this AuthenticatedLayout when you need the header and dashboard 
    // when you use AuthenticatedLayout DONT FORGET user={auth.user} 
    // orelse it may not show 
    <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Todo</h2>}>
      <Head title="Todo" />
        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* we use Onsubmit to submit form  */}
          <form onSubmit={submit}>
            <input
            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" 
            placeholder="enter todo" 
            type="text"
            value={data.todo}
            name="todo"
            onChange={e => setData('todo', e.target.value)}
            />
            {/* this add error message an input  */}
            {/* i saw it in components and register  */}
            <InputError message={errors.todo} />

            
            <button 
            className="mt-4 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150" 
            type="submit" 
            >Add</button>
            
            
            {/* <PrimaryButton className="mt-4" disabled={processing}>Add</PrimaryButton> */}
          </form>

        </div>
    </AuthenticatedLayout>


  );
}