"use client";

import { Header } from "@/components/Header/components";
import { selectMoviesAmount } from "@/redux/features/cart/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const HeaderContainer = ({ className }) => {
  const ticketAmount = useSelector(selectMoviesAmount);

  return <Header className={className} ticketAmount={ticketAmount} />;
};
