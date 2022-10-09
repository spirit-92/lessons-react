import './DateMockStyle.css';
function DateMockComponent(props) {
    // console.log(props)
    const {first_name, last_name, email, gender, img_url} = props
    return (

            <li>
                <button className="card">
                    <img src={img_url} className="card__image" alt=""/>
                    <div className="card__overlay">
                        <div className="card__header">
                            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                <path/>
                            </svg>
                            <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt=""/>
                            <div className="card__header-text">
                                <h3 className="card__title">{first_name} {last_name}</h3>
                                <span className="card__status">1 hour ago</span>
                            </div>
                        </div>
                        <p className="card__description">
                            Email:{email}<br/>
                            Gender:{gender}
                        </p>
                    </div>
                </button>
            </li>


)

}

export default DateMockComponent