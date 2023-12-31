'use client';

import CategoryFooter from '@/app/components/category/CategoryFooter';
import CategoryTitle from '@/app/components/category/CategoryTitle';
import CategoryList from '@/app/components/category/CategoryList';
import CategoryHeader from '@/app/components/category/CategoryHeader';

const CategoryClient = () => {
  return (
    <main className="mx-4 flex h-full flex-col items-center overflow-auto">
      <CategoryHeader />
      <CategoryTitle />
      <CategoryList />
      <div className="flex-1" />
      <CategoryFooter />
    </main>
  );
};

export default CategoryClient;
