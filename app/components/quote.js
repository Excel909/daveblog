import Image from "next/image"
import style from '../styles/preview.module.css';
import '@/app/globals.css';

export default function Quote({quote="When the going get's tough only the tough get going", image="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D", height='h-[40vh]', width='w-full'}){
    return(
        <>
            <div className={`bg-gray-800 rounded-md relative ${width} ${height}`}>
                <div className="absolute w-full h-full top-0 left-0">
                    <Image src={image} width={1000} height={1000} className="w-full h-full object-cover" alt="quote"/>
                </div>

                <div className={`${style.texter} w-full h-full z-10 flex justify-center items-center text-white absolute p-5`}>
                    <div className="font-quicksand">
                        <div className="lg:text-2xl text-lg font-semibold font-raleway">
                            Quote of the Day
                        </div>
                        <div className="mt-3 lg:text-xl text-md">
                            "{quote}"
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}