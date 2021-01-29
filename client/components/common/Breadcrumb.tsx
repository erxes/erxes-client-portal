import React from 'react';
import Link from 'next/link';
import Icon from './Icon';
import styled from 'styled-components';

type Props = {
  title: string;
  category?: any;
};

const Wrapper = styled.div`
  color: $grey;
  margin-bottom: 20px;

  span {
    display: inline-block;
    font-size: 14px;

    &.link {
      cursor: pointer;
      color: #6c718b;
      margin-right: 5px;
    }
  }

  i {
    font-size: 10px;
    margin-right: 5px;

    &:before {
      font-weight: 600;
    }
  }
`;

const Breadcrumb = (props: Props) => {
  const { title, category } = props;

  return (
    <Wrapper>
      <Link href="/">
        <span className="link">All categories</span>
      </Link>

      {category && (
        <>
          <Icon icon="chevron" />
          <Link href={`/knowledge-base/category?id ${category._id}`}>
            <span className="link">{category.title}</span>
          </Link>
        </>
      )}

      <Icon icon="chevron" />
      <span>{title}</span>
    </Wrapper>
  );
};

export default Breadcrumb;
