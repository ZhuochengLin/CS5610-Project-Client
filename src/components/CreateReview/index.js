import {useSelector} from "react-redux";
import {isLoggedIn} from "../../redux/selectors";
import {useState} from "react";
import * as reviewServices from "../../services/reviewServices";
import * as errorServices from "../../services/errorServices";
import {MY} from "../../services/constants";

const CreateReview = ({movieId, refresh}) => {
    const loggedIn = useSelector(isLoggedIn);
    const [review, setReview] = useState({movieId: movieId, rating: "0", review: ""});
    const createReview = () => {
        if (!loggedIn) {
            alert("Please login first")
            return;
        }
        reviewServices.createReview(MY, review)
            .then((res) => refresh())
            .catch(errorServices.alertError);
    }
    return (
        <div className={"row"}>
            <h2 className={"col-12"}>
                Add My Review
            </h2>
            <label className={"col-12"}>
                Rating: {review.rating}
                <input type="range" className="form-range" min="0" max="10" value={review.rating}
                       onChange={(e) =>
                           setReview({...review, rating: e.target.value})}/>
            </label>
            <label className={"col-12"}>
                Review:
                <textarea className={"form-control"} rows={3} value={review.review}
                          onChange={(e) =>
                              setReview({...review, review: e.target.value})}/>
            </label>
            <div className={"col-12"}>
                <button className={"btn btn-primary"} onClick={createReview}>Submit</button>
            </div>
        </div>
    )
};
export default CreateReview;
