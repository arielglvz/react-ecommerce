import { useEffect, useState } from 'react'
import Container from './Container'
import { getData } from '../lib';
import { config } from '../config';
import { HighlightsType } from '../type';
import { Link } from 'react-router-dom';

const Highlights = () => {
  const [highlightsData, setHighlightsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/highlights`
      try {
          const data : [] = await getData(endpoint);
          if (Array.isArray(data)) {
            setHighlightsData(data);
          } else {
            console.error("Expected an array, but got:", data);
            setHighlightsData([]); // Fallback to empty array
          }
      } catch (error) {
        console.error('Error Fetching Highlights Data: ', error)
        setHighlightsData([]); // Fallback to empty array
      }
    }

    fetchData();
  }, [])


  return (
    <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {highlightsData.map((item:HighlightsType) => (
        <div key={item?._id} className="relative h-60 rounded-lg shadow-md cursor-pointer overflow-hidden group">
          <div 
            className="absolute inset-0 bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-110" 
            style={{
              backgroundImage: `url(${item?.image})`,
              color: item?.color,
            }}
          />
          <div className='relative z-10 p-6 flex flex-col justify-between h-full'>
            <div>
              <h3 className='text-2xl font-bold m-w-44'
                style={{
                  color: item?.color,
                }}
              >{item?.name}</h3>
              <p className='text-base font-bold mt-4'>{item?.title}</p>
            </div>
            <Link 
              to={item?.buttonTitle} 
              className='text-base font-normal'
            >{item?.buttonTitle}</Link>
          </div>
        </div>
      ))}
    </Container>
  )
}

export default Highlights
