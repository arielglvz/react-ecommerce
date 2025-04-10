import { useEffect, useState } from 'react'
import Container from './Container'
import Title from './Title'
import { config } from '../config';
import { getData } from '../lib';
import { BlogProps } from '../type';

const Blog = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config.baseUrl}/blogs`
      try {
        const data = await getData(endpoint);
        setBlogsData(data);
      } catch (error) {
        console.error('Error fetching data for blogs: ', error)
      }
    }

    fetchData();
  }, [])

  return (
    <Container>
      <div>
        <Title text="Our Blog Posts" className='text-center'/>
        {/* <div className="w-full h-[1px] bg-gray-200 mt-3" /> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7'>
          {blogsData.map((item:BlogProps) => (
            <div key={item?._id} className='group cursor-pointer'>
              <div className="overflow-hidden">
                <img 
                  src={item?.image} 
                  alt="blog image" 
                  className="w-full h-auto object-cover group-hover:scale-110 duration-300" 
                />
              </div>
              <div className="mt-5">
                <p className="text-sm uppercase font-medium text-gray-500">{item?._base}</p>
                <p className="text-2xl font-bold line-clamp-1">{item?.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Blog
