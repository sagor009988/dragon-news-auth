import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const {title,image_url,details,_id

    }=news
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <img src='' alt="" />
    {
        details.length>200 ? <p> {details.slice(0,200)} <Link className="text-bold text-blue-600" to={`/news/${_id}`}>red more</Link></p>:
        <p>{details}</p>
    }
    
  </div>
</div>
    );
};

export default NewsCard;