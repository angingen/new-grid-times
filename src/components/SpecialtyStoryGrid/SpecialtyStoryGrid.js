import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-areas:
    "market"
    "sport";

  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "market sport";
    gap: 32px;
  }
`;

const MarketsSection = styled.section`
  grid-area: market;
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(150px, 100%), 0.5fr));
  gap: 16px;
`;

const SportsSection = styled.section`
  grid-area: sport;

  @media ${QUERIES.desktopAndUp} {
    margin-left: -16px;
    padding-left: 16px;
    border-left: 1px solid var(--color-gray-300);
  }
`;

const SportsStories = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 16px;

  > * {
    flex: 0 0 calc(50% - 8px);
  }

  @media ${QUERIES.tabletAndUp} {
    flex-wrap: nowrap;
    overflow-x: auto;

    > * {
      max-width: 220px;
    }
  }
`;

export default SpecialtyStoryGrid;
