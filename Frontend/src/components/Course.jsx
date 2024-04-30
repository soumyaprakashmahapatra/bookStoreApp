import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import { Link } from 'react-router-dom'

const Course = () => {
  return (
    <div>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">We're delighted to have you {" "}
            <span className="text-pink-500">Here :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, alias cupiditate. Impedit quam in sequi voluptatem, voluptas, obcaecati fuga quia repellat cupiditate ipsum quo odit dolorum? Voluptas doloremque quaerat odit assumenda harum consequuntur quas at error neque facere dolorem animi vero nihil dicta enim laudantium, esse aliquid numquam quam blanditiis rerum ipsam deserunt. Eligendi architecto cumque accusantium id ut placeat natus ex veritatis reiciendis nostrum velit in, praesentium reprehenderit rerum. Autem nulla, doloremque quod deleniti temporibus rem dignissimos, earum ducimus amet quasi ratione aspernatur corrupti voluptatem, adipisci dolore libero. Atque dolorum, beatae neque nobis officia doloremque animi voluptatibus explicabo assumenda
          </p>
          <Link to="/"> {/*It will take to home page when clicking back button */}
            <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4"> {/*grid make all the card in horizontal line previously it was vertically    alligned*/}
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Course