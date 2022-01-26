import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { slideIn } from "../animations";
import { ButtonLink } from "../components/Button";
import { ShoeCard } from "../components/ShoeCard";
import { useIsMounted } from "../hooks/useIsMounted";

import resultsStyles from "../styles/pages/results.module.css";
import { findShoesFromIds, Shoe } from "../utils";

const Results: NextPage = () => {
  const isMounted = useIsMounted();
  const { query } = useRouter();
  const [shoeResults, setShoeResults] = useState([] as Shoe[]);
  const { results } = query;

  useEffect(() => {
    if (!results) return;

    const foundShoes = findShoesFromIds(results);
    setShoeResults(foundShoes);
  }, [results]);

  const mainShoe = shoeResults[0];
  const similarShoes = shoeResults.slice(1);

  if (!isMounted && !mainShoe)
    return (
      <div className={`page ${resultsStyles.resultsPage}`}>
        <h1 className="title">Sorry, we could not find any shoes...</h1>

        <ButtonLink href="/quiz">Take the quiz</ButtonLink>
      </div>
    );

  if (!mainShoe) return null;

  return (
    <div className={`page ${resultsStyles.resultsPage}`}>
      <section className={resultsStyles.resultsSection}>
        <motion.div {...slideIn({ initialY: 50 })}>
          <h1 className="banner">Congratulations!</h1>
          <p className="body">
            Based on your selection we&apos;ve decided on the{" "}
            <b>{mainShoe.name}</b>! Enjoy the 30 day trail!
          </p>
        </motion.div>

        <motion.div {...slideIn({ initialY: 50, delay: 0.3 })}>
          <ShoeCard shoe={mainShoe} />
        </motion.div>
      </section>

      {similarShoes.length > 0 && (
        <motion.section
          className={resultsStyles.resultsSection}
          {...slideIn({ initialY: 100, delay: 0.9 })}
        >
          <h2 className="title">Similar Profiles</h2>
          {similarShoes.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} />
          ))}
        </motion.section>
      )}
    </div>
  );
};

export default Results;
