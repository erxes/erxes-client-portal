import { useRouter } from 'next/router';
import React from 'react';
import CategoryDetail from '../../../components/knowledgeBase/containers/CategoryDetail';

export default function Category() {
  const router = useRouter();

  return <CategoryDetail queryParams={router.query} />;
}
