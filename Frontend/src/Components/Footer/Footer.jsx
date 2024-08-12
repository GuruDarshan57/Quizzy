import React from 'react'

const Footer = () => {
    return (
        <div className='flex w-screen place-content-center footer absolute bottom-0 bg_nav py-2 px-2'>
            <div className='flex flex-col sm:flex-row w-11/12 sm:w-3/4 justify-between'>
                <div className='flex font2 text-2xl place-content-center'>
                    quizzy
                </div>
                <div className='flex gap-4 place-content-center mt-2 sm:mt-0'>
                    <a href="https://github.com/GuruDarshan57" target="_blank"><i className="fa-brands fa-square-git text-2xl cursor-pointer"  ></i></a>
                    <a href="https://www.linkedin.com/in/gurudarshan-l-772a1b25b/" target="_blank"><i className="fa-brands fa-linkedin text-2xl cursor-pointer" ></i></a>
                </div>
                <div className='flex mt-2 sm:mt-0 tracking-wider font-medium place-content-center'>
                    Copyright © {new Date().toString().slice(10, 15)} GuruDarshan
                </div>
            </div>
        </div>
    )
}

export default Footer