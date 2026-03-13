'use client';

import { ExploreDataContainer } from '@/containers';
import { formFilterSchema } from '@/lib/form-schema';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { filterGroupType } from '@/types';
import { JOB_CATEGORY_FILTER } from '@/constants';

interface FindJobsProps {}

const FILTER_GROUP: filterGroupType[] = [
  {
    name: 'categories',
    label: 'Categories',
    items: JOB_CATEGORY_FILTER,
  },
];

const FindJobsPage: FC<FindJobsProps> = ({}) => {
  const RHFormFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => {
    console.log(val);
  };

  return (
    <div>
      <ExploreDataContainer
        RHFormFilter={RHFormFilter}
        onSubmitFilter={onSubmitFormFilter}
        filterGroup={FILTER_GROUP}
      />
    </div>
  );
};

export default FindJobsPage;
