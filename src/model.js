import image from './assets/ppp.jpg'
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks'

const text = `Cool vidio and lessons of JS here: <a href="https://youtube.com/c/VladilenMinin" target="_blank">YouTube</a>.`

export const model = [
    new TitleBlock('JavaScript Website Builder',{
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right,	#C71585, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new ImageBlock(image,{
        styles: {
            background: 'linear-gradient(to right, 	#DB7093, #493240)',
            padding: '2rem 0',
            display: 'flex',
            'text-align': 'center'
        },
        imageStyles: {
                width: '500px',
                height: 'auto',
        },
        alt:'Error'
    }),
    new ColumnsBlock([
        'Application on pure JavaScript, without the use of libraries!',
        'You can create whatever your soul desires, the main desire!',
        'JavaScript a simple and interesting. Learn to create any UI with yourown hands!'
    ],{
        styles: {
            background: 'linear-gradient(to right, #FF69B4, #493240)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'

        }
    }),
    new TextBlock(text,{
        styles: {
            background: 'linear-gradient(to right, #FFB6C1, #493240)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]