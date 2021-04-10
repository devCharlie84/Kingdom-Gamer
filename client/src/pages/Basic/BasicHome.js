import React from "react";
import { Helmet } from "react-helmet";
import MainBanner from "../../components/Basic/MainBanner";
import HomeGames from "../../components/Basic/HomeGames";
import HomeFunctionalities from "../../components/Basic/HomeFunctionalities";
import HomeRecommendedGames from "../../components/Basic/HomeRecommendedGames";

export default function BasicHome() {
  return (
    <>
      <Helmet>
        <title> Kingdom Gamer</title>
        <meta
          name="description"
          content="Home | Kingdom Gamer"
          data-react-helmet="true"
        />
      </Helmet>
      <MainBanner />
      <HomeGames />
      <HomeRecommendedGames />
      <HomeFunctionalities />
    </>
  );
}
