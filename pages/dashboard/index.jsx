import { getCookie } from "cookies-next";
import React from "react";
import { dehydrate, QueryClient } from "react-query";
import Layout from "../../components/Dashboard/Layout";
import { getUser } from "../../queries/queryFunction/user";
import { useGetUser } from "../../queries/queryHooks/user";
import useGlobalState from "../../store/global";

function Dashboard({ token }) {
  const { data, isLoading } = useGetUser(token);

  return (
    <>
      <Layout></Layout>
    </>
  );
}

export default Dashboard;

export async function getServerSideProps({ req, res }) {
  const queryClient = new QueryClient();
  const token = getCookie("token", { req, res });
  await queryClient.prefetchQuery("user", getUser(token));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      token,
    },
  };
}
