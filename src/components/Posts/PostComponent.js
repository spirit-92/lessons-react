import './PostStyle.css'

function PostComponent(post) {

    let randImg = Math.floor(Math.random() * 5) + 1

    let  srcImg = require(`../post_img/${randImg}.jpeg`);

    return (

        <li className='li_post'>
            <div>
                <div className='header_post'>
                    <h3>{post.title}</h3>
                </div>
                <div className='body_post'>
                    <img src={srcImg}  alt={post.title}/>
                    <p>{post.body}</p>
                </div>
            </div>

        </li>

    )
}

export default PostComponent