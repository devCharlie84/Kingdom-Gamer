import React from "react";
import MainBanner from "../../components/Basic/MainBanner";
import HomeGames from "../../components/Basic/HomeGames";
import HomeFunctionalities from "../../components/Basic/HomeFunctionalities";
import HomeRecommendedGames from "../../components/Basic/HomeRecommendedGames";

export default function BasicHome() {
  return (
    <>
      <MainBanner />
      <HomeGames />
      <HomeRecommendedGames />
      <HomeFunctionalities />
    </>
  );
}
