import React, { useState } from 'react'
import Header from '../components/Header'
import CardUi from '../components/CardUi'
import { faker } from '@faker-js/faker';

const Home = () => {

  // const [a, b, c] = numbers;
  // console.log([55, ...n])

  // const [count, setCount] = useState(90);
  // const [substract, setSubstract] = useState(20);
  // const [data, setData] = useState([]);


  // const handleClick = () => {
  //   // setCount((prev) => prev + 1);
  //   // setSubstract((prev) => prev - 1);
  //   const data = {
  //     username: faker.internet.displayName(),
  //     image: faker.image.avatarGitHub(),
  //     detail: faker.food.description()
  //   };
  //   // console.log(data);
  //   setData((prev) => [...prev, data]);
  // }
  // //     console.log(count);
  // const num = [11, 22, 33, 44];
  const persons = ['ram', 'shyam', 'rita', 'sita'];
  // const colors = ['red', 'green', 'black', 'purple'];
  // const cities = ['Newyork', 'Sanghai', 'Berlin'];
  // let dailyactivities = ['eating', 'sleeping', 'walking'];
  // // const m = n.map((a, b) => {
  // //   return a * 3;
  // // })
  // // console.log(m);


  // // const handleClick = () => {




  // console.log('render');
  // console.log(count);
  const person = {
    name: 'Sujata',
    age: '22',
    address: 'Bhaktapur'

  };
  const movies = {
    title: "Avatar",
    year: "2009",
    rated: "PG-13",
    released: "18 Dec 2009",
    runtime: "162 min",
    image: "https://preview.redd.it/official-character-posters-for-avatar-the-way-of-water-v0-uvbgc4d9gc1a1.jpg?width=1080&crop=smart&auto=webp&s=352a13cc508293444bb880593c21f3c65671efdb",
    genre: "Action,Adventure",
    director: "James Cameron"
  }
  let [count, setCount] = useState(0);
  const countUpdate = () => {
    setCount((prev) => prev + 1);
  }
  const [data, setData] = useState([]);
  const handleClick = () => {
    // setCount((prev) => prev + 1);
    // setSubstract((prev) => prev - 1);
    const data = {
      username: faker.internet.displayName(),
      image: faker.image.avatarGitHub(),
      detail: faker.food.description()
    };
    setData((prev) => [...prev, data]);
  }
  console.log(data);
  setTimeout(() => {
    console.log('hello');
  }, 2000);
  return (
    <div className='p-4'>
      <h1>{count}</h1>
      <button className='bg-black text-white text-[20px]' onClick={handleClick}>click Button</button>
      {/* <h1>{data.username}</h1> */}
      {data.map((user, i) => {

        return <div key={i} className='h=[200px] w-[200px]'>
          <h1>{user.username}</h1>
          <img src={user.image} alt="" />
          <p className='line-clamp-2'>{user.detail}</p>
        </div>
      })}


      {/* {colors.map((n, i) => {
        return <div> <h1 key={i} className='font-bold'>{i}  {n}</h1>

        </div>
      })}
      {cities.map((n, i) => {
        return <h1>{n}</h1>;
      })}*/}




      {/* <button onClick={handleClick} className='bg-black text-white text-2xl'>Increment</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugit repudiandae voluptatem suscipit! Sequi magnam corrupti maxime similique nihil at ipsa fugit dolorem magni rem rerum, odio tempore error explicabo.</p>
      <br /> */}
      {/* <h1>{substract}</h1> 
      <button onClick={handleClick} className='bg-black text-white text-2xl'>Decrement</button> */}
      {/* <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.address}</h1> */}
      {/* <div className='h-[550px] w-[300px] p-4 shadow-black shadow-2xl '>
        <h1 className='text-3xl font-bold '>{movies.title}</h1>
        <img src={movies.image} alt="" />
        <p>{movies.year}</p>
        <p>{movies.rated}</p>

        <p>{movies.runtime}</p>

        <p>{movies.genre}</p>
        <p>{movies.director}</p>
        <br />
        <br />
        {persons.map((a, i) => {
          return <h1 key={i}>{a}</h1>;
        })} */}





      {/* </div> */}


    </div >





  )
}

export default Home