import React from 'react'

const Gallery = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='gallary'>
            <div className='text-center md:w-3/4 mx-auto flex flex-col items-center' data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                <h2 className='text-4xl text-gray-500 font-semibold mb-4'>
                    Gallery</h2>
                <p className='md:w-3/4 text-sm text-gray-500 mb-8 text-center'>Your support has the power to change lives. 
                Whether it's offering food, shelter, medical assistance, or education, every contribution counts. Your generosity 
                makes a meaningful difference in the lives of those in need.</p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mx-8 ">
                <div>
                    <img class="h-auto max-w-full rounded-lg hover-scale-95" 
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-95" 
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-95" 
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-95" 
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-95" 
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-95" 
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-95" 
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-95" 
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg hover:scale-95" 
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="" />
                </div>
                
            </div>

        </div>
    )
}

export default Gallery