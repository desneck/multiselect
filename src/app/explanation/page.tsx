import React from 'react'

const Explanation = () => {
  return (



    <div className='text-center mt-16 max-w-4xl mx-auto'>
        <h1 className='mb-4 font-bold text-4xl '>
            MultiSelect Component
        </h1>
        <p className='text-center mb-4 '>
            This is a simple MultiSelect component built with React, TypeScript and TailwindCSS. It fetches data from an API and allows you to select multiple items from a dropdown list.
            There may be overflow issues depending on device width. 
            How it works is that it fetches data from an API and allows you to select multiple items from a dropdown list, every time that you type a character in the input field, it uses the debounce function to avoid making too many requests to the API. After that it gets the data given by the API and displays the results in the dropdown list.

        </p>

        


    </div>
  )
}

export default Explanation