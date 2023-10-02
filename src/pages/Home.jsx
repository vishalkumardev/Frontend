import React, { useEffect } from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Courasel from "../components/Courasel";
import ExploreSeller from "../components/ExploreSeller";
import DailyDeals from "../components/DailyDeals";

function Home() {
  const getData = () => {
    const apiUrl =
      "https://staging.deardoc.biz/clinic/nearest/clinic?doctorId=bd2ac478-687d-4333-8b43-03dd0362f541&pm_doctor_id=bd2ac478-687d-4333-8b43-03dd0362f541&latitude=23.0720989&longitude=72.5151398&pm_call=true";

    const token =
      "Bearer $$REMEDO$$eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTcwODc1OTksIm5iZiI6MTY5NTc5MTU5OSwiaWF0IjoxNjk1NzkxNTk5LAogICJ1c2VySWQiOiAiZTQzYzZkZDMtODQ4ZS00OTM1LTg3ZjEtZmM5ZmQwMWY0ZGNmIiwKICAidXNlclR5cGUiOiAicHJhY3Rpc2VfbWFuYWdlciIsCiAgImNvbXBhbnlJZCI6IDEKfQ.5SuYG3PQlq_bqYIt_Zrc7dqooKoxwi9UAr-5zdAkt2Q";

    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      "Access-Control-Allow-Origin": "https://staging.deardoc.biz"
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the API response data here
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch error:", error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TopBar />
      <Header />
      <Courasel />
      <ExploreSeller />
      <DailyDeals />
    </>
  );
}

export default Home;
