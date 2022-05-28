import React from "react";
import styled from "styled-components/macro";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Anchor href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </Anchor>
  );
};

const Anchor = styled.a`
  padding: 16px 0;

  &:first-of-type {
    padding-top: 0;
  }

  & + & {
    border-top: 1px solid var(--color-gray-300);
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  grid-auto-flow: dense;
  gap: 32px;
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  grid-column: 2/3;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
