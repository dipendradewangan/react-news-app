import React, { Fragment, useEffect, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllNewsAsync, selectAllNews } from '../../redux/home/allNewsSlice';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { countries } from '../../jsonApis/country';



const News = () => {
    const dispatch = useDispatch()
    const topHeadlineNews = useSelector(selectAllNews)
    const [country, setCountry] = useState('in')

    useEffect(() => {
        dispatch(fetchAllNewsAsync())
    }, [dispatch])



    const handleContry = (value)=>{
        console.log(value)
    }


    console.log(topHeadlineNews)

    return (
        <Fragment>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
                <div className='w-full  p-8 rounded-lg bg-gray-200 my-4'>
                    <div className='flex justify-between gap-8 '>


                        <div className='w-full flex border px-3 border-black bg-white rounded-lg focus:shadow-transparent'>
                            <input className='w-full h-full outline-none' />
                            <button type='submit' className=''>Search</button>
                        </div>

                        <div className='flex items-center bg-white gap-2 border border-black px-3 rounded-lg'>
                            <h1 className='font-semibold '>Country:</h1>
                            <select className='w-60 rounded-md p-1 outline-none' defaultValue={country} onChange={(e)=>handleContry(e.target.value)}>
                                {
                                    countries.map((c, index) => {
                                        return <option className='font-sans font-thin' value={c.iso} key={index}>{c.name}</option>
                                    })
                                }
                            </select>
                        </div>

                    </div>
                </div>

                {/* top headline */}

                <div className='w-full  p-8 rounded-lg bg-gray-200 my-4 flex justify-between gap-3'>
                    <button className='w-10'>
                        <ArrowBackIosIcon />
                    </button>
                    <div className='flex flex-col justify-between h-full w-full bg-white rounded-lg p-8'>
                        <div className='flex flex-col justify-between h-full'>
                            <div>
                                {/* news sourse */}
                                <div className='mb-3 flex justify-between items-center font-bold text-[12px] text-gray-500'>
                                    <div className='flex gap-2 items-center'>
                                        <NewspaperIcon sx={"font-size : 15px"} />
                                        <p>BY {"newsItem.author"}</p>
                                    </div>

                                    <div className='flex gap-0 items-center'>
                                        <FavoriteBorderIcon sx={"font-size : 15px"} />
                                        <p>11K</p>

                                    </div>
                                </div>

                                {/* news thumbnail */}
                                <div className='rounded-md mb-1 w-full overflow-hidden gap-8 grid grid-cols-2'>
                                    <div className='rounded-lg overflow-hidden'>
                                        <img src={"https://nypost.com/wp-content/uploads/sites/2/2023/12/newspress-collage-64mb2lryz-1703925140771.jpg?quality=75&strip=all&1703907220&w=1024"} alt='news' />
                                    </div>

                                    <div>
                                        {/* news title */}
                                        <div className='flex justify-between font-normal text-gray-600 text-3xl mb-3'>
                                            <h1>Paula Abdul sues 'American Idol' executive Nigel Lythgoe for alleged sexual assault - New York Post </h1>
                                        </div>


                                        {/* news descriptoin */}
                                        <div className='mb-3'>
                                            <p className='font-[15px]'>Paula Abdul accused former American Idol and So You Think You Can Dance producer Nigel Lythgoe of allegedly sexually assaulting her multiple times, according to a lawsuit filed Friday in Los Angeles.… [+4488 chars]</p>
                                        </div>
                                    </div>
                                </div>



                            </div>


                            <div className='flex justify-between font-semibold text-gray-600 text-[10px] '>
                                <p>{moment().startOf('day').fromNow()}</p>
                                <p>
                                    {"moment(newsItem.publishedAt).format('MMMM Do YYYY')"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className='w-10'>
                        <ArrowForwardIosIcon />
                    </button>
                </div>
                {/* top headline */}
                <div className='w-full grid grid-cols-3 gap-8 p-8 rounded-lg bg-gray-200'>
                    {/* cards */}
                    {
                        topHeadlineNews && topHeadlineNews.map((newsItem, index) => {
                            if (newsItem.title === '[Removed]') {
                                return ''
                            }
                            return <Link key={index} to={newsItem.url}>
                                <div className='bg-white p-6 rounded-md hover:bg-gray-100'>
                                    <div className='flex flex-col justify-between h-full'>
                                        <div>
                                            {/* news sourse */}
                                            <div className='mb-3 flex justify-between items-center font-bold text-[12px] text-gray-500'>
                                                <div className='flex gap-2 items-center'>
                                                    <NewspaperIcon sx={"font-size : 15px"} />
                                                    <p>BY {newsItem.author}</p>
                                                </div>

                                                <div className='flex gap-0 items-center'>
                                                    <FavoriteBorderIcon sx={"font-size : 15px"} />
                                                    <p>11K</p>

                                                </div>
                                            </div>

                                            {/* news thumbnail */}
                                            <div className='rounded-md mb-1 h-[150px] w-full overflow-hidden flex justify-center items-center'>

                                                <img src={newsItem.urlToImage} alt='news' />
                                            </div>

                                            {/* news title */}
                                            <div className='flex justify-between font-normal text-gray-600 text-3xl mb-3'>
                                                <h1>{newsItem.title}</h1>
                                            </div>


                                            {/* news descriptoin */}
                                            <div className='mb-3'>
                                                <p className='font-[15px]'>{newsItem.description}</p>
                                            </div>

                                        </div>


                                        <div className='flex justify-between font-semibold text-gray-600 text-[10px] '>
                                            <p>{moment().startOf('day').fromNow()}</p>
                                            <p>
                                                {moment(newsItem.publishedAt).format('MMMM Do YYYY')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        })
                    }


                </div>
            </div>
        </Fragment >
    )
}

export default News