import {
  Avatar,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "keep-react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Feedback = ({ feedbackData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 mt-12">
      {feedbackData?.map((feedback) => (
        <Card key={feedback.reviewId} className="max-w-md">
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <Avatar>
                <AvatarImage src={feedback.userImg} />
              </Avatar>
              <CardTitle>Keep design system</CardTitle>
            </div>
            <CardDescription>
              Component design systems can help developers to be more productive
              by providing them with a ready-made set of components to use.
            </CardDescription>
            <div className="flex items-center gap-3">
              <Rating
                initialRating={feedback.rating}
                emptySymbol={<FaStar className="text-gray-400" />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar className="text-yellow-500" />}
              />
              {feedback.rating}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Feedback;
