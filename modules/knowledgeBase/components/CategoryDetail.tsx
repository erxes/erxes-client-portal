import React from "react";
import { Topic } from "../../types";
import Breadcrumb from "../../common/Breadcrumb";
import Icon from "../../common/Icon";
import {
  Container,
  CategoryLeft,
  Sidebar,
  SidebarItem,
  SidebarIcon,
  SidebarContent,
} from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import Articles from "./ArticleList";

type Props = {
  category: any;
  loading: boolean;
  topic: Topic;
};

function CategoryDetail({ loading, topic, category }: Props) {
  const renderCategories = () => {
    const categories = topic && topic.categories;

    if (!categories) return;

    const router = useRouter();
    const { id } = router.query;

    return categories.map((cat) => {
      return (
        <Link href={`/knowledge-base/category?id=${cat._id}`} key={cat._id}>
          <SidebarItem active={id === cat._id}>
            <SidebarIcon>
              <Icon icon={cat.icon || "book"} />
            </SidebarIcon>
            <SidebarContent>
              <h6>{cat.title}</h6>
              <p>{cat.description}</p>
            </SidebarContent>
          </SidebarItem>
        </Link>
      );
    });
  };

  return (
    <>
      <Breadcrumb title={category.title} />
      <Container>
        <CategoryLeft>
          {loading ? " Loading ..." : <Articles articles={category.articles} />}
        </CategoryLeft>

        <Sidebar>
          <h6>Categories</h6>
          {renderCategories()}
        </Sidebar>
      </Container>
    </>
  );
}

export default CategoryDetail;
