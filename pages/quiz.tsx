import { motion, useAnimation } from "framer-motion";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { slideIn } from "../animations";
import { Button, ButtonLink } from "../components/Button";
import { Loading } from "../components/Loading";

import data from "../data.json";
import { useIsMounted } from "../hooks/useIsMounted";
import quizStyles from "../styles/pages/quiz.module.css";
import {
  Answer,
  calculatePrioritizedResults,
  increaseRatings,
  RatingMap,
} from "../utils";

const { questions } = data;

const Quiz: NextPage = () => {
  const { push } = useRouter();
  const controls = useAnimation();

  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [ratings, setRatings] = useState({} as RatingMap);

  const { copy, answers } = questions[currentQuestionIndex];

  const onAnswerClick = async ({ nextQuestion, ratingIncrease }: Answer) => {
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

    await controls.start({
      opacity: 0,
      transition: { duration: 0.3 },
    });
    await setCurrentQuestionIndex(nextQuestion);
    controls.start({
      opacity: 1,
      transition: { duration: 0.3 },
    });
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
            Try on quiz <br />
            30 days risk free
          </p>

          <motion.div animate={controls} className={quizStyles.quiz}>
            <motion.h1 className="title" {...slideIn({ initialY: 50 })}>
              {copy}
            </motion.h1>

            <motion.div
              className={quizStyles.answers}
              {...slideIn({ initialY: 80, delay: 0.3 })}
            >
              {answers.map((answer) => (
                <Button
                  key={answer.copy}
                  variant="secondary"
                  onClick={() => onAnswerClick(answer)}
                >
                  {answer.copy}
                </Button>
              ))}
            </motion.div>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Quiz;
