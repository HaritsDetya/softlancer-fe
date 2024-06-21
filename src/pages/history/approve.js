import React, { useEffect, useState } from "react";
import Header from "@/components/user/Header";
import { GoogleOAuthProvider } from "@react-oauth/google";
import HistoryNavigation from "@/components/user/history/HistoryNavigation";
import HistoryContainer from "@/components/user/history/HistoryContainer";
import HistoryCard from "@/components/user/history/HistoryCard";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HistoryCardSkeleton from "@/components/user/history/HistoryCardSkeleton";

export default function historyApprove() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      const res = await axios.get(`${process.env.API_URL}/applications/user?status=approve`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setHistory(res.data.data);
    } catch (error) {
      toast.error("No history found");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Header active={"history"} />
        <HistoryContainer>
          <HistoryNavigation current={"Approve"} />
          <div className="flex flex-wrap flex-col mx-8 mt-3">
            <ul role="list" className="space-y-3">
              {isLoading ? (
                <>
                  <HistoryCardSkeleton />
                  <HistoryCardSkeleton />
                  <HistoryCardSkeleton />
                </>
              ) : (
                history.map((history) => <HistoryCard key={history.name} history={history} />)
              )}
            </ul>
          </div>
        </HistoryContainer>
      </GoogleOAuthProvider>
    </>
  );
}
