import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, ButtonLink } from "../components/Button";
import { Loading } from "../components/Loading";

import data from "../data.json";
import quizStyles from "../styles/pages/quiz.module.css";
import {
  Answer,
  calculatePrioritizedResults,
  increaseRatings,
  RatingMap,
} from "../utils";

const { questions } = data;

const Home: NextPage = () => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [ratings, setRatings] = useState({} as RatingMap);

  const { copy, answers } = questions[currentQuestionIndex];

  const onAnswerClick = ({ nextQuestion, ratingIncrease }: Answer) => {
    const newRatings = increaseRatings({
      currentRatings: ratings,
      ratingIncrease,
    });
    setRatings(newRatings);

    if (typeof nextQuestion === "string") {
      setIsLoading(true);
      const prioritizedResults = calculatePrioritizedResults(ratings);
      // Even though we have all the data on the client let mock an asynchronous call.
      return setTimeout(() => {
        push({ pathname: "/results", query: { results: prioritizedResults } });
      }, 5000);
    }

    setCurrentQuestionIndex(nextQuestion);
  };

  return (
    <section className={`page ${quizStyles.quizPage}`}>
      {isLoading ? (
        <div className={quizStyles.loading}>
          <Loading />
        </div>
      ) : (
        <>
          <p className={`${quizStyles.disclaimer} caption`}>
            Try on quiz <span className="noWrap">30 days risk free</span>
          </p>

          <h1 className="title">{copy}</h1>

          <div className={quizStyles.answers}>
            {answers.map((answer) => (
              <Button
                key={answer.copy}
                variant="secondary"
                onClick={() => onAnswerClick(answer)}
              >
                {answer.copy}
              </Button>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
